const fs = require('fs');

const timelineHtml = `---
---
<section id="how-it-works" class="py-20 bg-white overflow-hidden border-b border-slate-100">
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
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 text-sm font-bold text-slate-500 tracking-widest whitespace-nowrap">ONLY FOR NON-EU</div>
      </div>
      <!-- Standard Path Label -->
      <div class="hidden lg:block absolute top-[-50px] left-[27%] right-[2%] h-[20px] border-t-2 border-l-2 border-r-2 border-solid border-slate-300 rounded-t-xl z-0">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 text-sm font-bold text-slate-900 tracking-widest whitespace-nowrap">STANDARD PATH (EU & NON-EU)</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 pt-4">
        
        <!-- Step 1: Visa (Non-EU Only) -->
        <div class="flex flex-col items-center">
          <span class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 bg-white px-2">Pre-arrival</span>
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
          <span class="text-sm font-bold text-blue-800 uppercase tracking-widest mb-6 bg-white px-2">Month 0</span>
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
          <span class="text-sm font-bold text-blue-800 uppercase tracking-widest mb-6 bg-white px-2">Month 6+</span>
          <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative text-center flex flex-col items-center w-full transition-transform hover:-translate-y-1 min-h-[320px]">
            <div class="h-16 w-16 bg-white border-2 border-blue-800 text-blue-800 rounded-full flex items-center justify-center mb-6 z-10 shadow-md">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-4">50% Tax Break</h3>
            <ul class="text-sm text-slate-600 text-left space-y-2 mb-4 list-disc pl-4">
              <li>Article 5C application</li>
              <li>Document submission</li>
              <li>Save 50% income tax for 7 yrs</li>
            </ul>
          </div>
        </div>

        <!-- Step 4: Bookkeeping -->
        <div class="flex flex-col items-center mt-0 md:-mt-4 lg:mt-0">
          <span class="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 bg-white px-2">Ongoing</span>
          <div class="bg-white p-6 rounded-xl border-2 border-blue-800 shadow-lg relative text-center flex flex-col items-center w-full min-h-[320px]">
            <div class="absolute -top-3 right-[-10px] bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm transform rotate-3">
              Core
            </div>
            <div class="h-16 w-16 bg-blue-800 text-white rounded-full flex items-center justify-center mb-6 z-10 shadow-lg">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-4">Bookkeeping</h3>
            <ul class="text-sm text-slate-600 text-left space-y-2 mb-4 list-disc pl-4">
              <li>myDATA e-invoicing</li>
              <li>EFKA & VAT declarations</li>
              <li>Annual tax returns</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<script>
  window.addEventListener('taxomade:origin-change', (e: any) => {
    const isEu = e.detail === 'eu';
    const visaStep = document.getElementById('timeline-step-visa');
    const euBadge = document.getElementById('timeline-eu-badge');
    
    if (visaStep && euBadge) {
      if (isEu) {
        visaStep.classList.add('opacity-40', 'grayscale');
        euBadge.classList.remove('hidden');
      } else {
        visaStep.classList.remove('opacity-40', 'grayscale');
        euBadge.classList.add('hidden');
      }
    }
  });
</script>
`;

fs.writeFileSync('src/components/Timeline.astro', timelineHtml);
