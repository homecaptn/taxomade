const fs = require('fs');
const file = 'src/components/Hero.astro';

let content = fs.readFileSync(file, 'utf8');

// 1. Update the description paragraph
content = content.replace(
  'The simplest way for freelancers, remote workers, and expats to get set up in Greece, Spain, Portugal, or Bulgaria while staying fully tax-compliant.',
  'The simplest way for freelancers, remote workers, and expats to get set up in Greece while staying fully tax-compliant.'
);

// 2. Replace the spinner HTML
const oldSpinner = `<div class="whitespace-nowrap flex items-center mt-2">
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

const newSpinner = `<div class="whitespace-nowrap flex items-center mt-2">
            <span class="text-white mr-4">We handle</span>
            <span id="word-rotator-pill" class="inline-flex items-center justify-center bg-white rounded-full px-5 py-1 md:py-2 shadow-xl align-middle translate-y-[-0.05em] transition-all duration-500 overflow-hidden" style="min-width: 4em;">
              <span id="word-rotator-text" class="text-slate-900 font-black text-center inline-block transition-all duration-500 transform translate-y-0 opacity-100">taxes.</span>
            </span>
          </div>`;

content = content.replace(oldSpinner, newSpinner);

// 3. Remove the old CSS
const cssRegex = /<style>[\s\S]*?\.word-spinner[\s\S]*?<\/style>/;
content = content.replace(cssRegex, `<script>
  document.addEventListener('DOMContentLoaded', () => {
    const words = ['taxes.', 'visas.', 'bookkeeping.', 'tax numbers.'];
    let index = 0;
    const textEl = document.getElementById('word-rotator-text');

    if (textEl) {
      setInterval(() => {
        // 1. Slide up and fade out
        textEl.style.transform = 'translateY(-150%)';
        textEl.style.opacity = '0';
        
        setTimeout(() => {
          // 2. Change text and move to bottom instantly
          index = (index + 1) % words.length;
          textEl.style.transition = 'none'; 
          textEl.style.transform = 'translateY(150%)';
          textEl.innerText = words[index];
          
          // Force reflow
          void textEl.offsetWidth;
          
          // 3. Slide in and fade in
          textEl.style.transition = 'all 0.5s cubic-bezier(0.2, 0.6, 0.2, 1)';
          textEl.style.transform = 'translateY(0)';
          textEl.style.opacity = '1';
        }, 500); 
        
      }, 3000);
    }
  });
</script>`);

fs.writeFileSync(file, content);
