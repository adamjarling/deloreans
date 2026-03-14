// @ts-check
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
  site: 'https://deloreans.at',
  server: {
    port: 4322,
  },
  i18n: {
    locales: ['en', 'de', 'hu'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
