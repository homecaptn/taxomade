const fs = require('fs');

const files = ['src/components/AboutUs.astro', 'src/components/AboutUsShort.astro'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Remove items-start
  content = content.replace(/gap-16 items-start/, 'gap-16');

  // Add flex flex-col to columns
  content = content.replace(/<div class="w-full lg:w-1\/2 pt-4">/, '<div class="w-full lg:w-1/2 pt-4 flex flex-col">');
  content = content.replace(/<div class="w-full lg:w-1\/2 relative mt-8 lg:mt-0">/, '<div class="w-full lg:w-1/2 relative mt-8 lg:mt-0 flex flex-col">');

  // Wrap the text part of the left column in a div so mt-auto works on the box
  content = content.replace(/<span class="text-sm font-bold text-blue-800/, '<div>\n          <span class="text-sm font-bold text-blue-800');
  content = content.replace(/<div class="bg-slate-50 border border-slate-200 rounded-xl p-6 max-w-sm mx-auto">/, '</div>\n        \n        <div class="bg-slate-50 border border-slate-200 rounded-xl p-6 max-w-sm mx-auto w-full mt-auto">');
  content = content.replace(/<div class="bg-slate-50 border border-slate-200 rounded-xl p-6 max-w-md mx-auto">/, '</div>\n        \n        <div class="bg-slate-50 border border-slate-200 rounded-xl p-6 max-w-md mx-auto w-full mt-auto">');

  // Add mt-auto to right column box
  content = content.replace(/<div class="mt-12">/, '<div class="mt-auto pt-12">');

  fs.writeFileSync(file, content);
});
console.log("Updated alignments");
