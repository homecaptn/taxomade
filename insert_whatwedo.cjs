const fs = require('fs');
const file = 'src/pages/index.astro';
let content = fs.readFileSync(file, 'utf8');

// insert import
content = content.replace("import Timeline from '../components/Timeline.astro';", "import WhatWeDo from '../components/WhatWeDo.astro';\nimport Timeline from '../components/Timeline.astro';");

// insert component
content = content.replace("<Hero />\n    <Timeline />", "<Hero />\n    <WhatWeDo />\n    <Timeline />");

fs.writeFileSync(file, content);
