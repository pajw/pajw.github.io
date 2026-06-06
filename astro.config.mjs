import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pajwilson.com',
  integrations: [sitemap()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Fraunces',
        cssVariable: '--font-serif',
        weights: ['100 900'],
        styles: ['normal', 'italic'],
        subsets: ['latin'],
      },
      {
        provider: fontProviders.google(),
        name: 'IBM Plex Mono',
        cssVariable: '--font-mono',
        weights: [400, 500],
        styles: ['normal', 'italic'],
        subsets: ['latin'],
      },
    ],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'rose-pine-dawn',
        dark: 'rose-pine-moon',
      },
    },
  },
});
