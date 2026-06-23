const fs = require('fs');

const content = `    <!-- Section 3: Split Timeline -->
    <section class="max-w-4xl mx-auto mb-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">How it works, <span class="text-slate-400">how little you do.</span></h2>
        <p class="text-lg text-slate-600">We handle the heavy lifting of your visa application.</p>
      </div>
      
      <div class="relative">
        <!-- Central Line -->
        <div class="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-slate-200 -translate-x-1/2"></div>
        
        <!-- Step 1 -->
        <div class="relative flex flex-col md:flex-row items-center justify-between mb-16">
          <div class="md:w-[45%] mb-6 md:mb-0 md:text-right opacity-60">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span class="mr-2 opacity-50">~1 week</span> Your part
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Gather documents</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Send your passport, income proof & request your criminal record at home.</p>
          </div>
          
          <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 font-bold z-10 hidden md:flex">
            1
          </div>
          
          <div class="md:w-[45%] text-center md:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              taxomade™
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Checklist & Prep</h3>
            <p class="text-slate-600 text-sm leading-relaxed">We give you the exact checklist, prepare your forms & declaration, and organize all translations.</p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="relative flex flex-col md:flex-row items-center justify-between mb-16">
          <div class="md:w-[45%] mb-6 md:mb-0 md:text-right opacity-60">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span class="mr-2 opacity-50">~1 day</span> Your part
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Pick insurance</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Pick a policy from our recommended providers.</p>
          </div>
          
          <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 font-bold z-10 hidden md:flex">
            2
          </div>
          
          <div class="md:w-[45%] text-center md:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              taxomade™
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Recommendations</h3>
            <p class="text-slate-600 text-sm leading-relaxed">We point you to trusted options other freelancers use — usually sorted in a day.</p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="relative flex flex-col md:flex-row items-center justify-between mb-16">
          <div class="md:w-[45%] mb-6 md:mb-0 md:text-right opacity-60">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span class="mr-2 opacity-50">varies</span> Your part
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Apostilles</h3>
            <p class="text-slate-600 text-sm leading-relaxed">One quick errand at home — we tell you exactly where to go.</p>
          </div>
          
          <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 font-bold z-10 hidden md:flex">
            3
          </div>
          
          <div class="md:w-[45%] text-center md:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              taxomade™
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Translation & Legalization</h3>
            <p class="text-slate-600 text-sm leading-relaxed">We send you the precise authority for your country and handle the certified translations.</p>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="relative flex flex-col md:flex-row items-center justify-between mb-16">
          <div class="md:w-[45%] mb-6 md:mb-0 md:text-right opacity-60">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span class="mr-2 opacity-50">1-3 months</span> Your part
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Consulate Visit</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Attend one appointment at your Greek consulate.</p>
          </div>
          
          <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 font-bold z-10 hidden md:flex">
            4
          </div>
          
          <div class="md:w-[45%] text-center md:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              taxomade™
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Filing & Lawyer Support</h3>
            <p class="text-slate-600 text-sm leading-relaxed">We identify your consulate, prepare your full file, and our lawyer handles the legal submission.</p>
          </div>
        </div>

        <!-- Step 5 -->
        <div class="relative flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-[45%] mb-6 md:mb-0 md:text-right opacity-60">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span class="mr-2 opacity-50">if 12+ months</span> Your part
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Biometrics</h3>
            <p class="text-slate-600 text-sm leading-relaxed">One quick biometrics visit in Greece.</p>
          </div>
          
          <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white font-bold border-2 border-emerald-600 z-10 hidden md:flex shadow-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          
          <div class="md:w-[45%] text-center md:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              taxomade™
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Residence Permit</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Our lawyer prepares and represents your residence permit.</p>
          </div>
        </div>

      </div>
      
      <div class="mt-16 text-center">
        <p class="text-xl font-medium text-slate-700 mb-8 italic">"Staying under 12 months? The consulate visit is your only in-person step — we handle the rest."</p>
        <a href="#configurator" class="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-xl text-white bg-slate-900 hover:bg-blue-800 transition-colors duration-200 shadow-xl hover:-translate-y-1 transform">
          Book a free call
        </a>
      </div>
    </section>`;

const f = 'src/pages/greece/digital-nomad-visa.astro';
let text = fs.readFileSync(f, 'utf8');
text = text.replace(/<!-- Section 3: Split Timeline -->[\s\S]*?<\/section>\s*<!-- Pricing Package -->/, content + '\n\n    <!-- Pricing Package -->');
fs.writeFileSync(f, text);
