const fs = require('fs');
const file = 'src/components/Hero.astro';

let content = fs.readFileSync(file, 'utf8');

// 1. Darken background overlay for better contrast
content = content.replace(
  '<div class="absolute inset-0 bg-slate-900/85 pointer-events-none -z-10"></div>',
  '<div class="absolute inset-0 bg-slate-900/90 pointer-events-none -z-10"></div>'
);

// 2. Add text-shadow to the H1
content = content.replace(
  '<h1 class="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight text-white mb-8 leading-[1.1] drop-shadow-sm">',
  '<h1 class="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight text-white mb-8 leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,1)]">'
);

// 3. Remove the white pill and make spinner text blue-300 with drop shadow
const oldSpinner = `<div class="whitespace-nowrap flex items-center mt-2">
            <span class="text-white mr-4">We handle</span>
            <span id="word-rotator-pill" class="inline-flex items-center justify-center bg-white rounded-full px-5 py-1 md:py-2 shadow-xl align-middle translate-y-[-0.05em] transition-all duration-500 overflow-hidden" style="min-width: 4em;">
              <span id="word-rotator-text" class="text-slate-900 font-black text-center inline-block transition-all duration-500 transform translate-y-0 opacity-100">taxes.</span>
            </span>
          </div>`;

const newSpinner = `<div class="whitespace-nowrap flex items-baseline mt-2">
            <span class="text-white mr-3">We handle</span>
            <span class="inline-flex items-center align-baseline overflow-hidden" style="min-width: 4em;">
              <span id="word-rotator-text" class="text-blue-300 font-black text-left inline-block transition-all duration-500 transform translate-y-0 opacity-100 drop-shadow-[0_4px_16px_rgba(0,0,0,1)]">taxes.</span>
            </span>
          </div>`;

content = content.replace(oldSpinner, newSpinner);

// 4. Add the bullet points between the paragraph and buttons
const oldParagraph = `<p class="text-xl md:text-2xl text-white mb-10 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium">
          The simplest way for freelancers, remote workers, and expats to get set up in Greece while staying fully tax-compliant.
        </p>`;

const newParagraphWithBullets = `<p class="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium">
          The simplest way for freelancers, remote workers, and expats to get set up in Greece while staying fully tax-compliant.
        </p>
        
        <ul class="flex flex-col space-y-3 mb-10 text-white font-medium text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <li class="flex items-center">
            <svg class="w-6 h-6 mr-3 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            Fast, reliable, and completely remote
          </li>
          <li class="flex items-center">
            <svg class="w-6 h-6 mr-3 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            End-to-end relocation and tax support
          </li>
          <li class="flex items-center">
            <svg class="w-6 h-6 mr-3 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            Available for both EU & Non-EU citizens
          </li>
        </ul>`;

content = content.replace(oldParagraph, newParagraphWithBullets);

fs.writeFileSync(file, content);
