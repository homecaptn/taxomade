const fs = require('fs');
const glob = require('glob'); // Not using glob, just standard paths for now since it might not be installed

// 1. Header.astro
let headerPath = 'src/components/Header.astro';
if (fs.existsSync(headerPath)) {
  let content = fs.readFileSync(headerPath, 'utf8');
  content = content.replace('bg-slate-100', 'bg-transparent');
  fs.writeFileSync(headerPath, content);
}

// 2. Timeline.astro (OR Circle)
let timelinePath = 'src/components/Timeline.astro';
if (fs.existsSync(timelinePath)) {
  let content = fs.readFileSync(timelinePath, 'utf8');
  content = content.replace(
    '<div class="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-slate-500 font-black text-[10px] md:text-xs items-center justify-center z-20 border-2 border-slate-200 shadow-sm">',
    '<div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-slate-500 font-black text-[10px] md:text-xs items-center justify-center z-20 border-2 border-slate-200 shadow-sm">'
  );
  fs.writeFileSync(timelinePath, content);
}

// 3. GeneralProcess.astro (Step texts)
let processPath = 'src/components/GeneralProcess.astro';
if (fs.existsSync(processPath)) {
  let content = fs.readFileSync(processPath, 'utf8');
  content = content.replace(/text-\[9px\] sm:text-xs/g, 'text-[11px] sm:text-xs');
  fs.writeFileSync(processPath, content);
}

// 4. Global ™ to ®
const replaceTM = (dir) => {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = dir + '/' + file.name;
    if (file.isDirectory() && file.name !== 'node_modules' && file.name !== '.git' && file.name !== 'dist') {
      replaceTM(fullPath);
    } else if (file.isFile() && (fullPath.endsWith('.astro') || fullPath.endsWith('.md'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content.replace(/taxomade™/gi, 'taxomade®');
      newContent = newContent.replace(/Taxomade™/gi, 'Taxomade®');
      newContent = newContent.replace(/taxomade ™/gi, 'taxomade®');
      newContent = newContent.replace(/Taxomade ™/gi, 'Taxomade®');
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
};
replaceTM('src');
