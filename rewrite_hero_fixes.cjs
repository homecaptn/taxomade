const fs = require('fs');
const file = 'src/components/Hero.astro';

let content = fs.readFileSync(file, 'utf8');

// Change description text to pure white
content = content.replace(
  '<p class="text-xl md:text-2xl text-slate-100 mb-10 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium">',
  '<p class="text-xl md:text-2xl text-white mb-10 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium">'
);

// Remove the glowing drop shadow from the word-spinner
content = content.replace(
  '<span class="word-spinner text-blue-300 text-left w-[7em] md:w-[8em] inline-block drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">',
  '<span class="word-spinner text-blue-300 text-left w-[7em] md:w-[8em] inline-block">'
);

fs.writeFileSync(file, content);
