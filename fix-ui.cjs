const fs = require('fs');

// 1. Hero.astro
let hero = fs.readFileSync('src/components/Hero.astro', 'utf-8');
// Remove flag
hero = hero.replace('<img src="https://flagcdn.com/gr.svg" class="inline-block h-[0.6em] w-auto -mt-4 ml-3 rounded-md shadow-sm border border-slate-200" alt="Greece" />', '');
// Increase width of spinner
hero = hero.replace('w-[5.5em]', 'w-[8em]');
// Change CTA
hero = hero.replace('Find out what you need', 'Start to relocate');
fs.writeFileSync('src/components/Hero.astro', hero);

// 2. AboutUs.astro
let about = fs.readFileSync('src/components/AboutUs.astro', 'utf-8');
// Change names
about = about.replace('Leonard and Jannik', 'Leonard and Manoli');
fs.writeFileSync('src/components/AboutUs.astro', about);

// 3. Replace Taxomade -> taxomade across files
const filesToReplace = [
  'src/components/Header.astro',
  'src/components/Footer.astro',
  'src/components/AboutUs.astro',
  'src/pages/index.astro'
];

for (const file of filesToReplace) {
  let content = fs.readFileSync(file, 'utf-8');
  // Use regex to replace Taxomade with taxomade globally
  content = content.replace(/Taxomade/g, 'taxomade');
  fs.writeFileSync(file, content);
}

// 4. Update index.astro specifically to ensure the title also says taxomade
// But "taxomade" instead of "Taxomade". The global replace should have caught this:
// <Layout title="taxomade | Relocate to Greece">
