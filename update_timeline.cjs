const fs = require('fs');
const file = 'src/components/Timeline.astro';

const content = `---
---
<section id="how-it-works" class="py-20 bg-white overflow-hidden border-b border-slate-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-28">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Our Services</h2>
      <p class="text-lg text-slate-600 max-w-2xl mx-auto">Book exactly what you need. Choose individual services like just the Tax Number or Visa, or let us handle your entire relocation from A to Z.</p>
    </div>

    <!-- Timeline Container -->
    <div class="relative max-w-7xl mx-auto mt-24">
      
      <!-- Wavy Dashed SVG Line (Hidden on mobile) -->
      <div class="hidden md:block absolute top-[80px] left-0 w-full h-[200px] z-0 opacity-20 pointer-events-none">
        <svg preserveAspectRatio="none" viewBox="0 0 1000 100" class="w-full h-full" fill="none" stroke="currentColor">
          <path d="M0,50 Q250,100 500,50 T1000,50" stroke-width="2" stroke-dasharray="10 10" class="text-slate-400"></path>
        </svg>
      </div>

      <!-- Visual Bracket for Non-EU -->
      <div class="hidden lg:block absolute top-[-60px] left-[1%] w-[18%] h-[20px] border-t-[3px] border-l-[3px] border-r-[3px] border-dashed border-blue-300 rounded-t-xl z-0">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 px-6 py-2 text-sm md:text-base font-black text-white tracking-widest whitespace-nowrap shadow-md rounded-full">NON-EU</div>
      </div>
      <!-- Standard Path Label -->
      <div class="hidden lg:block absolute top-[-60px] left-[21%] right-[1%] h-[20px] border-t-[3px] border-l-[3px] border-r-[3px] border-solid border-slate-800 rounded-t-xl z-0">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 px-6 py-2 text-sm md:text-base font-black text-white tracking-widest whitespace-nowrap shadow-md rounded-full">EU / NON-EU</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative z-10 pt-8">
        
        <!-- Step 1: Visa (Colorful / Distinct) -->
        <div class="flex flex-col h-full">
          <div id="timeline-step-visa" class="bg-blue-50 p-5 lg:p-6 pt-16 rounded-2xl border-2 border-blue-200 shadow-sm transition-all duration-300 relative text-left flex flex-col items-start w-full flex-1 min-h-[420px] overflow-hidden">
            
            <div class="absolute top-5 right-5 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md">Pre-arrival</div>

            <h3 class="text-xl md:text-2xl font-black text-slate-900 mb-4 mt-8 pr-24 leading-tight">Digital Nomad Visa</h3>
            
            <p class="text-sm text-slate-700 flex-grow leading-relaxed mb-6">
              Full end-to-end handling of your Digital Nomad Visa application. We collect the documents, submit the file to the Greek consulate, and track the progress until you receive your visa.
            </p>

            <div class="w-full mt-auto mb-4">
              <a href="/greece/digital-nomad-visa" class="block w-full py-2.5 text-center border-2 border-blue-200 text-blue-800 font-bold rounded-lg hover:border-blue-800 hover:bg-blue-100 transition-colors">Learn more</a>
            </div>

            <div class="w-full border-t border-blue-200 pt-3">
              <span class="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-bold bg-blue-100 text-blue-700">
                Skipped for EU citizens
              </span>
            </div>
          </div>
        </div>

        <!-- Step 2: AFM -->
        <div class="flex flex-col h-full">
          <div class="bg-white p-5 lg:p-6 pt-16 rounded-2xl border border-slate-200 shadow-sm relative text-left flex flex-col items-start w-full flex-1 transition-transform hover:-translate-y-1 min-h-[420px] overflow-hidden mt-4 md:mt-0">
            
            <div class="absolute -top-3 left-6 bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold uppercase px-3 py-1 rounded-lg shadow-sm">
              Essential for everyone
            </div>

            <h3 class="text-xl md:text-2xl font-black text-slate-900 mb-4 mt-8 leading-tight">Tax Number (AFM)</h3>
            
            <p class="text-sm text-slate-600 flex-grow leading-relaxed mb-6">
              We secure your local tax number (AFM) remotely. It is the absolute foundation for renting an apartment, working, and opening a bank account in Greece.
            </p>

            <div class="w-full mt-auto mb-4">
              <a href="/greece/tax-number-afm" class="block w-full py-2.5 text-center border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-slate-900 hover:text-slate-900 hover:bg-slate-50 transition-colors">Learn more</a>
            </div>
          </div>
        </div>

        <!-- Step 3: 5C Tax Break -->
        <div class="flex flex-col h-full">
          <div id="timeline-step-5c" class="bg-white p-5 lg:p-6 pt-16 rounded-2xl border border-slate-200 shadow-sm relative text-left flex flex-col items-start w-full flex-1 transition-all duration-300 min-h-[420px] overflow-hidden mt-4 md:mt-0">
            
            <h3 class="text-xl md:text-2xl font-black text-slate-900 mb-4 mt-8 leading-tight">50% Tax Reduction (5C)</h3>
            
            <p class="text-sm text-slate-600 flex-grow leading-relaxed mb-6">
              We file the complex Article 5C application on your behalf so you legally pay half the income tax for up to 7 years. This is the most prominent tax incentive for digital nomads relocating to Greece.
            </p>

            <div class="w-full mt-auto mb-4">
              <a href="/greece/50-percent-tax-break" class="block w-full py-2.5 text-center border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-slate-900 hover:text-slate-900 hover:bg-slate-50 transition-colors">Learn more</a>
            </div>
          </div>
        </div>

        <!-- Step 4 & 5 Container: Ongoing -->
        <div class="md:col-span-2 flex flex-col h-full relative">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 flex-1">
            
            <!-- Step 4: Bookkeeping -->
            <div id="timeline-step-bookkeeping" class="bg-white p-5 lg:p-6 pt-16 rounded-2xl border border-slate-200 shadow-sm relative text-left flex flex-col items-start w-full transition-all duration-300 min-h-[420px] overflow-hidden">
              
              <div class="absolute top-5 right-5 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md">Ongoing</div>

              <h3 class="text-xl md:text-2xl font-black text-slate-900 mb-4 mt-8 pr-24 leading-tight">Registration & Bookkeeping</h3>
              
              <p class="text-sm text-slate-600 flex-grow leading-relaxed mb-6">
                Monthly accounting, electronic invoicing (myDATA), EFKA contributions, and VAT fully managed by local certified accountants in English.
              </p>

              <div class="w-full mt-auto mb-4">
                <a href="/greece/ongoing-bookkeeping" class="block w-full py-2.5 text-center border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-slate-900 hover:text-slate-900 hover:bg-slate-50 transition-colors">Learn more</a>
              </div>

              <div class="w-full border-t border-slate-100 pt-3">
                <span class="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-bold bg-blue-100 text-blue-700">
                  Only for freelancers
                </span>
              </div>
            </div>

            <!-- Step 5: Annual Tax Return -->
            <div id="timeline-step-taxreturn" class="bg-white p-5 lg:p-6 pt-16 rounded-2xl border border-slate-200 shadow-sm relative text-left flex flex-col items-start w-full transition-all duration-300 min-h-[420px] overflow-hidden">
              
              <div class="absolute top-5 right-5 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md">Ongoing</div>

              <h3 class="text-xl md:text-2xl font-black text-slate-900 mb-4 mt-8 pr-24 leading-tight">Annual Tax Return</h3>
              
              <p class="text-sm text-slate-600 flex-grow leading-relaxed mb-6">
                Yearly filing of your income tax return in Greece, ongoing income optimization, and tax clearance certificates. Fully compliant and stress-free.
              </p>

              <div class="w-full mt-auto mb-4">
                <a href="/greece/ongoing-bookkeeping" class="block w-full py-2.5 text-center border-2 border-slate-200 text-slate-700 font-bold rounded-lg hover:border-slate-900 hover:text-slate-900 hover:bg-slate-50 transition-colors">Learn more</a>
              </div>

              <div class="w-full border-t border-slate-100 pt-3">
                <span class="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-bold bg-blue-100 text-blue-700">
                  For freelancers & remote employees
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<script>
  window.addEventListener('taxomade:answer-change', (e: any) => {
    const answers = e.detail;
    
    // 1. Visa step
    const visaStep = document.getElementById('timeline-step-visa');
    if (visaStep) {
      if (answers.origin === 'eu') {
        visaStep.classList.add('opacity-70');
      } else {
        visaStep.classList.remove('opacity-70');
      }
    }
    
    // 2. 5C step
    const step5c = document.getElementById('timeline-step-5c');
    if (step5c) {
      if (answers.duration === 'short') {
        step5c.classList.add('opacity-70');
      } else {
        step5c.classList.remove('opacity-70');
      }
    }
    
    // 3. Bookkeeping step
    const stepBookkeeping = document.getElementById('timeline-step-bookkeeping');
    if (stepBookkeeping) {
      if (answers.employment === 'employed') {
        stepBookkeeping.classList.add('opacity-70');
      } else {
        stepBookkeeping.classList.remove('opacity-70');
      }
    }
  });
</script>
`

fs.writeFileSync(file, content);
