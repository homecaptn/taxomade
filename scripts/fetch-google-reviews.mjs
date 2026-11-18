// Fetches taxomade's Google reviews via the official Places API (New) at build time.
// Needs GOOGLE_PLACES_API_KEY (GitHub secret). Without a key, or on any error,
// the existing src/data/google-reviews.json is kept unchanged.
import { writeFileSync, readFileSync } from 'node:fs';

const KEY = process.env.GOOGLE_PLACES_API_KEY;
const OUT = new URL('../src/data/google-reviews.json', import.meta.url);
let placeId = process.env.GOOGLE_PLACE_ID || '';

async function main() {
  if (!KEY) { console.log('[reviews] no GOOGLE_PLACES_API_KEY – keeping existing data'); return; }
  const headers = { 'Content-Type': 'application/json', 'X-Goog-Api-Key': KEY };
  if (!placeId) {
    const r = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: { ...headers, 'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress' },
      body: JSON.stringify({ textQuery: 'taxomade', languageCode: 'en', includePureServiceAreaBusinesses: true }),
    });
    const j = await r.json();
    if (!r.ok) throw new Error('searchText ' + r.status + ' ' + JSON.stringify(j).slice(0, 300));
    const hit = (j.places || []).find(p => /taxomade/i.test(p.displayName?.text || '')) || (j.places || [])[0];
    if (!hit) throw new Error('no place found for "taxomade"');
    placeId = hit.id;
    console.log('[reviews] place found:', hit.displayName?.text, '|', hit.formattedAddress, '| id', placeId);
  }
  const r = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=en`, {
    headers: { ...headers, 'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,googleMapsUri,reviews' },
  });
  const p = await r.json();
  if (!r.ok) throw new Error('details ' + r.status + ' ' + JSON.stringify(p).slice(0, 300));
  const data = {
    fetchedAt: new Date().toISOString(),
    placeId: p.id,
    name: p.displayName?.text || 'taxomade',
    rating: p.rating ?? null,
    count: p.userRatingCount ?? 0,
    mapsUrl: p.googleMapsUri || '',
    reviews: (p.reviews || []).map(rv => ({
      author: rv.authorAttribution?.displayName || 'Google user',
      authorUrl: rv.authorAttribution?.uri || '',
      photo: rv.authorAttribution?.photoUri || '',
      rating: rv.rating,
      when: rv.relativePublishTimeDescription || '',
      publishTime: rv.publishTime || '',
      text: (rv.originalText?.text || rv.text?.text || '').trim(),
      reviewUrl: rv.googleMapsUri || '',
    })).filter(rv => rv.text),
  };
  writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n');
  console.log(`[reviews] saved ${data.reviews.length} reviews, rating ${data.rating} (${data.count})`);
}

main().catch(e => { console.log('[reviews] fetch failed, keeping existing data:', e.message); });
