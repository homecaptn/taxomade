const fs = require('fs');

const timelineHtml = `---
---
<section id="how-it-works" class="py-20 bg-slate-50 overflow-hidden border-b border-slate-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-24">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
      <p class="text-lg text-slate-600 max-w-2xl mx-auto">Your journey to Southern Europe, mapped out. We handle the bureaucracy so you can focus on your work.</p>
    </div>

    <!-- Timeline Container -->
    <div class="relative max-w-6xl mx-auto mt-20">
      
      <!-- Wavy Dashed SVG Line (Hidden on mobile) -->
      <div class="hidden md:block absolute top-[80px] left-0 w-full h-[200px] z-0 opacity-20 pointer-events-none">
        <svg preserveAspectRatio="none" viewBox="0 0 1000 100" class="w-full h-full" fill="none" stroke="currentColor">
          <path d="M0,50 Q250,100 500,50 T1000,50" stroke-width="2" stroke-dasharray="10 10" class="text-blue-800"></path>
        </svg>
      </div>

      <!-- Visual Bracket for Non-EU -->
      <div class="hidden lg:block absolute top-[-50px] left-[2%] w-[21%] h-[20px] border-t-2 border-l-2 border-r-2 border-dashed border-slate-300 rounded-t-xl z-0">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-50 px-4 text-sm font-bold text-slate-500 tracking-widest whitespace-nowrap">ONLY FOR NON-EU</div>
      </div>
      <!-- Standard Path Label -->
      <div class="hidden lg:block absolute top-[-50px] left-[27%] right-[2%] h-[20px] border-t-2 border-l-2 border-r-2 border-solid border-slate-300 rounded-t-xl z-0">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-50 px-4 text-sm font-bold text-slate-900 tracking-widest whitespace-nowrap">STANDARD PATH (EU & NON-EU)</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 pt-4">
        
        <!-- Step 1: Visa (Non-EU Only) -->
        <div class="flex flex-col items-center">
          <span class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 bg-slate-50 px-2">Pre-arrival</span>
          <div id="timeline-step-visa" class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-all duration-300 relative text-center flex flex-col items-center w-full min-h-[320px]">
            <div class="h-16 w-16 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center mb-6 z-10 shadow-sm">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-4">Digital Nomad Visa</h3>
            <ul class="text-sm text-slate-600 text-left space-y-2 mb-4 list-disc pl-4">
              <li>Document gathering & verification</li>
              <li>Consulate appointment booking</li>
              <li>Approval tracking</li>
            </ul>
            <div id="timeline-eu-badge" class="hidden mt-auto w-full border-t border-slate-100 pt-3">
              <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-500">
                Skipped for EU
              </span>
            </div>
          </div>
        </div>

        <!-- Step 2: AFM -->
        <div class="flex flex-col items-center mt-0 md:mt-12 lg:mt-0">
          <span class="text-sm font-bold text-blue-800 uppercase tracking-widest mb-6 bg-slate-50 px-2">Month 0</span>
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative text-center flex flex-col items-center w-full transition-transform hover:-translate-y-1 min-h-[320px]">
            <div class="h-16 w-16 bg-white border-2 border-blue-800 text-blue-800 rounded-full flex items-center justify-center mb-6 z-10 shadow-md">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-4">Tax Number (AFM)</h3>
            <ul class="text-sm text-slate-600 text-left space-y-2 mb-4 list-disc pl-4">
              <li>Remote registration</li>
              <li>Bank account opening</li>
              <li>Lease agreement support</li>
            </ul>
          </div>
        </div>

        <!-- Step 3: 5C Tax Break -->
        <div class="flex flex-col items-center mt-0 md:mt-2 lg:mt-8">
          <span class="text-sm font-bold text-blue-800 uppercase tracking-widest mb-6 bg-slate-50 px-2">Month 6+</span>
          <div id="timeline-step-5c" class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative text-center flex flex-col items-center w-full transition-all duration-300 min-h-[320px]">
            <div class="h-16 w-16 bg-white border-2 border-blue-800 text-blue-800 rounded-full flex items-center justify-center mb-6 z-10 shadow-md">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-4">50% Tax Break</h3>
            <ul class="text-sm text-slate-600 text-left space-y-2 mb-4 list-disc pl-4">
              <li>Article 5C application</li>
              <li>Document submission</li>
              <li>Save 50% income tax for 7 yrs</li>
            </ul>
            <div id="timeline-badge-short" class="hidden mt-auto w-full border-t border-slate-100 pt-3">
              <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-500">
                Skipped (< 6 months)
              </span>
            </div>
          </div>
        </div>

        <!-- Step 4 & 5 Fork: Bookkeeping / Tax Return -->
        <div class="flex flex-col items-center mt-0 md:-mt-4 lg:mt-0 col-span-1">
          <span class="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 bg-slate-50 px-2">Ongoing</span>
          
          <div class="flex flex-col gap-4 w-full">
            <!-- Card 4 (Freelancer) - Prominent -->
            <div id="timeline-step-freelance" class="bg-white p-5 lg:p-6 rounded-xl border-2 border-blue-800 shadow-lg relative text-center flex flex-col items-center w-full transition-all duration-300 min-h-[220px]">
              <div class="absolute -top-3 right-[-10px] bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm transform rotate-3">
                Core
              </div>
              <h3 class="text-lg font-bold text-slate-900 mb-1">Registration & Bookkeeping</h3>
              <span class="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-3">If you're a freelancer</span>
              <ul class="text-sm text-slate-600 text-left space-y-1 mb-2 list-disc pl-4">
                <li>Business Registration</li>
                <li>myDATA & E-invoicing</li>
                <li>EFKA & VAT declarations</li>
              </ul>
              <div id="timeline-badge-employed" class="hidden mt-auto w-full border-t border-slate-100 pt-2">
                <span class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-500">Skipped for Employed</span>
              </div>
            </div>

            <!-- Card 5 (Employed) - Less Prominent -->
            <div id="timeline-step-employed" class="bg-white p-4 lg:p-5 rounded-xl border border-slate-200 shadow-sm relative text-center flex flex-col items-center w-full transition-all duration-300 min-h-[140px]">
              <h3 class="text-base font-bold text-slate-900 mb-1">Annual Tax Return</h3>
              <span class="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">If you're employed remotely</span>
              <p class="text-xs text-slate-600">Filing your yearly Greek tax return.</p>
              <div id="timeline-badge-freelance" class="hidden mt-auto w-full border-t border-slate-100 pt-2">
                <span class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-500">Skipped for Freelancers</span>
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
        visaStep.classList.add('opacity-40', 'grayscale');
        euBadge.classList.remove('hidden');
      } else {
        visaStep.classList.remove('opacity-40', 'grayscale');
        euBadge.classList.add('hidden');
      }
    }
    
    // 2. 5C step
    const step5c = document.getElementById('timeline-step-5c');
    const badgeShort = document.getElementById('timeline-badge-short');
    if (step5c && badgeShort) {
      if (answers.duration === 'short') {
        step5c.classList.add('opacity-40', 'grayscale');
        badgeShort.classList.remove('hidden');
      } else {
        step5c.classList.remove('opacity-40', 'grayscale');
        badgeShort.classList.add('hidden');
      }
    }
    
    // 3. Fork: Freelancer vs Employed
    const stepFreelance = document.getElementById('timeline-step-freelance');
    const badgeEmployed = document.getElementById('timeline-badge-employed');
    const stepEmployed = document.getElementById('timeline-step-employed');
    const badgeFreelance = document.getElementById('timeline-badge-freelance');
    
    if (stepFreelance && badgeEmployed && stepEmployed && badgeFreelance) {
      if (answers.employment === 'employed') {
        stepFreelance.classList.add('opacity-40', 'grayscale');
        badgeEmployed.classList.remove('hidden');
        stepEmployed.classList.remove('opacity-40', 'grayscale');
        badgeFreelance.classList.add('hidden');
      } else if (answers.employment === 'freelance') {
        stepEmployed.classList.add('opacity-40', 'grayscale');
        badgeFreelance.classList.remove('hidden');
        stepFreelance.classList.remove('opacity-40', 'grayscale');
        badgeEmployed.classList.add('hidden');
      } else {
        // Reset both if nothing selected
        stepFreelance.classList.remove('opacity-40', 'grayscale');
        badgeEmployed.classList.add('hidden');
        stepEmployed.classList.remove('opacity-40', 'grayscale');
        badgeFreelance.classList.add('hidden');
      }
    }
  });
</script>
`;

fs.writeFileSync('src/components/Timeline.astro', timelineHtml);
