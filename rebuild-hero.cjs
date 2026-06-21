const fs = require('fs');

// 1. Overwrite Hero.astro entirely
const heroHtml = `---
---
<section class="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-100">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10"></div>
  <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none -z-10"></div>

  <div class="max-w-7xl mx-auto relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      
      <!-- Left: Text content -->
      <div class="text-left">
        <h1 class="text-5xl md:text-7xl lg:text-[4.5rem] font-black tracking-tight text-slate-900 mb-8 leading-[1.1]">
          Relocate to Greece.<br/>
          <span class="text-slate-900">We handle</span>
          <span class="word-spinner text-blue-800 text-left w-[6.5em] inline-block">
            <span>taxes.</span>
            <span>visas.</span>
            <span>bookkeeping.</span>
            <span class="whitespace-nowrap">tax numbers.</span>
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl">
          The simplest way for freelancers, remote workers, and expats to get set up in Greece, Spain, Portugal, or Bulgaria while staying fully tax-compliant.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-start gap-4">
          <a href="#configurator" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-blue-800 hover:bg-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto">
            Start to relocate
          </a>
          <a href="#contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-blue-800 bg-white border-2 border-blue-800 hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto">
            Book a free call
          </a>
        </div>
      </div>

      <!-- Right: Graphic -->
      <div class="relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">
        <!-- Abstract gradient blob behind image -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
        <img src="/images/hero-abstract.png" alt="taxomade&trade; abstract concept" class="w-full h-auto object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]" />
      </div>

    </div>
  </div>
</section>

<style>
  .word-spinner {
    display: inline-grid;
    overflow: hidden;
    height: 1.1em;
    vertical-align: bottom;
    padding-bottom: 0.1em;
  }
  .word-spinner span {
    grid-column: 1;
    grid-row: 1;
    animation: spin 10s cubic-bezier(0.2, 0.6, 0.2, 1) infinite;
    opacity: 0;
    transform: translateY(100%);
  }
  .word-spinner span:nth-child(1) { animation-delay: 0s; }
  .word-spinner span:nth-child(2) { animation-delay: 2.5s; }
  .word-spinner span:nth-child(3) { animation-delay: 5.0s; }
  .word-spinner span:nth-child(4) { animation-delay: 7.5s; }
  
  @keyframes spin {
    0% { transform: translateY(100%); opacity: 0; }
    5% { transform: translateY(0); opacity: 1; }
    20% { transform: translateY(0); opacity: 1; }
    25% { transform: translateY(-100%); opacity: 0; }
    100% { transform: translateY(-100%); opacity: 0; }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
</style>
`;
fs.writeFileSync('src/components/Hero.astro', heroHtml);

// 2. Add Prices to index.astro
let indexAstro = fs.readFileSync('src/pages/index.astro', 'utf-8');
if (!indexAstro.includes("import Prices")) {
  indexAstro = indexAstro.replace("import AboutUs from '../components/AboutUs.astro';", "import AboutUs from '../components/AboutUs.astro';\nimport Prices from '../components/Prices.astro';");
  indexAstro = indexAstro.replace("<Trust />", "<Prices />\n    <Trust />");
  fs.writeFileSync('src/pages/index.astro', indexAstro);
}

// 3. Make sure 'Prices' link in Header works. It should already work because it uses <a href="#prices">
