const fs = require('fs');
const glob = require('glob'); // Need to install if not available, or just hardcode paths

const files = [
  'src/pages/greece/digital-nomad-visa.astro',
  'src/pages/greece/tax-number-afm.astro',
  'src/pages/greece/50-percent-tax-break.astro',
  'src/pages/greece/ongoing-bookkeeping.astro'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Central line
    content = content.replace(
      /<div class="hidden md:block absolute left-1\/2 top-4 bottom-4 w-px bg-slate-200 -translate-x-1\/2"><\/div>/g,
      '<div class="absolute left-1/2 top-4 bottom-4 w-[2px] bg-slate-100 -translate-x-1/2"></div>'
    );

    // Row wrapper (handling both mb-16 and normal)
    content = content.replace(
      /<div class="relative flex flex-col md:flex-row items-center justify-between mb-16">/g,
      '<div class="relative flex flex-row items-center justify-between mb-12 sm:mb-16 w-full">'
    );
    // There is one at the end without mb-16 in some components
    content = content.replace(
      /<div class="relative flex flex-col md:flex-row items-center justify-between">/g,
      '<div class="relative flex flex-row items-center justify-between w-full">'
    );

    // Left column
    content = content.replace(
      /<div class="md:w-\[45%\] mb-6 md:mb-0 md:text-right text-slate-500">/g,
      '<div class="w-[45%] text-right pr-2 sm:pr-0 text-slate-500">'
    );
    content = content.replace(
      /<div class="md:w-\[45%\] mb-6 md:mb-0 md:text-right">/g,
      '<div class="w-[45%] text-right pr-2 sm:pr-0">'
    );

    // Badges left
    content = content.replace(
      /<div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">/g,
      '<div class="inline-flex flex-col sm:flex-row items-end sm:items-center px-2 py-1 sm:px-3 sm:py-1 rounded-xl sm:rounded-full bg-slate-100 text-slate-600 text-[9px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">'
    );

    // Titles left
    content = content.replace(
      /<h3 class="text-xl font-bold text-slate-900 mb-2">/g,
      '<h3 class="text-[13px] sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">'
    );

    // Paragraphs left
    content = content.replace(
      /<p class="text-slate-600 text-sm leading-relaxed">/g,
      '<p class="text-slate-500 text-[10px] sm:text-sm leading-relaxed hidden sm:block">'
    );

    // Number bubble
    content = content.replace(
      /<div class="absolute left-1\/2 -translate-x-1\/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 font-bold z-10 hidden md:flex">/g,
      '<div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 text-xs sm:text-sm font-bold z-10 shadow-sm">'
    );

    // Checkmark bubble (emerald)
    content = content.replace(
      /<div class="absolute left-1\/2 -translate-x-1\/2 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white font-bold border-2 border-emerald-600 z-10 hidden md:flex shadow-sm">/g,
      '<div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-500 text-white border-2 border-emerald-500 z-10 shadow-sm">'
    );
    // And the SVG inside it
    content = content.replace(
      /<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">/g,
      '<svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">'
    );

    // Right column
    content = content.replace(
      /<div class="md:w-\[45%\] text-center md:text-left">/g,
      '<div class="w-[45%] text-left pl-2 sm:pl-0">'
    );

    // Badges right
    content = content.replace(
      /<div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">/g,
      '<div class="inline-flex flex-col sm:flex-row items-start sm:items-center px-2 py-1 sm:px-3 sm:py-1 rounded-xl sm:rounded-full bg-blue-100 text-blue-800 text-[9px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">'
    );
    content = content.replace(
      /<div class="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">/g,
      '<div class="inline-flex flex-col sm:flex-row items-start sm:items-center px-2 py-1 sm:px-3 sm:py-1 rounded-xl sm:rounded-full bg-emerald-100 text-emerald-800 text-[9px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">'
    );


    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed ' + file);
  }
});
