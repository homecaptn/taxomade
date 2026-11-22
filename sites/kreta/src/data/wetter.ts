// Wetter für die Wetterleiste. Wird beim Build einmal von Open-Meteo geladen
// (kein Aufruf im Browser der Besucher, also kein Tracking, keine Cookies).
// Der Deploy-Workflow baut die Seite jeden Morgen neu, damit die Werte aktuell sind.
// Schlägt der Abruf fehl, wird die Leiste einfach nicht angezeigt.

export interface WetterOrt {
  name: string;
  max: number;
  min: number;
  meer: number | null;
  text: string;
  icon: string;
}
export interface Wetter {
  datum: string; // z. B. "23.11.2026"
  orte: WetterOrt[];
}

const ORTE = [
  { name: 'Chania', lat: 35.514, lon: 24.018 },
  { name: 'Rethymno', lat: 35.369, lon: 24.474 },
  { name: 'Heraklion', lat: 35.341, lon: 25.134 },
  { name: 'Agios Nikolaos', lat: 35.19, lon: 25.716 },
];

// WMO-Wettercodes, vereinfacht
function beschreibe(code: number): { text: string; icon: string } {
  if (code === 0) return { text: 'sonnig', icon: '☀️' };
  if (code <= 2) return { text: 'leicht bewölkt', icon: '🌤️' };
  if (code === 3) return { text: 'bewölkt', icon: '☁️' };
  if (code <= 48) return { text: 'neblig', icon: '🌫️' };
  if (code <= 67 || (code >= 80 && code <= 82)) return { text: 'Regen', icon: '🌧️' };
  if (code <= 77 || code === 85 || code === 86) return { text: 'Schnee', icon: '🌨️' };
  return { text: 'Gewitter', icon: '⛈️' };
}

async function holeJson(url: string) {
  const r = await fetch(url, { signal: AbortSignal.timeout(10000) });
  if (!r.ok) throw new Error(`HTTP ${r.status} für ${url}`);
  return r.json();
}

async function lade(): Promise<Wetter | null> {
  if (process.env.KRETA_WETTER_MOCK) {
    return {
      datum: '23.11.2026',
      orte: ORTE.map((o, i) => ({ name: o.name, max: 19 + i, min: 12 + i, meer: 21, ...beschreibe(i % 3) })),
    };
  }
  try {
    const lat = ORTE.map((o) => o.lat).join(',');
    const lon = ORTE.map((o) => o.lon).join(',');
    const wetter = await holeJson(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FAthens&forecast_days=1`,
    );
    let meer: any[] = [];
    try {
      meer = await holeJson(
        `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&daily=sea_surface_temperature_max&timezone=Europe%2FAthens&forecast_days=1`,
      );
    } catch (e) {
      console.warn('[wetter] Meerestemperatur nicht verfügbar:', (e as Error).message);
    }
    const liste = Array.isArray(wetter) ? wetter : [wetter];
    const meerListe = Array.isArray(meer) ? meer : [meer];
    const orte = ORTE.map((o, i) => {
      const d = liste[i].daily;
      const m = meerListe[i]?.daily?.sea_surface_temperature_max?.[0];
      return {
        name: o.name,
        max: Math.round(d.temperature_2m_max[0]),
        min: Math.round(d.temperature_2m_min[0]),
        meer: typeof m === 'number' ? Math.round(m) : null,
        ...beschreibe(d.weather_code[0]),
      };
    });
    const [y, mo, da] = String(liste[0].daily.time[0]).split('-');
    return { datum: `${da}.${mo}.${y}`, orte };
  } catch (e) {
    console.warn('[wetter] Open-Meteo nicht erreichbar, Wetterleiste wird ausgeblendet:', (e as Error).message);
    return null;
  }
}

let cache: Promise<Wetter | null> | undefined;
export function ladeWetter() {
  cache ??= lade();
  return cache;
}
