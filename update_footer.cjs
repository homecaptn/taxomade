const fs = require('fs');
const file = 'src/components/Footer.astro';

const content = `---
---
<footer class="bg-white border-t border-slate-100 pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <!-- Logo column -->
      <div class="col-span-1 md:col-span-2">
        <a href="/">
          <img src="/logo.svg" alt="taxomade Logo" class="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity mb-4" />
        </a>
        <p class="text-sm text-slate-500 max-w-sm">The Tax Nomad Setup. Your reliable partner for remote worker relocation and tax compliance in Southern Europe.</p>
      </div>
      
      <!-- Countries -->
      <div>
        <h4 class="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Countries</h4>
        <ul class="space-y-3">
          <li>
            <a href="/#configurator" class="text-sm text-slate-600 hover:text-slate-900 flex items-center transition-colors">
              <img src="https://flagcdn.com/gr.svg" class="w-4 h-auto mr-2 border border-slate-200 rounded-sm" alt="Greece"/> 
              Greece
            </a>
          </li>
          <li>
            <span class="text-sm text-slate-400 flex items-center">
              <img src="https://flagcdn.com/es.svg" class="w-4 h-auto mr-2 border border-slate-200 rounded-sm grayscale opacity-50" alt="Spain"/> 
              Spain 
              <span class="ml-2 text-[9px] uppercase font-bold tracking-wider bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Soon</span>
            </span>
          </li>
          <li>
            <span class="text-sm text-slate-400 flex items-center">
              <img src="https://flagcdn.com/pt.svg" class="w-4 h-auto mr-2 border border-slate-200 rounded-sm grayscale opacity-50" alt="Portugal"/> 
              Portugal 
              <span class="ml-2 text-[9px] uppercase font-bold tracking-wider bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Soon</span>
            </span>
          </li>
          <li>
            <span class="text-sm text-slate-400 flex items-center">
              <img src="https://flagcdn.com/bg.svg" class="w-4 h-auto mr-2 border border-slate-200 rounded-sm grayscale opacity-50" alt="Bulgaria"/> 
              Bulgaria 
              <span class="ml-2 text-[9px] uppercase font-bold tracking-wider bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Soon</span>
            </span>
          </li>
        </ul>
      </div>

      <!-- Links -->
      <div>
        <h4 class="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Legal & Contact</h4>
        <ul class="space-y-3">
          <li><a href="mailto:hello@taxomade.com" class="text-sm text-slate-600 hover:text-slate-900 transition-colors">hello@taxomade.com</a></li>
          <li><a href="#" class="text-sm text-slate-600 hover:text-slate-900 transition-colors">Privacy Policy</a></li>
          <li><a href="#" class="text-sm text-slate-600 hover:text-slate-900 transition-colors">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    
    <div class="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
      <p class="mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} taxomade&trade;. All rights reserved. <br class="md:hidden"/>
        <span class="md:ml-2">Taxomade is not a government body; we coordinate licensed local partners. General information, not individual legal or tax advice.</span>
      </p>
      <p>
        Coming soon: <a href="https://locuspartner.com" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-slate-900 transition-colors">locuspartner.com</a>
      </p>
    </div>
  </div>
</footer>
`

fs.writeFileSync(file, content);
