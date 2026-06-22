const fs = require('fs');
const file = 'src/components/Hero.astro';

let content = fs.readFileSync(file, 'utf8');

// 1. Shift Hero section bottom up
content = content.replace(
  '<section class="relative pt-20 pb-20 md:pt-28 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-100 bg-cover bg-center"',
  '<section class="relative pt-20 pb-12 md:pt-28 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-100 bg-cover bg-center"'
);

// 2. Change blue-600 to blue-800
content = content.replaceAll('text-blue-600', 'text-blue-800');

// 3. Add slight drop shadow to rotating text
content = content.replace(
  '<span id="word-rotator-text" class="text-blue-800 font-black text-left inline-block transition-all duration-500 transform translate-y-0 opacity-100 drop-shadow-none">taxes.</span>',
  '<span id="word-rotator-text" class="text-blue-800 font-black text-left inline-block transition-all duration-500 transform translate-y-0 opacity-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">taxes.</span>'
);

// 4. Add slight drop shadow to description
content = content.replace(
  '<p class="text-xl md:text-2xl text-white mb-8 max-w-2xl font-medium">',
  '<p class="text-xl md:text-2xl text-white mb-8 max-w-2xl font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">'
);

fs.writeFileSync(file, content);
