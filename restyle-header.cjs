const fs = require('fs');

const headerHtml = `---
---
<header class="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      
      <!-- Logo (Left) -->
      <div class="flex-shrink-0 flex items-center">
        <a href="/">
          <img src="/logo.svg" alt="Taxomade Logo" class="h-8 w-auto" />
        </a>
      </div>
      
      <!-- Right aligned section: Nav + CTA -->
      <div class="hidden md:flex items-center space-x-8 ml-auto">
        <nav class="flex space-x-8">
          <a href="#how-it-works" class="text-slate-600 hover:text-slate-900 font-medium transition-colors">How it works</a>
          <a href="#services" class="text-slate-600 hover:text-slate-900 font-medium transition-colors">Services</a>
          <a href="#countries" class="text-slate-600 hover:text-slate-900 font-medium transition-colors">Countries</a>
          <a href="#prices" class="text-slate-600 hover:text-slate-900 font-medium transition-colors">Prices</a>
        </nav>
        
        <a href="#configurator" class="inline-flex items-center justify-center pl-5 pr-3 py-2 text-sm font-bold rounded-lg text-white bg-blue-800 hover:bg-blue-900 shadow-sm hover:shadow-md transition-all duration-200 group">
          <span class="mr-3">Talk to us</span>
          <div class="flex -space-x-1.5">
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-blue-800 group-hover:ring-blue-900 object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Support Staff 1" />
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-blue-800 group-hover:ring-blue-900 object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Support Staff 2" />
          </div>
        </a>
      </div>

    </div>
  </div>
</header>
`;

fs.writeFileSync('src/components/Header.astro', headerHtml);
