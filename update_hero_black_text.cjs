const fs = require('fs');
const file = 'src/components/Hero.astro';

let content = fs.readFileSync(file, 'utf8');

// 1. Remove the paragraph
const paragraphRegex = /<p class="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-sm font-medium">\s*The simplest way for freelancers, remote workers, and expats to get set up in Greece while staying fully tax-compliant\.\s*<\/p>/;
content = content.replace(paragraphRegex, '');

// 2. Make the rotating text black and remove drop-shadow
content = content.replace(
  '<span id="word-rotator-text" class="text-white font-black text-left inline-block transition-all duration-500 transform translate-y-0 opacity-100 drop-shadow-[0_4px_16px_rgba(0,0,0,1)]">taxes.</span>',
  '<span id="word-rotator-text" class="text-black font-black text-left inline-block transition-all duration-500 transform translate-y-0 opacity-100 drop-shadow-none">taxes.</span>'
);

fs.writeFileSync(file, content);
