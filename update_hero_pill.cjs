const fs = require('fs');
const file = 'src/components/Hero.astro';

let content = fs.readFileSync(file, 'utf8');

// Darken background more and add left gradient for text contrast
content = content.replace(
  '<div class="absolute inset-0 bg-slate-900/80 pointer-events-none -z-10"></div>',
  '<div class="absolute inset-0 bg-slate-900/85 pointer-events-none -z-10"></div>\n  <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent pointer-events-none -z-10"></div>'
);

// Update the spinning words section
const oldSpinner = `<div class="whitespace-nowrap flex items-baseline">
            <span class="text-white mr-3">We handle</span>
            <span class="word-spinner text-blue-300 text-left w-[7em] md:w-[8em] inline-block">
              <span>taxes.</span>
              <span>visas.</span>
              <span>bookkeeping.</span>
              <span>tax numbers.</span>
            </span>
          </div>`;

const newSpinner = `<div class="whitespace-nowrap flex items-center mt-2">
            <span class="text-white mr-4">We handle</span>
            <span class="inline-flex items-center justify-center bg-white rounded-full px-5 py-1 md:py-2 shadow-xl align-middle translate-y-[-0.05em]">
              <span class="word-spinner text-slate-900 font-black text-left w-[5.5em] md:w-[6.5em]">
                <span>taxes.</span>
                <span>visas.</span>
                <span>bookkeeping.</span>
                <span>tax numbers.</span>
              </span>
            </span>
          </div>`;

content = content.replace(oldSpinner, newSpinner);

fs.writeFileSync(file, content);
