// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <--- IMPORTANTE

export default defineConfig({
  integrations: [tailwind()], // <--- IMPORTANTE
});