# Personal Website Plan — francescobozzo.github.io

## Tech Stack

| Area | Choice | Why |
|------|--------|-----|
| Framework | **Astro 7** (latest) | Zero-JS by default, fast SSG, content collections |
| Package manager | **npm** | Simplest, lockfile detected by GitHub Actions |
| Styling | **Custom CSS** (Tufte-inspired) | No framework overhead, full control, lightweight |
| Syntax highlighting | **Shiki** (built-in) | Dual light/dark themes, no extra deps |
| Math | **remark-math + rehype-katex + katex** | Inline `$...$` and block `$$...$$` LaTeX in markdown |
| Navigation | **`<ClientRouter />`** (view transitions) | SPA-like instant page swaps, no full reloads |
| Dark mode | **CSS custom properties + `prefers-color-scheme`** | System preference detected, manual toggle persisted in localStorage |
| RSS | **@astrojs/rss** | Official package, content collection integration |
| Dependencies | **flake.nix + direnv** | Reproducible dev env |
| Hosting | **GitHub Pages** (GitHub Actions) | Free, matches repo name pattern, custom domain ready |

## Site Structure

```
/Users/fbozzo/projects/francescobozzo.github.io/
├── .github/workflows/deploy.yml      # GitHub Pages CI
├── .envrc                            # direnv integration
├── flake.nix                         # Nix flake (nodejs, astro cli)
├── flake.lock
├── astro.config.mjs                  # Astro config + markdown plugins
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
├── AGENTS.md                         # AI agent instructions
├── PLAN.md                           # This file
├── public/
│   ├── favicon.svg
│   └── rss/                          # RSS stylesheet (optional)
└── src/
    ├── content.config.ts             # Content collections (blog schema)
    ├── layouts/
    │   └── BaseLayout.astro          # Shared head, nav, dark mode, ClientRouter
    ├── pages/
    │   ├── index.astro               # Homepage (brief intro + latest posts)
    │   ├── about.astro               # About me (lorem ipsum for now)
    │   ├── cv.astro                  # CV page (downloadable PDF link + summary)
    │   ├── (contact removed — links in footer)
    │   ├── projects.astro            # Project portfolio
    │   ├── blog/
    │   │   └── [...slug].astro       # Dynamic blog post renderer
    │   ├── blog.astro                # Blog index (post list)
    │   └── rss.xml.js                # RSS feed endpoint
    ├── blog/                         # Blog post markdown files (collection)
    │   └── _draft-example.md         # Example post with frontmatter
    ├── components/
    │   ├── Header.astro              # Site header + nav
    │   ├── Footer.astro              # Site footer
    │   ├── ThemeToggle.astro         # Dark/light toggle button
    │   ├── PostCard.astro            # Blog post preview card
    │   └── ProjectCard.astro         # Project preview card
    └── styles/
        ├── global.css                # CSS vars, reset, typography, dark mode
        ├── tufte.css                 # Tufte-inspired layout (sidenotes, narrow column)
        └── katex.css                 # KaTeX overrides for dark mode
```

## Pages

### Homepage (`/`)
- Brief intro (name, title, one-liner)
- Links to About, Blog, Projects, CV, Contact
- 3 latest blog posts as preview cards

### About (`/about`)
- Lorem ipsum bio for now
- Photo placeholder

### CV (`/cv`)
- Brief career summary
- Link to downloadable PDF (stored in `public/cv.pdf`)
- Key skills / experience timeline

### Contact
- Removed page. GitHub / LinkedIn links in footer instead.

### Projects (`/projects`)
- Grid/list of project cards
- Each card: title, description, tech tags, links (repo, live demo)
- Data stored in a content collection or inline (decide based on scale)

### Blog Index (`/blog`)
- Sorted list of posts (newest first)
- PostCard with title, date, excerpt

### Blog Post (`/blog/[slug]`)
- Rendered from markdown via content collection
- Supports: images, code blocks (Shiki), LaTeX math (KaTeX)
- Prev/Next post navigation

## Blog System

### Content Collection Schema (`src/content.config.ts`)
```ts
const blog = defineCollection({
  loader: glob({ base: './src/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // OG/social image (optional, separate from in-post images)
    heroImage: z.object({ url: z.string(), alt: z.string() }).optional(),
  }),
});
```
Blog images use standard markdown `![alt](path)` in document order.
Hero image is optional frontmatter for social sharing / post preview cards.

### Frontmatter Example
```yaml
---
title: "My First Post"
description: "A brief description of this post"
pubDate: 2025-07-12
tags: ["astro", "blog"]
---
```

