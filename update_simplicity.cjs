const fs = require('fs');
const file = 'src/components/Simplicity.astro';

let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'No confusing portals, no endless email threads, no bureaucracy. We manage everything through the tools you already use every day.',
  'No confusing portals, no bureaucracy. We manage everything through the tools you already use every day.'
);

content = content.replace(
  '<span class="text-slate-700 font-medium">Direct WhatsApp / Telegram support</span>',
  '<span class="text-slate-700 font-medium">Direct communication via WhatsApp, Telegram, or email</span>'
);

content = content.replace(
  '<span class="text-slate-700 font-medium">Snap a photo of invoices, we do the rest</span>',
  '<span class="text-slate-700 font-medium">Seamless 100% digital and paperless document handling</span>'
);

fs.writeFileSync(file, content);
