import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pajwilson.com',
  integrations: [sitemap()],
  experimental: {
    fonts: [
    {
      provider: fontProviders.google(),
      name: 'Source Serif 4',
      cssVariable: '--font-serif',
      weights: ['400 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Source Sans 3',
      cssVariable: '--font-sans',
      weights: ['400 700'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      subsets: ['latin'],
    },
    ],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
