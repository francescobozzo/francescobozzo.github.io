# Worklog

Track of implementation progress. See [PLAN.md](./PLAN.md) for full spec.

## Completed

| # | Commit | Message |
|---|--------|---------|
| 1 | `9c54278` | Scaffold: flake.nix, .envrc, package.json, tsconfig, astro.config.mjs |
| 2 | *(merged into 1)* | Base layout: BaseLayout, Header, Footer, ThemeToggle, global.css |
| 3 | `362dab1` | Pages: index, about, cv, contact, projects + projects collection |
| 4 | `06babbd` | Blog system: content collections, post renderer, tag pages |
| 5 | `73d31fb` | RSS feed endpoint |
| 6 | `0fd0d67` | LaTeX math support via KaTeX |
| 7 | `c4104fd` | Client-side blog search |
| 8 | `9678f7a` | Mobile responsive: hamburger nav, horizontal scroll for code/tables |
| 9 | `b141dc6` | GitHub Pages deployment workflow |
| 10 | `64fd0d6` | README, AGENTS.md, example blog post |

## Remaining (v2 / nice-to-haves)

- [ ] Sidenotes (Tufte-style, CSS-only)
- [ ] Analytics (privacy-friendly, e.g., Umami)
- [ ] Custom fonts (currently system fonts)
- [ ] OG images per post
- [ ] Newsletter signup
- [ ] Reading progress bar
- [ ] Related posts by tags

## Quick Commands

```bash
# Dev server
nix develop -c bash -c "npm run dev"

# Build
nix develop -c bash -c "npm run build"

# Preview production
nix develop -c bash -c "npm run preview"
```