### RSS Feed (`src/pages/rss.xml.js`)
- Uses `getCollection('blog')` to fetch posts
- Auto-discovery `<link>` in BaseLayout head
- Full post content included (markdown-it + sanitize-html)

## Design

### Tufte-Inspired Principles
- **Narrow reading column** (~65ch for body text)
- **Serif body font** (e.g., Iowan Old Style / Georgia fallback)
- **Sans-serif headings** for contrast
- **Sidenotes** for asides (CSS-based, responsive — collapse on mobile)
- **Generous whitespace**
- **Minimal chrome** — no heavy framework UI

### Color Scheme
- **Light mode**: White background, dark text, subtle accent color
- **Dark mode**: Dark gray background, light text, adjusted accent
- **CSS custom properties** for all colors → easy theme swap

### Code Blocks
- Shiki dual themes: `github-light` / `github-dark`
- Custom `.astro-code` styling for rounded corners, subtle borders
- Line numbers optional, wrap on mobile

### Dark Mode Implementation
1. CSS `:root` vars for light, `[data-theme="dark"]` for dark
2. `<html>` gets `data-theme` attribute
3. `prefers-color-scheme` media query sets initial theme
4. Small inline script reads `localStorage.theme` and applies before paint (no FOUC)
5. Toggle button flips attribute + saves to localStorage
6. `astro:after-swap` listener preserves theme across ClientRouter navigations

### Mobile
- Responsive grid for projects/posts
- Sidenotes collapse to footnotes on small screens
- Hamburger nav or simple stacked nav
- Touch-friendly tap targets (min 44px)
- `viewport` meta tag, fluid typography with `clamp()`

## Nix Flake + Direnv

### `flake.nix`
- Provides: `nodejs` (latest stable), `astro` CLI in shell
- Dev shell with all needed tools

### `.envrc`
- `use flake` — loads the nix shell on `direnv allow`
- Auto-activated on `cd` into the project

## GitHub Pages Deployment

### Workflow (`.github/workflows/deploy.yml`)
- Trigger: push to `main` branch
- Uses `withastro/action@v6` (official Astro action)
- Uses `actions/deploy-pages@v5`
- No `base` needed (repo name is `francescobozzo.github.io` → root URL)
- `site: 'https://francescobozzo.github.io'` in astro.config.mjs

### Local Preview
```bash
# Load nix env (direnv does this automatically)
direnv allow   # first time only

# Dev server with live reload
npm run dev    # → http://localhost:4321

# Production build preview
npm run build  # → dist/
npm run preview # → serve dist/ locally
```

### Deploy
```bash
git push origin main   # triggers GitHub Actions → deploys to GitHub Pages
```

## Implementation Steps

Progress tracked in [WORKLOG.md](./WORKLOG.md). Each step = one commit.

1. **Scaffold** — flake.nix, .envrc, package.json, tsconfig, astro.config.mjs
2. **Base layout** — BaseLayout.astro, Header, Footer, ThemeToggle, global.css
3. **Pages** — index, about, cv, projects (+ projects collection)
4. **Blog system** — content.config.ts, blog/[...slug].astro, blog.astro, PostCard
5. **RSS feed** — rss.xml.js + auto-discovery link
6. **Math support** — katex, remark-math, rehype-katex config + katex.css
7. **Tags + Search** — tag listing page, client-side search component
8. **Styling + Mobile** — tufte.css, code blocks, responsive nav, fluid typography
9. **GitHub Pages** — deploy.yml workflow + site config
10. **Docs** — README.md, AGENTS.md, example blog post

## Decisions

1. **Sidenotes**: Postponed (v2). Nice-to-have Tufte feature.

2. **Blog images**: Standard markdown `![alt](path)` — render in document order. No extra schema. **Projects**: Content collection (scalable, same pattern as blog).

3. **CV**: Markdown page with structured sections (experience, education, skills). PDF separate (manual LaTeX/rendercv compilation). No auto-converter.

4. **Blog tags**: Implement. Tag listing page + per-post tags.

5. **Search**: Implement basic client-side search (no backend).

6. **Fonts**: System fonts (Georgia + system-ui). Custom fonts possible later.

7. **Analytics**: Postponed (v2). Privacy-friendly option later.

## Interesting Ideas

- **Reading time** estimates on blog posts (word count / 200 wpm)
- **Table of contents** auto-generated from headings in blog posts
- **Related posts** based on shared tags
- **OG images** auto-generated per post for social sharing
- **Newsletter signup** (e.g., Buttondown/Substack embed)
- **Latex in sidenotes** — math equations as sidenotes would be very Tufte-esque
- **Progress bar** at top of blog posts (scroll percentage)
