import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeFigureCaptions from './src/plugins/rehype-figure-captions.mjs';

const basePath = process.env.BASE_PATH ?? '/Frontiers';

// Astro ships zero client-side JavaScript for these pages. The unified Markdown
// processor is selected explicitly so the mature remark/rehype math pipeline
// remains available in Astro 7+.
export default defineConfig({
  // Defaults target the requested GitHub Pages project. A future custom-domain
  // host can override both values without changing source files.
  site: process.env.SITE_URL ?? 'https://mingkaibuilds.github.io',
  base: basePath,
  output: 'static',
  integrations: [mdx()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, [rehypeFigureCaptions, { basePath }]],
    }),
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
