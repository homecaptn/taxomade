const fs = require('fs');

const files = [
  'src/components/GeneralProcess.astro',
  'src/pages/greece/digital-nomad-visa.astro',
  'src/pages/greece/tax-number-afm.astro',
  'src/pages/greece/50-percent-tax-break.astro',
  'src/pages/greece/ongoing-bookkeeping.astro'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/md:text-right opacity-60/g, 'md:text-right text-slate-500');
  content = content.replace(/md:text-left opacity-60/g, 'md:text-left text-slate-500');
  content = content.replace(/opacity-50/g, 'text-slate-400');
  fs.writeFileSync(file, content);
});
console.log("Updated opacity");
