// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://demjrhan.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
