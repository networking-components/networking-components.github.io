import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://networking-components.github.io',
  output: 'static',
  integrations: [sitemap()],
});
