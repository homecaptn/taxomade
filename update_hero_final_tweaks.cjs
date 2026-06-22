const fs = require('fs');
const file = 'src/components/Hero.astro';

let content = fs.readFileSync(file, 'utf8');

// 1. Shift checkpoints up 1cm (mb-4 md:mb-8)
content = content.replace(
  '<div class="w-full mt-auto pt-4 relative z-20">',
  '<div class="w-full mt-auto mb-4 md:mb-8 pt-4 relative z-20">'
);

// 2. Change checkmarks to white
content = content.replaceAll(
  '<svg class="w-6 h-6 mr-3 text-blue-800 flex-shrink-0"',
  '<svg class="w-6 h-6 mr-3 text-white flex-shrink-0"'
);

// 3. Remove shadow from the blue rotating words
content = content.replace(
  '<span id="word-rotator-text" class="text-blue-800 font-black text-left inline-block transition-all duration-500 transform translate-y-0 opacity-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">taxes.</span>',
  '<span id="word-rotator-text" class="text-blue-800 font-black text-left inline-block transition-all duration-500 transform translate-y-0 opacity-100 drop-shadow-none">taxes.</span>'
);

// 4. Slightly darken the background more
content = content.replace(
  '<div class="absolute inset-0 bg-slate-900/90 pointer-events-none -z-10"></div>',
  '<div class="absolute inset-0 bg-slate-950/95 pointer-events-none -z-10"></div>'
);
content = content.replace(
  '<div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent pointer-events-none -z-10"></div>',
  '<div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/50 to-transparent pointer-events-none -z-10"></div>'
);

fs.writeFileSync(file, content);
