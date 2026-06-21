const fs = require('fs');

// 1. Update Header Button Hover
let header = fs.readFileSync('src/components/Header.astro', 'utf-8');
header = header.replace(
  'text-white bg-blue-800 hover:bg-blue-900 shadow-sm hover:shadow-md transition-all duration-200 group',
  'text-white bg-slate-900 hover:bg-blue-800 transition-colors duration-200 group'
);
fs.writeFileSync('src/components/Header.astro', header);

// 2. Update Hero Button Hovers & word spinner width
let hero = fs.readFileSync('src/components/Hero.astro', 'utf-8');
// Fix word spinner width
hero = hero.replace('w-[5.5em] md:w-[6.5em]', 'w-[7em] md:w-[8em]');

// Fix primary CTA
hero = hero.replace(
  'text-white bg-blue-800 hover:bg-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5',
  'text-white bg-slate-900 hover:bg-blue-800 transition-colors duration-200'
);

// Fix secondary CTA
hero = hero.replace(
  'text-blue-800 bg-white border-2 border-blue-800 hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5',
  'text-slate-900 bg-white border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-200'
);

// To fix the grid being split 50/50 and squishing the left content when we removed the airplane,
// let's just make the left side full width but constrained.
hero = hero.replace('<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative">', '<div class="flex flex-col items-start relative">');
hero = hero.replace('<div class="text-left relative z-20">', '<div class="text-left relative z-20 w-full">');
fs.writeFileSync('src/components/Hero.astro', hero);

// 3. Update Prices.astro
const pricesHtml = `---
---
<section id="prices" class="py-24 bg-slate-50 border-t border-slate-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-sm font-bold text-blue-800 uppercase tracking-widest mb-4 block">Transparent Pricing</span>
      <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">The right package for your setup.</h2>
      <p class="text-lg text-slate-600">No hidden fees, no surprises. Choose the package that perfectly fits your situation.</p>
    </div>

    <!-- 4 columns grid. The first 3 are normal size, the last one is slightly narrower if we let it, but grid-cols-4 makes them equal. We can use col-span-3 for the main packages and col-span-1 for the custom, or a custom grid. -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
      
      <!-- Basic Package -->
      <div class="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-200 flex flex-col hover:shadow-lg transition-shadow">
        <h3 class="text-lg font-bold text-slate-900 mb-2">Remote Employee</h3>
        <p class="text-slate-500 text-xs mb-6 min-h-[48px]">Perfect for remote workers who don't need a visa or freelancer setup.</p>
        
        <div class="mb-6 pb-6 border-b border-slate-100">
          <div class="flex items-end mb-1">
            <span class="text-3xl font-black text-slate-900">€290</span>
            <span class="text-slate-500 ml-1 mb-1 text-sm">setup</span>
          </div>
          <div class="text-sm font-bold text-slate-600">+ €39 / month</div>
        </div>
        
        <ul class="space-y-4 mb-8 flex-1">
          <li class="flex items-start">
            <svg class="w-4 h-4 text-blue-800 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-slate-600 text-sm">Tax Number (AFM)</span>
          </li>
          <li class="flex items-start">
            <svg class="w-4 h-4 text-blue-800 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-slate-600 text-sm">50% Tax Break</span>
          </li>
          <li class="flex items-start">
            <svg class="w-4 h-4 text-blue-800 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-slate-600 text-sm">Annual Tax Return</span>
          </li>
        </ul>
        
        <a href="#contact" class="block w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 text-center font-bold rounded-xl transition-colors">Get started</a>
      </div>

      <!-- EU Package -->
      <div class="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-200 flex flex-col hover:shadow-lg transition-shadow">
        <h3 class="text-lg font-bold text-slate-900 mb-2">EU Freelancer</h3>
        <p class="text-slate-500 text-xs mb-6 min-h-[48px]">For EU citizens setting up a freelance business in Greece.</p>
        
        <div class="mb-6 pb-6 border-b border-slate-100">
          <div class="flex items-end mb-1">
            <span class="text-3xl font-black text-slate-900">€490</span>
            <span class="text-slate-500 ml-1 mb-1 text-sm">setup</span>
          </div>
          <div class="text-sm font-bold text-slate-600">+ €149 / month</div>
        </div>
        
        <ul class="space-y-4 mb-8 flex-1">
          <li class="flex items-start">
            <svg class="w-4 h-4 text-blue-800 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-slate-600 text-sm">Tax Number (AFM)</span>
          </li>
          <li class="flex items-start">
            <svg class="w-4 h-4 text-blue-800 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-slate-600 text-sm">50% Tax Break</span>
          </li>
          <li class="flex items-start">
            <svg class="w-4 h-4 text-blue-800 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-slate-600 text-sm">Freelancer Registration</span>
          </li>
          <li class="flex items-start">
            <svg class="w-4 h-4 text-blue-800 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-slate-600 text-sm">Monthly Bookkeeping</span>
          </li>
        </ul>
        
        <a href="#contact" class="block w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 text-center font-bold rounded-xl transition-colors">Get started</a>
      </div>

      <!-- Complete Package (Highlighted) -->
      <div class="bg-slate-900 rounded-3xl p-6 lg:p-8 shadow-xl border border-slate-800 flex flex-col relative transform md:-translate-y-4">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full whitespace-nowrap">Full Setup</div>
        
        <h3 class="text-lg font-bold text-white mb-2">Non-EU Freelancer</h3>
        <p class="text-slate-400 text-xs mb-6 min-h-[48px]">The complete package including the Digital Nomad Visa.</p>
        
        <div class="mb-6 pb-6 border-b border-slate-700">
          <div class="flex items-end mb-1">
            <span class="text-3xl font-black text-white">€990</span>
            <span class="text-slate-400 ml-1 mb-1 text-sm">setup</span>
          </div>
          <div class="text-sm font-bold text-blue-400">+ €149 / month</div>
        </div>
        
        <ul class="space-y-4 mb-8 flex-1">
          <li class="flex items-start">
            <svg class="w-4 h-4 text-blue-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-white font-bold text-sm">Digital Nomad Visa</span>
          </li>
          <li class="flex items-start">
            <svg class="w-4 h-4 text-blue-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-slate-300 text-sm">Tax Number (AFM)</span>
          </li>
          <li class="flex items-start">
            <svg class="w-4 h-4 text-blue-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-slate-300 text-sm">50% Tax Break</span>
          </li>
          <li class="flex items-start">
            <svg class="w-4 h-4 text-blue-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-slate-300 text-sm">Freelancer Registration</span>
          </li>
          <li class="flex items-start">
            <svg class="w-4 h-4 text-blue-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-slate-300 text-sm">Monthly Bookkeeping</span>
          </li>
        </ul>
        
        <a href="#contact" class="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white text-center font-bold rounded-xl transition-colors">Get started</a>
      </div>

      <!-- Custom Request -->
      <div class="bg-transparent rounded-3xl p-6 lg:p-8 border-2 border-dashed border-slate-300 flex flex-col justify-center text-center items-center opacity-80 hover:opacity-100 transition-opacity">
        <div class="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        </div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Custom Needs?</h3>
        <p class="text-slate-500 text-xs mb-6">Need a golden visa, property purchase support, or corporate structuring?</p>
        
        <a href="#contact" class="block w-full py-3 px-4 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-900 text-center font-bold rounded-xl transition-colors">Contact Us</a>
      </div>

    </div>
  </div>
</section>
`;

fs.writeFileSync('src/components/Prices.astro', pricesHtml);
