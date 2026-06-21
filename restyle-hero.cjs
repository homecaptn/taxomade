const fs = require('fs');

const heroHtml = `---
---
<section class="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-100">
  <!-- Subtle background grid structure -->
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10"></div>
  <!-- Fade out at the bottom -->
  <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none -z-10"></div>

  <div class="max-w-7xl mx-auto relative z-10">
    <h1 class="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 max-w-5xl mx-auto leading-[1.1]">
      Relocate to Greece.<img src="https://flagcdn.com/gr.svg" class="inline-block h-[0.6em] w-auto -mt-4 ml-3 rounded-md shadow-sm border border-slate-200" alt="Greece" /><br/>
      <span class="text-slate-900">We handle the</span>
      <span class="word-spinner text-blue-800 text-left w-[5.5em] inline-block">
        <span>taxes.</span>
        <span>visa.</span>
        <span>bookkeeping.</span>
        <span class="whitespace-nowrap">tax number.</span>
      </span>
    </h1>
    <p class="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12">
      The simplest way for freelancers, remote workers, and expats to get set up in Greece, Spain, Italy, or Bulgaria while staying fully tax-compliant.
    </p>
    <a href="#configurator" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-blue-800 hover:bg-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
      Find out what you need
    </a>
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
</style>
`;

fs.writeFileSync('src/components/Hero.astro', heroHtml);
