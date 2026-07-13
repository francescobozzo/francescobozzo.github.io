# Worklog

Track of implementation progress. See [PLAN.md](./PLAN.md) for full spec.

## Completed

| Commit    | Message                                                               |
| --------- | --------------------------------------------------------------------- |
| `9c54278` | Scaffold: flake.nix, .envrc, package.json, tsconfig, astro.config.mjs |
| `430d6fe` | Pages, blog, RSS, search, mobile responsive, deploy, docs             |
| `5f1de5b` | Fix white flash, scroll restoration, mobile nav, footer               |

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
