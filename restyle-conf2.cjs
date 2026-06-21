const fs = require('fs');
let code = fs.readFileSync('src/components/Configurator.astro', 'utf-8');

const titleHtml = `<div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Discover your path to Greece</h2>
      <p class="text-lg text-slate-600 max-w-2xl mx-auto">Answer five quick questions to find out exactly which steps and services apply to your personal situation.</p>
    </div>
    
    <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 min-h-[500px] relative flex flex-col" id="conf-content">`;

code = code.replace('<div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 min-h-[500px] relative flex flex-col" id="conf-content">', titleHtml);

const chipsHtml = `        <div id="conf-chips" class="flex flex-wrap gap-2 mb-6 empty:hidden"></div>
        <button id="conf-back" class="text-slate-500 hover:text-slate-800 transition-colors hidden font-medium flex items-center w-fit">`;

code = code.replace(`<button id="conf-back" class="text-slate-500 hover:text-slate-800 transition-colors hidden font-medium flex items-center w-fit">`, chipsHtml);

const scriptInject = `
  const labelMap: Record<string, string> = {
    greece: 'Greece',
    noneu: 'Non-EU',
    eu: 'EU',
    short: '< 6 Months',
    long: '6+ Months',
    freelance: 'Freelance',
    employed: 'Employed',
    low: '< €25k',
    mid: '€25k-40k',
    high: '€40k-70k',
    highest: '> €70k'
  };

  function renderChips() {
    const container = document.getElementById('conf-chips');
    if (!container) return;
    container.innerHTML = '';
    
    const orderedKeys = ['destination', 'origin', 'duration', 'employment', 'income'] as const;
    
    orderedKeys.forEach(key => {
      const val = answers[key];
      if (val && labelMap[val]) {
        const chip = document.createElement('div');
        chip.className = 'inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200';
        chip.innerHTML = \`<svg class="w-4 h-4 text-blue-600 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>\${labelMap[val]}\`;
        container.appendChild(chip);
      }
    });
  }
`;

code = code.replace('const backBtn = document.getElementById(\'conf-back\');', scriptInject + '\n  const backBtn = document.getElementById(\'conf-back\');');

code = code.replace(/nextStep\((\d+)\);/g, 'nextStep($1); renderChips();');
code = code.replace(/showEarlyExit\(\);/g, 'showEarlyExit(); renderChips();');
code = code.replace(/showResults\(\);/g, 'showResults(); renderChips();');

const backLogicReplace = `  backBtn?.addEventListener('click', () => {
    if (historyStack.length > 1) {
      historyStack.pop(); // Remove current
      const prevStep = historyStack[historyStack.length - 1];
      
      // Clear future answers when going back
      if (prevStep <= 4) answers.income = '';
      if (prevStep <= 3) answers.employment = '';
      if (prevStep <= 2) answers.duration = '';
      if (prevStep <= 1) answers.origin = '';
      if (prevStep === 1) answers.destination = '';
      
      renderChips();
      showStep(prevStep);
    }
  });`;

code = code.replace(/backBtn\?\.addEventListener\('click', \(\) => {[\s\S]*?}\);/, backLogicReplace);

fs.writeFileSync('src/components/Configurator.astro', code);
