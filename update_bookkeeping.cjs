const fs = require('fs');

const content = `    <!-- Section 3: Split Timeline -->
    <section class="max-w-4xl mx-auto mb-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">How it works, <span class="text-slate-400">how little you do.</span></h2>
        <p class="text-lg text-slate-600">You send your numbers, we do the rest.</p>
      </div>
      
      <div class="relative">
        <!-- Central Line -->
        <div class="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-slate-200 -translate-x-1/2"></div>
        
        <!-- Step 1 -->
        <div class="relative flex flex-col md:flex-row items-center justify-between mb-16">
          <div class="md:w-[45%] mb-6 md:mb-0 md:text-right opacity-60">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
              Your part
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Sign Authorization</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Say yes and sign the authorization.</p>
          </div>
          
          <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 font-bold z-10 hidden md:flex">
            1
          </div>
          
          <div class="md:w-[45%] text-center md:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              taxomade™
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">One-time setup</h3>
            <p class="text-slate-600 text-sm leading-relaxed">We register your freelancer status, EFKA, VAT and e-invoicing.</p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="relative flex flex-col md:flex-row items-center justify-between mb-16">
          <div class="md:w-[45%] mb-6 md:mb-0 md:text-right opacity-60">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span class="mr-2 opacity-50">~5 min</span> Your part
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Send invoices</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Send us your invoices and income.</p>
          </div>
          
          <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 font-bold z-10 hidden md:flex">
            2
          </div>
          
          <div class="md:w-[45%] text-center md:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              taxomade™
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Each month</h3>
            <p class="text-slate-600 text-sm leading-relaxed">We file your myDATA, EFKA, VAT and issue compliant e-invoices.</p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="relative flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-[45%] mb-6 md:mb-0 md:text-right opacity-60">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
              Your part
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Nothing</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Nothing — we already have it.</p>
          </div>
          
          <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white font-bold border-2 border-emerald-600 z-10 hidden md:flex shadow-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          
          <div class="md:w-[45%] text-center md:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              taxomade™
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Year-end</h3>
            <p class="text-slate-600 text-sm leading-relaxed">We file your annual accounts and tax return, with a plain-English summary.</p>
          </div>
        </div>

      </div>
      
      <div class="mt-16 text-center">
        <p class="text-xl font-medium text-slate-700 mb-8 italic">"You send your numbers once a month. We handle everything else — in English."</p>
        <a href="#configurator" class="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-xl text-white bg-slate-900 hover:bg-blue-800 transition-colors duration-200 shadow-xl hover:-translate-y-1 transform mb-16">
          Start your bookkeeping
        </a>
      </div>

      <!-- Add-on Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-slate-200 pt-16">
        <a href="#" class="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group block">
          <h4 class="font-bold text-slate-900 mb-2 group-hover:text-blue-700">Greek bank account help &rarr;</h4>
          <p class="text-sm text-slate-500">We assist you in opening a local business account remotely.</p>
        </a>
        <a href="#" class="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group block">
          <h4 class="font-bold text-slate-900 mb-2 group-hover:text-blue-700">Registered business address &rarr;</h4>
          <p class="text-sm text-slate-500">Don't have an office yet? Use our compliant local address.</p>
        </a>
        <a href="#" class="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group block">
          <h4 class="font-bold text-slate-900 mb-2 group-hover:text-blue-700">Health insurance &rarr;</h4>
          <p class="text-sm text-slate-500">Get recommendations for top expat-friendly providers.</p>
        </a>
      </div>
    </section>`;

const f = 'src/pages/greece/ongoing-bookkeeping.astro';
let text = fs.readFileSync(f, 'utf8');
text = text.replace(/<!-- Section 3: Split Timeline -->[\s\S]*?<\/section>\s*<!-- Pricing Package -->/, content + '\n\n    <!-- Pricing Package -->');
fs.writeFileSync(f, text);
