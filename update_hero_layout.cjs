const fs = require('fs');
const file = 'src/components/Hero.astro';

let content = fs.readFileSync(file, 'utf8');

// 1. Shift everything up by reducing paddings and margins
content = content.replace(
  '<section class="relative pt-32 pb-32 md:pt-40 md:pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-100 bg-cover bg-center"',
  '<section class="relative pt-20 pb-20 md:pt-28 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-100 bg-cover bg-center"'
);

content = content.replace(
  '<div class="flex flex-col items-start relative mt-12 md:mt-24 mb-16">',
  '<div class="flex flex-col items-start relative mt-4 md:mt-8 mb-8">'
);

content = content.replace(
  '<div class="mb-10">',
  '<div class="mb-6">'
);

// 2. Remove H1 drop shadow and reduce margin
content = content.replace(
  '<h1 class="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight text-white mb-8 leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,1)]">',
  '<h1 class="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight text-white mb-6 leading-[1.1]">'
);

// 3. Change blue-400 to blue-600
content = content.replaceAll('text-blue-400', 'text-blue-600');

// 4. Reduce description margin and remove drop-shadow-sm just in case
content = content.replace(
  '<p class="text-xl md:text-2xl text-white mb-10 max-w-2xl drop-shadow-sm font-medium">',
  '<p class="text-xl md:text-2xl text-white mb-8 max-w-2xl font-medium">'
);

// 5. Remove border from checkpoints and reduce top padding
content = content.replace(
  '<div class="w-full mt-auto pt-10 relative z-20">',
  '<div class="w-full mt-auto pt-4 relative z-20">'
);
content = content.replace(
  '<div class="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 py-6 border-t border-white/20">',
  '<div class="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 py-6">'
);

// 6. Remove drop-shadow-sm from checkpoints
content = content.replaceAll(
  '<div class="flex items-center text-white font-bold text-base md:text-lg drop-shadow-sm">',
  '<div class="flex items-center text-white font-bold text-base md:text-lg">'
);

fs.writeFileSync(file, content);
