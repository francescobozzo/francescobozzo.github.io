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
  // Plain multi-page site: every page is one self-contained HTML response
  // (CSS inlined), and links are prefetched as they scroll into view.
  build: { inlineStylesheets: 'always' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  // Mermaid ships one large chunk (~660KB). It only loads on pages that
  // render a <Mermaid /> diagram.
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
      // No inline colors - global.css picks --shiki-light / --shiki-dark
      defaultColor: false,
    },
  },
});
