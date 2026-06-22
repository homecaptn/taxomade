const fs = require('fs');
const file = 'src/components/Hero.astro';

let content = fs.readFileSync(file, 'utf8');

// Darken overlay
content = content.replace(
  '<div class="absolute inset-0 bg-slate-900/60 pointer-events-none -z-10"></div>',
  '<div class="absolute inset-0 bg-slate-900/80 pointer-events-none -z-10"></div>'
);

// Add stronger drop-shadow to H1
content = content.replace(
  '<h1 class="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight text-white mb-8 leading-[1.1]">',
  '<h1 class="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight text-white mb-8 leading-[1.1] drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">'
);

// Update word-spinner drop-shadow
content = content.replace(
  '<span class="word-spinner text-blue-300 text-left w-[7em] md:w-[8em] inline-block drop-shadow-md">',
  '<span class="word-spinner text-blue-300 text-left w-[7em] md:w-[8em] inline-block drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">'
);

// Add stronger drop-shadow to paragraph
content = content.replace(
  '<p class="text-xl md:text-2xl text-slate-100 mb-10 max-w-2xl drop-shadow-sm font-medium">',
  '<p class="text-xl md:text-2xl text-slate-100 mb-10 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium">'
);

fs.writeFileSync(file, content);
