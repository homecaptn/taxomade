const fs = require('fs');

const headerHtml = `---
---
<header id="site-header" data-scrolled="false" class="fixed w-full top-0 z-50 transition-all duration-300 bg-transparent border-b border-transparent">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      
      <!-- Logo (Left) -->
      <div class="flex-shrink-0 flex items-center">
        <a href="/">
          <!-- Filter turns the dark logo white when at the top -->
          <img src="/logo.svg" alt="taxomade Logo" class="h-8 w-auto transition-all duration-300 brightness-0 invert group-data-[scrolled=true]/header:invert-0 group-data-[scrolled=true]/header:brightness-100" id="site-logo" />
        </a>
      </div>
      
      <!-- Right aligned section: Nav + CTA -->
      <div class="hidden md:flex items-center space-x-8 ml-auto" id="nav-container">
        <nav class="flex items-center space-x-8">
          <a href="#how-it-works" class="nav-link font-medium transition-colors text-white hover:text-slate-200">How it works</a>
          <a href="#services" class="nav-link font-medium transition-colors text-white hover:text-slate-200">Services</a>
          
          <!-- Countries Dropdown -->
          <div class="relative group py-2">
            <button class="nav-link font-medium transition-colors flex items-center text-white hover:text-slate-200">
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
          
          <a href="#prices" class="nav-link font-medium transition-colors text-white hover:text-slate-200">Prices</a>
        </nav>
        
        <a href="#configurator" id="header-cta" class="inline-flex items-center justify-center pl-5 pr-3 py-2 text-sm font-bold rounded-lg transition-colors duration-200 group bg-white text-slate-900 hover:bg-slate-200 shadow-md">
          <span class="mr-3">Talk to us</span>
          <div class="flex -space-x-1.5">
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white group-hover:ring-slate-100 object-cover cta-ring" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Support Staff 1" />
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white group-hover:ring-slate-100 object-cover cta-ring" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Support Staff 2" />
          </div>
        </a>
      </div>

    </div>
  </div>
</header>

<script>
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    const logo = document.getElementById('site-logo');
    const links = document.querySelectorAll('.nav-link');
    const cta = document.getElementById('header-cta');
    const rings = document.querySelectorAll('.cta-ring');

    if (window.scrollY > 50) {
      header.classList.remove('bg-transparent', 'border-transparent');
      header.classList.add('bg-white/90', 'backdrop-blur-md', 'border-slate-200');
      
      logo.classList.remove('brightness-0', 'invert');
      
      links.forEach(link => {
        link.classList.remove('text-white', 'hover:text-slate-200');
        link.classList.add('text-slate-600', 'hover:text-slate-900');
      });

      cta.classList.remove('bg-white', 'text-slate-900', 'hover:bg-slate-200');
      cta.classList.add('bg-slate-900', 'text-white', 'hover:bg-blue-800');

      rings.forEach(ring => {
        ring.classList.remove('ring-white', 'group-hover:ring-slate-100');
        ring.classList.add('ring-blue-800', 'group-hover:ring-blue-900');
      });

    } else {
      header.classList.add('bg-transparent', 'border-transparent');
      header.classList.remove('bg-white/90', 'backdrop-blur-md', 'border-slate-200');
      
      logo.classList.add('brightness-0', 'invert');
      
      links.forEach(link => {
        link.classList.add('text-white', 'hover:text-slate-200');
        link.classList.remove('text-slate-600', 'hover:text-slate-900');
      });

      cta.classList.add('bg-white', 'text-slate-900', 'hover:bg-slate-200');
      cta.classList.remove('bg-slate-900', 'text-white', 'hover:bg-blue-800');

      rings.forEach(ring => {
        ring.classList.add('ring-white', 'group-hover:ring-slate-100');
        ring.classList.remove('ring-blue-800', 'group-hover:ring-blue-900');
      });
    }
  });
</script>
`;

const heroHtml = `---
---
<section class="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900">
  
  <!-- Background Image with Acropolis (No darken overlay, just a top shadow for the header) -->
  <div class="absolute inset-0 z-0 overflow-hidden">
    <div class="absolute inset-0 bg-[url('/images/acropolis-day.jpg')] bg-cover bg-center scale-105"></div>
  </div>

  <!-- Subtle dark gradient at the very top so the transparent white header is readable -->
  <div class="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-900/60 to-transparent pointer-events-none z-0"></div>

  <div class="max-w-7xl mx-auto relative z-10 mt-8">
    <div class="flex flex-col items-start relative">
      
      <!-- Left: Text content -->
      <div class="text-left relative z-20 w-full drop-shadow-lg">
        <h1 class="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight text-white mb-8 leading-[1.1]">
          <div class="whitespace-nowrap drop-shadow-2xl">Relocate to Greece.</div>
          <div class="whitespace-nowrap flex items-baseline drop-shadow-2xl">
            <span class="text-white mr-3">We handle</span>
            <span class="word-spinner text-blue-400 text-left w-[7em] md:w-[8em] inline-block drop-shadow-2xl">
              <span>taxes.</span>
              <span>visas.</span>
              <span>bookkeeping.</span>
              <span>tax numbers.</span>
            </span>
          </div>
        </h1>
        <p class="text-xl md:text-2xl text-white mb-10 max-w-2xl font-bold drop-shadow-lg">
          The simplest way for freelancers, remote workers, and expats to get set up in Greece, Spain, Portugal, or Bulgaria while staying fully tax-compliant.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-start gap-4">
          <a href="#configurator" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-slate-900 bg-white hover:bg-slate-200 transition-colors duration-200 w-full sm:w-auto shadow-xl">
            Start to relocate
          </a>
          <a href="#contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 transition-colors duration-200 w-full sm:w-auto shadow-xl backdrop-blur-sm">
            Book a free call
          </a>
        </div>
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
`;

fs.writeFileSync('src/components/Header.astro', headerHtml);
fs.writeFileSync('src/components/Hero.astro', heroHtml);
