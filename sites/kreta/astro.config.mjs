// @ts-check
// kreta-auswandern.de: eigenständige Astro-Seite im taxomade-Repo.
// Build: npx astro build --root sites/kreta  (nutzt die node_modules im Repo-Root)
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kreta-auswandern.de',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({
    filter: (page) => !/\/(impressum|datenschutz|community|404)\/?$/.test(page),
  })],
});
