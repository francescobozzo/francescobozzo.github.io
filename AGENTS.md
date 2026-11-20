# AGENTS.md

Instructions for AI coding agents working on this project.

## Project Overview

Personal website built with Astro 7. Static site, hosted on GitHub Pages.

## Key Rules

1. **direnv auto-activates nix flake** on `cd`. Run commands directly (no `nix develop` needed).

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
   imageUrl: string (optional) — absolute URL or root-relative path
   demoUrl: url (optional)
   repoUrl: url (optional)
   featured: boolean (default: false)
   ```

7. **CSS**: Custom properties in `:root` for theming. Every color is a `light-dark(light, dark)` pair resolved by `color-scheme`; there is no separate dark block. All colors use CSS vars. CSS is inlined into each page (`build.inlineStylesheets: 'always'`).

8. **Dark mode**: Toggle in Header with three states (`auto` / `light` / `dark`), stored in `localStorage.theme` (default `auto`) and mirrored on `<html data-theme>`, which only sets `color-scheme`. `auto` follows `prefers-color-scheme` with no JS. Applied pre-paint by the inline script in BaseLayout's `<head>`.

9. **Math**: KaTeX via remark-math + rehype-katex. Inline `$...$`, block `$$...$$`. KaTeX CSS is self-hosted and loaded only on pages whose body contains `$` (`math` prop on BaseLayout). `overrides.katex` in `package.json` keeps one KaTeX version for renderer and stylesheet - their class names must match.

10. **Navigation**: Plain multi-page site, no client router. Links are prefetched when they enter the viewport (`prefetch` in `astro.config.mjs`). Scripts run once per page load: no `astro:*` events, no init guards, and the browser handles scroll restoration.

11. **JavaScript**: Keep it tiny and inline (`<script is:inline>` next to the markup it drives). Prefer CSS (e.g. the reading progress bar is a scroll-driven animation). Mermaid is the only bundled script and only loads on pages that use `<Mermaid />`.

## File Conventions

- Components: `PascalCase.astro` in `src/components/`
- Pages: `kebab-case.astro` in `src/pages/`
- Styles: `src/styles/*.css` (imported in layouts)
- Static assets: `public/`
- Underscore-prefixed files (`_*.md`) excluded from collections

## Commands

```bash
# Dev server
npm run dev

# Build
npm run build

# Preview production
npm run preview

# Sync types
npm run sync
```

## Dependencies

Managed in `package.json`. Install directly:
```bash
npm install <package>
```

## See Also

- [WORKLOG.md](./WORKLOG.md) - Todo list
- [README.md](./README.md) - User-facing documentation
