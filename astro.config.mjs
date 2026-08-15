import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  integrations: [mdx(), sitemap()],
  site: 'https://francescobozzo.github.io',
  output: 'static',
  // Pages build as /path/index.html; all internal links use trailing
  // slashes to match (avoids 301 redirects on GitHub Pages).
  trailingSlash: 'always',
  // Mermaid bundles all diagram types into one large chunk (~660KB).
  // It's dynamically imported so only loads on pages with diagrams.
  vite: {
    build: {
      chunkSizeWarningLimit: 700,
    },
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // No inline default styles - CSS handles both themes via --shiki-* vars
      defaultColor: false,
    },
  },
});
