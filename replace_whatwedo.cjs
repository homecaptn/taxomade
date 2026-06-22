const fs = require('fs');
const file = 'src/components/WhatWeDo.astro';

let content = fs.readFileSync(file, 'utf8');

// Replace badge
content = content.replace("What we do", "End-to-End Relocation");

// Replace H2
content = content.replace(
  '<h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Your entire move to Greece, <span class="text-blue-800">sorted.</span></h2>',
  '<h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Your move to Greece, <span class="text-blue-800">made fast and easy.</span></h2>'
);

// Replace paragraph
content = content.replace(
  '<p class="text-lg text-slate-600 mb-8 leading-relaxed">\n          Relocating to a new country shouldn\'t mean drowning in bureaucracy. We are your local partners on the ground, handling everything from immigration and tax registration to your ongoing monthly bookkeeping.\n        </p>',
  '<p class="text-lg text-slate-600 mb-8 leading-relaxed">\n          Forget the endless paperwork and confusing local authorities. With Taxomade, you can handle almost your entire setup directly from your laptop. We make your relocation fast, remote-friendly, and completely stress-free.\n        </p>'
);

fs.writeFileSync(file, content);
