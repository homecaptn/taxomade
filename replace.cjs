const fs = require('fs');
const glob = require('glob'); // Need to check if available, or just use fs
const path = require('path');

function replaceColors(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceColors(fullPath);
    } else if (fullPath.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // text-brand-600 -> text-slate-900 (for bold text) or blue-800
      content = content.replace(/text-brand-600/g, 'text-slate-900');
      // bg-brand-600 -> bg-slate-900
      content = content.replace(/bg-brand-600/g, 'bg-slate-900');
      // border-brand-500 -> border-blue-800
      content = content.replace(/border-brand-500/g, 'border-blue-800');
      // ring-brand-500 -> ring-blue-800
      content = content.replace(/ring-brand-500/g, 'ring-blue-800');
      
      // bg-brand-50 -> bg-slate-50
      content = content.replace(/bg-brand-50/g, 'bg-slate-100');
      // border-brand-200 -> border-slate-200
      content = content.replace(/border-brand-200/g, 'border-slate-300');
      
      // accent-400 (used for buttons usually) -> blue-800
      content = content.replace(/bg-accent-400/g, 'bg-blue-800');
      // hover:bg-accent-500 -> hover:bg-blue-900
      content = content.replace(/hover:bg-accent-500/g, 'hover:bg-blue-900');
      // text-accent-400 -> text-blue-800
      content = content.replace(/text-accent-400/g, 'text-blue-800');
      
      // Fix specific text color on blue buttons (which was slate-900 on lime, now needs to be white on blue)
      content = content.replace(/text-slate-900 bg-blue-800/g, 'text-white bg-blue-800');
      
      // Fix rounded-full to rounded-lg on buttons
      content = content.replace(/rounded-full/g, 'rounded-lg');
      
      // But undo rounded-lg on timeline circles (h-12 w-12 rounded-lg -> rounded-full)
      content = content.replace(/h-12 w-12(.*?)rounded-lg/g, 'h-12 w-12$1rounded-full');

      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceColors(path.join(__dirname, 'src'));
