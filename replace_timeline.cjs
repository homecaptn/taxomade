const fs = require('fs');
const file = 'src/components/Timeline.astro';

const content = `---
---
<section id="how-it-works" class="py-20 bg-slate-50 overflow-hidden border-b border-slate-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-28">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
      <p class="text-lg text-slate-600 max-w-2xl mx-auto">We cover the whole path, and you choose what you need. A modular approach to your relocation.</p>
    </div>

    <!-- Timeline Container -->
    <div class="relative max-w-7xl mx-auto mt-24">
      
      <!-- Wavy Dashed SVG Line (Hidden on mobile) -->
      <div class="hidden md:block absolute top-[80px] left-0 w-full h-[200px] z-0 opacity-20 pointer-events-none">
        <svg preserveAspectRatio="none" viewBox="0 0 1000 100" class="w-full h-full" fill="none" stroke="currentColor">
          <path d="M0,50 Q250,100 500,50 T1000,50" stroke-width="2" stroke-dasharray="10 10" class="text-blue-800"></path>
        </svg>
      </div>

      <!-- Visual Bracket for Non-EU -->
      <div class="hidden lg:block absolute top-[-60px] left-[1%] w-[18%] h-[20px] border-t-[3px] border-l-[3px] border-r-[3px] border-dashed border-slate-400 rounded-t-xl z-0">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-5 py-2 text-sm md:text-base font-black text-slate-800 tracking-widest whitespace-nowrap border-2 border-slate-200 shadow-sm rounded-full">ONLY FOR NON-EU</div>
      </div>
      <!-- Standard Path Label -->
      <div class="hidden lg:block absolute top-[-60px] left-[21%] right-[1%] h-[20px] border-t-[3px] border-l-[3px] border-r-[3px] border-solid border-slate-800 rounded-t-xl z-0">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-800 px-6 py-2 text-sm md:text-base font-black text-white tracking-widest whitespace-nowrap shadow-md rounded-full">EU / NON-EU</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative z-10 pt-8">
        
        <!-- Step 1: Visa (Non-EU Only) -->
        <div class="flex flex-col items-center h-full">
          <span class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 bg-slate-50 px-2">Pre-arrival</span>
          <div id="timeline-step-visa" class="bg-white p-5 lg:p-6 rounded-xl border border-slate-200 shadow-sm transition-all duration-300 relative text-center flex flex-col items-center w-full flex-1 min-h-[400px]">
            <div class="h-16 w-16 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center mb-6 z-10 shadow-sm shrink-0">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-4">Digital Nomad Visa</h3>
            <ul class="text-sm text-slate-600 text-left space-y-2 mb-4 list-disc pl-4 flex-grow">
              <li>Document gathering & verification</li>
              <li>Consulate appointment booking</li>
              <li>Approval tracking</li>
            </ul>
            <div id="timeline-eu-badge" class="hidden mt-auto w-full border-t border-slate-100 pt-3">
              <span class="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-500">
                Skipped for EU Citizens
              </span>
            </div>
          </div>
        </div>

        <!-- Step 2: AFM -->
        <div class="flex flex-col items-center h-full">
          <span class="text-sm font-bold text-blue-800 uppercase tracking-widest mb-6 bg-slate-50 px-2">Month 0</span>
          <div class="bg-white p-5 lg:p-6 rounded-xl border border-slate-200 shadow-sm relative text-center flex flex-col items-center w-full flex-1 transition-transform hover:-translate-y-1 min-h-[400px]">
            <div class="h-16 w-16 bg-white border-2 border-blue-800 text-blue-800 rounded-full flex items-center justify-center mb-6 z-10 shadow-md shrink-0">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-4">Tax Number (AFM)</h3>
            <ul class="text-sm text-slate-600 text-left space-y-2 mb-4 list-disc pl-4 flex-grow">
              <li>Remote registration</li>
              <li>Bank account opening</li>
              <li>Lease agreement support</li>
            </ul>
          </div>
        </div>

        <!-- Step 3: 5C Tax Break -->
        <div class="flex flex-col items-center h-full">
          <span class="text-sm font-bold text-blue-800 uppercase tracking-widest mb-6 bg-slate-50 px-2">Month 6+</span>
          <div id="timeline-step-5c" class="bg-white p-5 lg:p-6 rounded-xl border border-slate-200 shadow-sm relative text-center flex flex-col items-center w-full flex-1 transition-all duration-300 min-h-[400px]">
            <div class="h-16 w-16 bg-white border-2 border-blue-800 text-blue-800 rounded-full flex items-center justify-center mb-6 z-10 shadow-md shrink-0">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-4">50% Tax Break</h3>
            <ul class="text-sm text-slate-600 text-left space-y-2 mb-4 list-disc pl-4 flex-grow">
              <li>Article 5C application</li>
              <li>Document submission</li>
              <li>Save 50% income tax for 7 yrs</li>
            </ul>
            <div id="timeline-badge-short" class="hidden mt-auto w-full border-t border-slate-100 pt-3">
              <span class="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-500">
                Skipped (&lt; 6 months)
              </span>
            </div>
          </div>
        </div>

        <!-- Step 4 & 5 Container: Ongoing -->
        <div class="md:col-span-2 flex flex-col h-full">
          <div class="text-center w-full">
            <span class="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 bg-slate-50 px-2 inline-block">Ongoing</span>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 flex-1">
            
            <!-- Step 4: Bookkeeping -->
            <div id="timeline-step-bookkeeping" class="bg-white p-5 lg:p-6 rounded-xl border-2 border-blue-800 shadow-lg relative text-center flex flex-col items-center w-full transition-all duration-300 min-h-[400px]">
              <div class="absolute -top-3 right-[-10px] bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm transform rotate-3 z-20">
                Core
              </div>
              <div class="h-16 w-16 bg-white border-2 border-blue-800 text-blue-800 rounded-full flex items-center justify-center mb-6 z-10 shadow-md shrink-0">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-slate-900 mb-4">Registration & Bookkeeping</h3>
              <ul class="text-sm text-slate-600 text-left space-y-2 mb-4 list-disc pl-4 flex-grow">
                <li>Freelancer registration</li>
                <li>myDATA & VAT reporting</li>
                <li>EFKA (Social security)</li>
              </ul>
              <div class="mt-auto w-full border-t border-slate-100 pt-3">
                <span class="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-medium bg-blue-50 text-blue-800 border border-blue-100">
                  Only for freelancers
                </span>
              </div>
            </div>

            <!-- Step 5: Annual Tax Return -->
            <div id="timeline-step-taxreturn" class="bg-white p-5 lg:p-6 rounded-xl border-2 border-slate-200 shadow-sm relative text-center flex flex-col items-center w-full transition-all duration-300 min-h-[400px]">
              <div class="h-16 w-16 bg-white border-2 border-slate-300 text-slate-500 rounded-full flex items-center justify-center mb-6 z-10 shadow-sm shrink-0">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-slate-900 mb-4">Annual Tax Return</h3>
              <ul class="text-sm text-slate-600 text-left space-y-2 mb-4 list-disc pl-4 flex-grow">
                <li>Yearly filing in Greece</li>
                <li>Income optimization</li>
                <li>Tax clearance</li>
              </ul>
              <div class="mt-auto w-full border-t border-slate-100 pt-3">
                <span class="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-500">
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
    const euBadge = document.getElementById('timeline-eu-badge');
    if (visaStep && euBadge) {
      if (answers.origin === 'eu') {
        visaStep.classList.add('opacity-70', 'grayscale');
        euBadge.classList.remove('hidden');
      } else {
        visaStep.classList.remove('opacity-70', 'grayscale');
        euBadge.classList.add('hidden');
      }
    }
    
    // 2. 5C step
    const step5c = document.getElementById('timeline-step-5c');
    const badgeShort = document.getElementById('timeline-badge-short');
    if (step5c && badgeShort) {
      if (answers.duration === 'short') {
        step5c.classList.add('opacity-70', 'grayscale');
        badgeShort.classList.remove('hidden');
      } else {
        step5c.classList.remove('opacity-70', 'grayscale');
        badgeShort.classList.add('hidden');
      }
    }
    
    // 3. Bookkeeping step
    const stepBookkeeping = document.getElementById('timeline-step-bookkeeping');
    if (stepBookkeeping) {
      if (answers.employment === 'employed') {
        stepBookkeeping.classList.add('opacity-70', 'grayscale');
        stepBookkeeping.classList.remove('border-blue-800');
        stepBookkeeping.classList.add('border-slate-200');
        
        const coreBadge = stepBookkeeping.querySelector('.bg-blue-800.text-white');
        if(coreBadge) coreBadge.classList.add('hidden');
      } else {
        stepBookkeeping.classList.remove('opacity-70', 'grayscale');
        stepBookkeeping.classList.remove('border-slate-200');
        stepBookkeeping.classList.add('border-blue-800');
        
        const coreBadge = stepBookkeeping.querySelector('.bg-blue-800.text-white');
        if(coreBadge) coreBadge.classList.remove('hidden');
      }
    }
  });
</script>
`

fs.writeFileSync(file, content);
