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

## Remaining

- [ ] Sidenotes (Tufte-style, CSS-only)
- [ ] Analytics (privacy-friendly, e.g., Umami)
- [ ] Custom fonts (currently system fonts)
- [ ] OG images per post
- [ ] Newsletter signup
- [ ] Related posts by tags
- [ ] Full-text search (search.json indexes title/description/tags only, not body)
- [ ] Self-host KaTeX CSS (currently CDN-pinned, no SRI/preconnect)
- [ ] RSS: include post content (feed readers see only description)
- [ ] `twitter:card`: use `summary` when no og:image (currently always `summary_large_image`)
