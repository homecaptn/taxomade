const fs = require('fs');

const heroHtml = `---
---
<section class="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-100">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10"></div>
  <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none -z-10"></div>

  <div class="max-w-7xl mx-auto relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative">
      
      <!-- Left: Text content -->
      <div class="text-left relative z-20">
        <!-- Using whitespace-nowrap and flexible text sizing to guarantee single lines -->
        <h1 class="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight text-slate-900 mb-8 leading-[1.1]">
          <div class="whitespace-nowrap">Relocate to Greece.</div>
          <div class="whitespace-nowrap flex items-baseline">
            <span class="text-slate-900 mr-3">We handle</span>
            <span class="word-spinner text-blue-800 text-left w-[5.5em] md:w-[6.5em] inline-block">
              <span>taxes.</span>
              <span>visas.</span>
              <span>bookkeeping.</span>
              <span>tax numbers.</span>
            </span>
          </div>
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

      <!-- Right: Airplane -->
      <div class="relative w-full h-[300px] md:h-[400px] lg:h-[600px] pointer-events-none z-10 flex items-center justify-center overflow-visible lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2">
        <img 
          src="/images/airplane.png" 
          alt="taxomade&trade; relocation airplane" 
          id="hero-airplane"
          class="w-[120%] max-w-[600px] h-auto object-contain drop-shadow-2xl mix-blend-multiply transition-transform duration-75 ease-out will-change-transform translate-x-12 translate-y-12" 
        />
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
</style>

<script>
  // Simple scroll listener to move the airplane diagonally
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const airplane = document.getElementById('hero-airplane');
    if (airplane) {
      // Moves left (-X) and up (-Y) as you scroll down
      // Base offset: translate-x-12 translate-y-12 = 3rem (48px)
      // I'll calculate total via string template
      const moveX = 48 - (scrollY * 0.5);
      const moveY = 48 - (scrollY * 0.3);
      airplane.style.transform = \`translate3d(\${moveX}px, \${moveY}px, 0)\`;
    }
  }, { passive: true });
</script>
`;

fs.writeFileSync('src/components/Hero.astro', heroHtml);
