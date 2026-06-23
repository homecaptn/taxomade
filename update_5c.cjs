const fs = require('fs');

const content = `    <!-- Section 3: Split Timeline -->
    <section class="max-w-4xl mx-auto mb-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">How it works, <span class="text-slate-400">how little you do.</span></h2>
        <p class="text-lg text-slate-600">We handle the whole application.</p>
      </div>
      
      <div class="relative">
        <!-- Central Line -->
        <div class="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-slate-200 -translate-x-1/2"></div>
        
        <!-- Step 1 -->
        <div class="relative flex flex-col md:flex-row items-center justify-between mb-16">
          <div class="md:w-[45%] mb-6 md:mb-0 md:text-right opacity-60">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span class="mr-2 opacity-50">same day</span> Your part
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Provide Info</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Tell us your situation and income.</p>
          </div>
          
          <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 font-bold z-10 hidden md:flex">
            1
          </div>
          
          <div class="md:w-[45%] text-center md:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              taxomade™
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Assess & Calculate</h3>
            <p class="text-slate-600 text-sm leading-relaxed">We confirm you qualify and calculate exactly what you'll save.</p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="relative flex flex-col md:flex-row items-center justify-between mb-16">
          <div class="md:w-[45%] mb-6 md:mb-0 md:text-right opacity-60">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span class="mr-2 opacity-50">by July 31</span> Your part
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Docs & Sign</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Share a couple of documents and sign.</p>
          </div>
          
          <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 font-bold z-10 hidden md:flex">
            2
          </div>
          
          <div class="md:w-[45%] text-center md:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              taxomade™
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Filing</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Our accountant prepares and files your application on time — fully remote.</p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="relative flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-[45%] mb-6 md:mb-0 md:text-right opacity-60">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span class="mr-2 opacity-50">up to 7y</span> Your part
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Nothing</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Nothing further.</p>
          </div>
          
          <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white font-bold border-2 border-emerald-600 z-10 hidden md:flex shadow-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          
          <div class="md:w-[45%] text-center md:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              taxomade™
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Ongoing exemptions</h3>
            <p class="text-slate-600 text-sm leading-relaxed">We apply the 50% exemption to your filings, year after year.</p>
          </div>
        </div>

      </div>
      
      <div class="mt-16 text-center">
        <p class="text-xl font-medium text-slate-700 mb-8 italic">"Fully remote, no notary. Just a few details and a signature."</p>
        <a href="#configurator" class="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-xl text-white bg-slate-900 hover:bg-blue-800 transition-colors duration-200 shadow-xl hover:-translate-y-1 transform">
          Book a free call
        </a>
      </div>
    </section>`;

const f = 'src/pages/greece/50-percent-tax-break.astro';
let text = fs.readFileSync(f, 'utf8');
text = text.replace(/<!-- Section 3: Split Timeline -->[\s\S]*?<\/section>\s*<!-- Pricing Package -->/, content + '\n\n    <!-- Pricing Package -->');
fs.writeFileSync(f, text);
