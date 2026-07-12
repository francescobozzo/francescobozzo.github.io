# AGENTS.md

Instructions for AI coding agents working on this project.

## Project Overview

Personal website built with Astro 7. Static site, hosted on GitHub Pages.

## Key Rules

1. **Always use nix shell for commands**: `nix develop -c bash -c "command"`
   - Never use global node/npm — always inside nix flake
   - direnv auto-activates flake on `cd`

2. **Build before committing**: Always run `npx astro build` to verify no errors

3. **One feature per commit**: Atomic commits, clear messages

4. **Content collections live in `src/content.config.ts`**: Blog + projects schemas

5. **Blog posts in `src/blog/`**: Frontmatter schema:
   ```yaml
   title: string (required)
   description: string (required)
   pubDate: date (required)
   updatedDate: date (optional)
   tags: string[] (default: [])
   heroImage: { url, alt } (optional)
   ```

6. **Projects in `src/projects/`**: Frontmatter schema:
   ```yaml
   title: string (required)
   description: string (required)
   tags: string[] (default: [])
   demoUrl: url (optional)
   repoUrl: url (optional)
   featured: boolean (default: false)
   ```

7. **CSS**: Custom properties in `:root` for theming. `[data-theme='dark']` for dark mode. All colors use CSS vars.

8. **Dark mode**: Toggle in Header. Persists to `localStorage.theme`. Respects `prefers-color-scheme`. `astro:after-swap` preserves across navigations.

9. **Math**: KaTeX via remark-math + rehype-katex. Inline `$...$`, block `$$...$$`. KaTeX CSS loaded globally.

10. **Navigation**: `<ClientRouter />` in BaseLayout. Use `astro:after-swap` for scripts that need re-running.

## File Conventions

- Components: `PascalCase.astro` in `src/components/`
- Pages: `kebab-case.astro` in `src/pages/`
- Styles: `src/styles/*.css` (imported in layouts)
- Static assets: `public/`
- Underscore-prefixed files (`_*.md`) excluded from collections

## Commands

```bash
# Dev server
nix develop -c bash -c "npm run dev"

# Build
nix develop -c bash -c "npm run build"

# Preview production
nix develop -c bash -c "npm run preview"

# Sync types
nix develop -c bash -c "npm run sync"
```

## Dependencies

Managed in `package.json`. Install inside nix shell:
```bash
nix develop -c bash -c "npm install <package>"
```

## See Also

- [PLAN.md](./PLAN.md) — Full specification and design decisions
- [WORKLOG.md](./WORKLOG.md) — Implementation progress tracker
- [README.md](./README.md) — User-facing documentation
