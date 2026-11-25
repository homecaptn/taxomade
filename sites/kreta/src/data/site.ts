export const SITE = {
  name: 'Kreta auswandern',
  domain: 'kreta-auswandern.de',
  url: 'https://kreta-auswandern.de',
  stand: 'November 2026',
  standIso: '2026-11-25',
};

export const TAXOMADE = {
  // Partner für Steuern & Buchhaltung. Nur bestehende deutsche Ratgeber verlinken.
  kreta: 'https://taxomade.com/de/ratgeber/auswandern-kreta-steuern-anmeldung/',
  umzugSteuern: 'https://taxomade.com/de/ratgeber/umzug-griechenland-aus-deutschland-steuern/',
  selbststaendig: 'https://taxomade.com/de/ratgeber/steuern-selbststaendige-griechenland-2026/',
  ike: 'https://taxomade.com/de/ratgeber/ike-gruenden-griechenland-kosten/',
  buchhalter: 'https://taxomade.com/de/ratgeber/buchhalter-griechenland-kosten/',
  artikel5c: 'https://taxomade.com/de/ratgeber/steuervorteil-50-prozent-griechenland-artikel-5c/',
};

export const KONTAKT = {
  // Anfragen gehen über das Formular an die bestehende taxomade-Funktion (E-Mail an info@taxomade.com)
  formular: '/kontakt/',
  api: 'https://taxomade.com/api/submitContactForm',
  whatsapp: 'https://wa.me/491743426818',
};

export const NAV = [
  { href: '/checkliste/', label: 'Checkliste' },
  { href: '/regionen/', label: 'Regionen' },
  { href: '/leben/', label: 'Leben auf Kreta' },
  { href: '/behoerden-steuern/', label: 'Behörden & Steuern' },
  { href: '/faq/', label: 'FAQ' },
];

export const REGIONEN = [
  { href: '/regionen/chania/', label: 'Chania', kurz: 'Westen: Altstadt, Berge, viele Ausländer, höchste Mieten', img: 'chania' },
  { href: '/regionen/rethymno/', label: 'Rethymno', kurz: 'Mitte-West: Uni-Stadt, ruhiger, gute Mitte zwischen beiden Flughäfen', img: 'rethymno' },
  { href: '/regionen/heraklion/', label: 'Heraklion', kurz: 'Mitte: Großstadt, Krankenhäuser, Uni, größter Flughafen', img: 'heraklion-stalida' },
  { href: '/regionen/lasithi/', label: 'Lasithi', kurz: 'Osten: Agios Nikolaos, Ierapetra, Sitia, am günstigsten', img: 'agios-nikolaos' },
];

export const LEBEN = [
  { href: '/leben/vor-und-nachteile/', label: 'Vor- und Nachteile', kurz: 'Was auf Kreta wirklich gut ist und was nervt' },
  { href: '/leben/wohnung-mieten/', label: 'Wohnung mieten', kurz: 'Mietpreise, Vertrag, Kaution, typische Fallen' },
  { href: '/leben/haus-kaufen/', label: 'Haus kaufen', kurz: 'Ablauf, Nebenkosten, Prüfungen vor dem Kauf' },
  { href: '/leben/lebenshaltungskosten/', label: 'Lebenshaltungskosten', kurz: 'Was ein Monat auf Kreta kostet, mit Beispielbudget' },
  { href: '/leben/aerzte-krankenversicherung/', label: 'Ärzte & Krankenversicherung', kurz: 'EOPYY, S1, private Versicherung, Krankenhäuser' },
  { href: '/leben/schulen-kinder/', label: 'Schulen & Kinder', kurz: 'Schulpflicht, griechische und private Schulen' },
  { href: '/leben/arbeiten/', label: 'Arbeiten & Remote Work', kurz: 'Jobs, Selbstständigkeit, Internet, Coworking' },
  { href: '/leben/auto-fuehrerschein/', label: 'Auto & Führerschein', kurz: 'Führerschein, Auto mitbringen, ummelden' },
  { href: '/leben/wetter/', label: 'Wetter & Jahreszeiten', kurz: 'Sommer, Winter, Wind, Wassertemperatur' },
];

// Einstieg nach Lebenslage auf der Startseite
export const EINSTIEG = [
  { icon: '🧭', titel: 'Ich plane den Umzug', text: 'AFM, Wohnung, Konto, Anmeldung: was zuerst kommt und was Sie schon von Deutschland aus erledigen.', href: '/checkliste/', link: 'Zur Checkliste' },
  { icon: '🌅', titel: 'Ich gehe in Rente', text: 'Rente, Krankenkasse mit S1, 7 % Pauschalsteuer und die richtige Gegend.', href: '/rentner/', link: 'Als Rentner nach Kreta' },
  { icon: '💻', titel: 'Ich arbeite von Kreta aus', text: 'Remote für Deutschland oder selbstständig: Steuern, Sozialversicherung, 50 % Steuervorteil.', href: '/leben/arbeiten/', link: 'Arbeiten auf Kreta' },
  { icon: '🏡', titel: 'Ich will kaufen oder mieten', text: 'Preise je Region, Ablauf beim Hauskauf und die Fallen, die Sie vorher kennen sollten.', href: '/leben/haus-kaufen/', link: 'Haus kaufen' },
];
