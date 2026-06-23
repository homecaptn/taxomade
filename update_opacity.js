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
  // In the timeline steps, the "Your part" container has: class="md:w-[45%] mb-6 md:mb-0 md:text-right opacity-60"
  // Let's replace "opacity-60" with "text-slate-500" or just remove "opacity-60"
  content = content.replace(/md:text-right opacity-60/g, 'md:text-right text-slate-500');
  
  // Also check if there's any other opacity-60 in the timeline (like the central line)
  // we want to keep the central line at opacity-60, so the regex above targets the exact class string for the columns.
  
  // One exception in GeneralProcess.astro:
  // <div class="md:w-[45%] text-center md:text-left opacity-60">
  content = content.replace(/md:text-left opacity-60/g, 'md:text-left text-slate-500');

  // Also in some pages: <span class="mr-2 opacity-50">...</span>
  // This is for the time indicator, we can leave it or remove it. "ein bisschen mehr blänkt also ein bisschen lesbarer"
  content = content.replace(/opacity-50/g, 'text-slate-400');
  
  fs.writeFileSync(file, content);
});
console.log("Updated opacity");
