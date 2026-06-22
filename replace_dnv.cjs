const fs = require('fs');
const file = 'src/pages/greece/digital-nomad-visa.astro';
let content = fs.readFileSync(file, 'utf8');

const replacement = `    <!-- Section 3: Split Timeline -->
    <section class="max-w-5xl mx-auto mb-24 px-4 sm:px-0">
      <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-16 text-center tracking-tight">How it works — and how little you do</h2>
      
      <div class="relative w-full">
        <!-- Headers (Desktop only) -->
        <div class="hidden md:flex mb-6 relative z-10">
          <div class="w-1/2 flex justify-end pr-12">
            <h3 class="text-sm font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-1 rounded-full border border-slate-200">You</h3>
          </div>
          <div class="w-1/2 pl-12">
            <h3 class="text-sm font-black text-blue-800 uppercase tracking-widest bg-blue-50 px-4 py-1 rounded-full border border-blue-200 inline-block">Taxomade handles</h3>
          </div>
        </div>

        <!-- Vertical Line -->
        <div class="absolute left-6 md:left-1/2 top-16 bottom-4 w-1 bg-gradient-to-b from-blue-100 via-emerald-200 to-blue-100 rounded-full md:transform md:-translate-x-1/2 opacity-60"></div>
        
        <div class="space-y-12 md:space-y-16">
          <!-- Step 1 -->
          <div class="relative flex flex-col md:flex-row items-start md:items-center">
            <div class="md:w-1/2 flex justify-start md:justify-end pl-16 md:pl-0 md:pr-12 w-full mb-4 md:mb-0">
               <div class="bg-white border border-slate-100 rounded-xl p-5 shadow-sm w-full md:max-w-[280px] relative z-10">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-slate-400">You</span>
                    <span class="text-xs font-mono font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md">~1 week</span>
                  </div>
                  <p class="text-sm text-slate-600">Send your passport, income proof & request your criminal record at home.</p>
               </div>
            </div>
            <div class="absolute left-6 md:left-1/2 top-8 md:top-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-600 text-blue-600 font-black flex items-center justify-center transform -translate-x-1/2 md:-translate-y-1/2 z-20 shadow-md text-lg">1</div>
            <div class="md:w-1/2 pl-16 md:pl-12 w-full">
               <div class="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-md w-full md:max-w-[400px] relative z-10 border-l-4 border-l-blue-600">
                  <div class="text-xs font-black uppercase tracking-wider text-blue-800 mb-2">Taxomade handles</div>
                  <p class="text-lg font-bold text-slate-900 leading-snug">We give you the exact checklist, prepare your forms & declaration, and organize all translations.</p>
               </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative flex flex-col md:flex-row items-start md:items-center">
            <div class="md:w-1/2 flex justify-start md:justify-end pl-16 md:pl-0 md:pr-12 w-full mb-4 md:mb-0">
               <div class="bg-white border border-slate-100 rounded-xl p-5 shadow-sm w-full md:max-w-[280px] relative z-10">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-slate-400">You</span>
                    <span class="text-xs font-mono font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md">~1 day</span>
                  </div>
                  <p class="text-sm text-slate-600">Pick a policy from our recommended providers.</p>
               </div>
            </div>
            <div class="absolute left-6 md:left-1/2 top-8 md:top-1/2 w-10 h-10 rounded-full bg-white border-4 border-emerald-500 text-emerald-600 font-black flex items-center justify-center transform -translate-x-1/2 md:-translate-y-1/2 z-20 shadow-md text-lg">2</div>
            <div class="md:w-1/2 pl-16 md:pl-12 w-full">
               <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-md w-full md:max-w-[400px] relative z-10 border-l-4 border-l-emerald-500">
                  <div class="text-xs font-black uppercase tracking-wider text-emerald-700 mb-2">Taxomade handles</div>
                  <p class="text-lg font-bold text-slate-900 leading-snug">We point you to trusted options other freelancers use — usually sorted in a day.</p>
               </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative flex flex-col md:flex-row items-start md:items-center">
            <div class="md:w-1/2 flex justify-start md:justify-end pl-16 md:pl-0 md:pr-12 w-full mb-4 md:mb-0">
               <div class="bg-white border border-slate-100 rounded-xl p-5 shadow-sm w-full md:max-w-[280px] relative z-10">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-slate-400">You</span>
                    <span class="text-xs font-mono font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md">varies</span>
                  </div>
                  <p class="text-sm text-slate-600">One quick errand at home — we tell you exactly where to go.</p>
               </div>
            </div>
            <div class="absolute left-6 md:left-1/2 top-8 md:top-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-600 text-blue-600 font-black flex items-center justify-center transform -translate-x-1/2 md:-translate-y-1/2 z-20 shadow-md text-lg">3</div>
            <div class="md:w-1/2 pl-16 md:pl-12 w-full">
               <div class="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-md w-full md:max-w-[400px] relative z-10 border-l-4 border-l-blue-600">
                  <div class="text-xs font-black uppercase tracking-wider text-blue-800 mb-2">Taxomade handles</div>
                  <p class="text-lg font-bold text-slate-900 leading-snug">We send you the precise authority for your country and handle the certified translations.</p>
               </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="relative flex flex-col md:flex-row items-start md:items-center">
            <div class="md:w-1/2 flex justify-start md:justify-end pl-16 md:pl-0 md:pr-12 w-full mb-4 md:mb-0">
               <div class="bg-white border border-slate-100 rounded-xl p-5 shadow-sm w-full md:max-w-[280px] relative z-10">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-slate-400">You</span>
                    <span class="text-xs font-mono font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md text-xs">1–3m</span>
                  </div>
                  <p class="text-sm text-slate-600">Attend one appointment at your Greek consulate.</p>
               </div>
            </div>
            <div class="absolute left-6 md:left-1/2 top-8 md:top-1/2 w-10 h-10 rounded-full bg-white border-4 border-emerald-500 text-emerald-600 font-black flex items-center justify-center transform -translate-x-1/2 md:-translate-y-1/2 z-20 shadow-md text-lg">4</div>
            <div class="md:w-1/2 pl-16 md:pl-12 w-full">
               <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-md w-full md:max-w-[400px] relative z-10 border-l-4 border-l-emerald-500">
                  <div class="text-xs font-black uppercase tracking-wider text-emerald-700 mb-2">Taxomade handles</div>
                  <p class="text-lg font-bold text-slate-900 leading-snug">We identify your consulate, prepare your full file, and our lawyer handles the legal submission.</p>
               </div>
            </div>
          </div>

          <!-- Step 5 -->
          <div class="relative flex flex-col md:flex-row items-start md:items-center">
            <div class="md:w-1/2 flex justify-start md:justify-end pl-16 md:pl-0 md:pr-12 w-full mb-4 md:mb-0">
               <div class="bg-white border border-slate-100 rounded-xl p-5 shadow-sm w-full md:max-w-[280px] relative z-10">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-slate-400">You</span>
                    <span class="text-xs font-mono font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md text-[10px]">if staying 12+m</span>
                  </div>
                  <p class="text-sm text-slate-600">One quick biometrics visit in Greece.</p>
               </div>
            </div>
            <div class="absolute left-6 md:left-1/2 top-8 md:top-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-600 text-blue-600 font-black flex items-center justify-center transform -translate-x-1/2 md:-translate-y-1/2 z-20 shadow-md text-lg">5</div>
            <div class="md:w-1/2 pl-16 md:pl-12 w-full">
               <div class="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-md w-full md:max-w-[400px] relative z-10 border-l-4 border-l-blue-600">
                  <div class="text-xs font-black uppercase tracking-wider text-blue-800 mb-2">Taxomade handles</div>
                  <p class="text-lg font-bold text-slate-900 leading-snug">Our lawyer prepares and represents your residence permit.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <p class="text-xl font-medium text-slate-700 mb-8 italic">"Staying under 12 months? The consulate visit is your only in-person step — we handle the rest."</p>
        <a href="#configurator" class="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-xl text-white bg-slate-900 hover:bg-blue-800 transition-colors duration-200 shadow-xl hover:-translate-y-1 transform">
          Book a free call
        </a>
      </div>
    </section>

    <!-- Pricing Package -->
    <section class="max-w-5xl mx-auto mb-24 px-4 sm:px-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Single Service -->
        <div class="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden relative transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div class="absolute top-0 left-0 w-full h-1 bg-blue-800"></div>
          <div class="p-8 h-full flex flex-col">
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Digital Nomad Visa Package</h3>
            <p class="text-slate-500 mb-6 flex-grow">Full end-to-end management of your application.</p>
            <div class="flex items-baseline mb-8">
              <span class="text-5xl font-black text-slate-900">€1.500</span>
              <span class="text-slate-500 ml-2">/ one-off</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start text-slate-700"><svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Eligibility check & document review</li>
              <li class="flex items-start text-slate-700"><svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Document translation & legalization support</li>
              <li class="flex items-start text-slate-700"><svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Consulate appointment prep</li>
              <li class="flex items-start text-slate-700"><svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> AFM registration upon arrival</li>
            </ul>
            <a href="#configurator" class="block w-full py-4 px-6 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition-colors duration-200 text-center">Start application</a>
          </div>
        </div>

        <!-- Full Package -->
        <div class="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden relative transform transition duration-300 hover:-translate-y-1 hover:shadow-blue-900/50">
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-bl-full opacity-20 -z-0"></div>
          <div class="absolute top-0 left-0 w-full h-1 bg-emerald-400"></div>
          <div class="p-8 h-full flex flex-col relative z-10">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 w-max">Most Popular</div>
            <h3 class="text-2xl font-bold text-white mb-2">The Complete Setup</h3>
            <p class="text-slate-400 mb-6 flex-grow">Everything you need to legally work and live in Greece.</p>
            <div class="flex items-baseline mb-8">
              <span class="text-5xl font-black text-white">Custom</span>
            </div>
            <ul class="space-y-4 mb-8 text-slate-300">
              <li class="flex items-start"><svg class="w-5 h-5 text-emerald-400 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> DNV & Residence Permit</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-emerald-400 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> AFM Registration</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-emerald-400 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Article 5C Application</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-emerald-400 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Freelancer Setup & Bookkeeping</li>
            </ul>
            <a href="#configurator" class="block w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-colors duration-200 text-center shadow-lg">Build Your Package</a>
          </div>
        </div>
      </div>
    </section>`

const regex = /<!-- Section 3: Your easy steps -->[\s\S]*?<\/section>\s*<!-- Pricing Package -->[\s\S]*?<\/section>/;
content = content.replace(regex, replacement);
fs.writeFileSync(file, content);
