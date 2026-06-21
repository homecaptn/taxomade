const fs = require('fs');
let code = fs.readFileSync('src/components/Configurator.astro', 'utf-8');
code = code.replace(/blue-800/g, 'slate-900');
code = code.replace(/bg-blue-900/g, 'black');
code = code.replace(/blue-200/g, 'slate-300');
fs.writeFileSync('src/components/Configurator.astro', code);
