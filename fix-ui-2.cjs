const fs = require('fs');

// 1. Hero.astro
let hero = fs.readFileSync('src/components/Hero.astro', 'utf-8');

// Replace H1
const oldH1 = `<h1 class="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 max-w-5xl mx-auto leading-[1.1]">
      Relocate to Greece.<br/>
      <span class="text-slate-900">We handle the</span>
      <span class="word-spinner text-blue-800 text-left w-[8em] inline-block">
        <span>taxes.</span>
        <span>visa.</span>
        <span>bookkeeping.</span>
        <span class="whitespace-nowrap">tax number.</span>
      </span>
    </h1>`;

const newH1 = `<h1 class="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-slate-900 mb-8 max-w-5xl mx-auto leading-[1.1]">
      Relocate to Greece.<br/>
      <span class="text-slate-900">We handle</span>
      <span class="word-spinner text-blue-800 text-left w-[6.5em] inline-block">
        <span>taxes.</span>
        <span>visas.</span>
        <span>bookkeeping.</span>
        <span class="whitespace-nowrap">tax numbers.</span>
      </span>
    </h1>`;
hero = hero.replace(oldH1, newH1);

// Replace CTA
const oldCTA = `<a href="#configurator" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-blue-800 hover:bg-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
      Start to relocate
    </a>`;

const newCTA = `<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="#configurator" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-blue-800 hover:bg-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto">
        Start to relocate
      </a>
      <a href="#contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-blue-800 bg-white border-2 border-blue-800 hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto">
        Book a free call
      </a>
    </div>`;
hero = hero.replace(oldCTA, newCTA);
fs.writeFileSync('src/components/Hero.astro', hero);

// 2. Header.astro
let header = fs.readFileSync('src/components/Header.astro', 'utf-8');
const oldMenu = `<nav class="flex space-x-8">
          <a href="#how-it-works" class="text-slate-600 hover:text-slate-900 font-medium transition-colors">How it works</a>
          <a href="#services" class="text-slate-600 hover:text-slate-900 font-medium transition-colors">Services</a>
          <a href="#countries" class="text-slate-600 hover:text-slate-900 font-medium transition-colors">Countries</a>
          <a href="#prices" class="text-slate-600 hover:text-slate-900 font-medium transition-colors">Prices</a>
        </nav>`;

const newMenu = `<nav class="flex items-center space-x-8">
          <a href="#how-it-works" class="text-slate-600 hover:text-slate-900 font-medium transition-colors">How it works</a>
          <a href="#services" class="text-slate-600 hover:text-slate-900 font-medium transition-colors">Services</a>
          
          <!-- Countries Dropdown -->
          <div class="relative group py-2">
            <button class="text-slate-600 hover:text-slate-900 font-medium transition-colors flex items-center">
              Countries
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div class="py-2" role="menu" aria-orientation="vertical">
                <a href="/#configurator" class="block px-4 py-2.5 text-sm text-slate-800 hover:bg-slate-50 font-bold bg-slate-50/50">
                  <span class="flex items-center">
                    <img src="https://flagcdn.com/gr.svg" class="w-4 h-auto mr-2 rounded-sm border border-slate-200" alt="Greece"/> 
                    Greece
                  </span>
                </a>
                <a href="#contact" class="flex items-center justify-between px-4 py-2.5 text-sm text-slate-400 hover:bg-slate-50 transition-colors">
                  <span class="flex items-center">
                    <img src="https://flagcdn.com/es.svg" class="w-4 h-auto mr-2 rounded-sm border border-slate-200 opacity-50 grayscale" alt="Spain"/> 
                    Spain
                  </span>
                  <span class="text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Soon</span>
                </a>
                <a href="#contact" class="flex items-center justify-between px-4 py-2.5 text-sm text-slate-400 hover:bg-slate-50 transition-colors">
                  <span class="flex items-center">
                    <img src="https://flagcdn.com/pt.svg" class="w-4 h-auto mr-2 rounded-sm border border-slate-200 opacity-50 grayscale" alt="Portugal"/> 
                    Portugal
                  </span>
                  <span class="text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Soon</span>
                </a>
                <a href="#contact" class="flex items-center justify-between px-4 py-2.5 text-sm text-slate-400 hover:bg-slate-50 transition-colors">
                  <span class="flex items-center">
                    <img src="https://flagcdn.com/bg.svg" class="w-4 h-auto mr-2 rounded-sm border border-slate-200 opacity-50 grayscale" alt="Bulgaria"/> 
                    Bulgaria
                  </span>
                  <span class="text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Soon</span>
                </a>
              </div>
            </div>
          </div>
          
          <a href="#prices" class="text-slate-600 hover:text-slate-900 font-medium transition-colors">Prices</a>
        </nav>`;

header = header.replace(oldMenu, newMenu);
fs.writeFileSync('src/components/Header.astro', header);

// 3. Taxomade™ replacements
const filesToReplaceTM = [
  'src/components/AboutUs.astro',
  'src/components/Footer.astro'
];

for (const file of filesToReplaceTM) {
  let content = fs.readFileSync(file, 'utf-8');
  // Avoid replacing if it's already got &trade;, or if it's in a url or logo alt text.
  content = content.replace(/(?<!\/|alt="|title=")taxomade(?!\&trade\;|\.com|\.web\.app)/g, 'taxomade&trade;');
  fs.writeFileSync(file, content);
}

