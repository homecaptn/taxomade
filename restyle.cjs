const fs = require('fs');

let code = fs.readFileSync('src/components/Configurator.astro', 'utf-8');

// Header replacement
const oldHeader = `<div class="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
      <!-- Header -->
      <div class="bg-slate-900 px-6 py-4 flex items-center justify-between">
        <button id="conf-back" class="text-slate-400 hover:text-white transition-colors invisible">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <span id="conf-progress" class="text-slate-300 font-medium text-sm">Step 1 of 5</span>
        <div class="w-6"></div> <!-- Spacer for flex balance -->
      </div>
      
      <!-- Content Area -->
      <div class="p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative" id="conf-content">`;

const newHeader = `<div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 min-h-[500px] relative flex flex-col" id="conf-content">
      
      <!-- Header / Progress Area -->
      <div class="mb-10 w-full">
        <div class="flex items-center justify-between text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">
          <span id="conf-progress-text">Step 1 of 5</span>
          <span id="conf-progress-pct" class="text-blue-600">0%</span>
        </div>
        <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-6">
          <div id="conf-progress-bar" class="bg-blue-600 h-full rounded-full transition-all duration-500" style="width: 0%"></div>
        </div>
        <button id="conf-back" class="text-slate-500 hover:text-slate-800 transition-colors hidden font-medium flex items-center w-fit">
          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back
        </button>
      </div>`;

code = code.replace(oldHeader, newHeader);

// Title styling
code = code.replace(/text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center/g, "text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-left");

// Button styling
code = code.replace(/p-6 border-2 border-slate-100 rounded-xl bg-white text-left transition-all duration-200 hover:border-blue-800 hover:shadow-md hover:bg-slate-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2/g, 
"p-6 border border-slate-200 rounded-lg bg-white text-left transition-all duration-200 hover:border-blue-600 hover:shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2");

// Fix early exit title
code = code.replace(/text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center/g, "text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-left");

// Fix Result Title
code = code.replace(/text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center/g, "text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-left");

// Also replace p text-center to text-left
code = code.replace(/text-center text-slate-600 mb-8/g, "text-left text-slate-600 mb-8");

// Change logic script to use new progress bar
const oldShowStep = `  function showStep(step: number) {
    document.querySelectorAll('.conf-step').forEach(el => el.classList.add('hidden'));
    
    document.getElementById(\`step-\${step}\`)?.classList.remove('hidden');
    if (progressText) progressText.innerText = \`Step \${step} of \${totalSteps}\`;
    
    if (backBtn) {
      if (historyStack.length > 1) {
        backBtn.classList.remove('invisible');
      } else {
        backBtn.classList.add('invisible');
      }
    }
  }`;

const newShowStep = `  function showStep(step: number) {
    document.querySelectorAll('.conf-step').forEach(el => el.classList.add('hidden'));
    
    document.getElementById(\`step-\${step}\`)?.classList.remove('hidden');
    
    const progressText = document.getElementById('conf-progress-text');
    const progressPct = document.getElementById('conf-progress-pct');
    const progressBar = document.getElementById('conf-progress-bar');
    
    if (progressText) progressText.innerText = \`Step \${step} of \${totalSteps}\`;
    
    let pct = Math.round(((step - 1) / totalSteps) * 100);
    if (pct < 0) pct = 0;
    if (pct > 100) pct = 100;
    
    if (progressPct) progressPct.innerText = \`\${pct}%\`;
    if (progressBar) progressBar.style.width = \`\${pct}%\`;
    
    const backBtn = document.getElementById('conf-back');
    if (backBtn) {
      if (historyStack.length > 1) {
        backBtn.classList.remove('hidden');
      } else {
        backBtn.classList.add('hidden');
      }
    }
  }`;

code = code.replace(oldShowStep, newShowStep);

// Early Exit logic
code = code.replace(`if (progressText) progressText.innerText = 'Coming Soon';
    if (backBtn) backBtn.classList.remove('invisible');`, 
    `document.getElementById('conf-progress-text')!.innerText = 'Coming Soon';
    document.getElementById('conf-progress-pct')!.innerText = '100%';
    document.getElementById('conf-progress-bar')!.style.width = '100%';
    document.getElementById('conf-back')?.classList.remove('hidden');`);

// Show Results logic
code = code.replace(`if (progressText) progressText.innerText = 'Recommendation';
    if (backBtn) backBtn.classList.remove('invisible');`,
    `document.getElementById('conf-progress-text')!.innerText = 'Recommendation';
    document.getElementById('conf-progress-pct')!.innerText = '100%';
    document.getElementById('conf-progress-bar')!.style.width = '100%';
    document.getElementById('conf-back')?.classList.remove('hidden');`);

fs.writeFileSync('src/components/Configurator.astro', code);
