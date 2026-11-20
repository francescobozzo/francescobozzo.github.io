# Worklog

## Completed

- [x] Scaffold: flake.nix, .envrc, package.json, tsconfig, astro.config.mjs
- [x] Pages, blog, RSS, search, mobile responsive, deploy, docs
- [x] Fix white flash, scroll restoration, mobile nav, footer
- [x] Reading progress bar (blog post pages)
- [x] Fix `is:inline` listener accumulation on ClientRouter swaps (theme toggle cycled N times per click after N navigations; same for mobile nav + scroll-save) - `window.__*` guards
- [x] Fix ProjectCard nested interactive elements (`<button>` inside `<a>`) - card is now a div, stretched title link covers whole card, external links are real anchors
- [x] Scope `a:visited` to content links (was overriding `.nav-link`/`.site-title` via specificity, turning visited nav purple)
- [x] Consistent trailing slashes on all internal links + `trailingSlash: 'always'` (avoids 301s on GitHub Pages, matches sitemap/RSS/canonical)
- [x] Simplify: drop ClientRouter (plain pages + viewport prefetch, native scroll restoration), remove hamburger nav, `light-dark()` theming, inline CSS, CSS-only reading progress, search filters the rendered post list (no `search.json`)
- [x] Fix KaTeX renderer/stylesheet version mismatch (sub/superscripts rendered full-size); self-host KaTeX CSS
- [x] Fix swapped Older/Newer post links, tag hover style, missing `ExternalLinkIcon` import on project pages, broken mobile table layout, anchors hidden under the header
- [x] `twitter:card`: `summary` when there is no og:image
- [x] Redesign: warm paper + rust accent palette, self-hosted Source Serif 4, serif headings, monospace labels, hairline-separated post/project rows instead of cards

## Remaining

- [ ] Sidenotes (Tufte-style, CSS-only)
- [ ] Analytics (privacy-friendly, e.g., Umami)
- [ ] OG images per post
- [ ] Newsletter signup
- [ ] Related posts by tags
- [ ] Full-text search (search filters title/description/tags only, not body)
- [ ] Render Mermaid diagrams at build time (the ~660KB client bundle is the heaviest thing on the site)
- [ ] RSS: include post content (feed readers see only description)
