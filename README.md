# francescobozzo.github.io

Personal website built with [Astro](https://astro.build).

## Features

- **Blog** with markdown posts, RSS feed, tags, and search
- **LaTeX math** via KaTeX (`$inline$` and `$$block$$`)
- **Dark mode** (system preference + manual toggle, persisted)
- **Fast navigation** via Astro View Transitions (SPA-like, no full reloads)
- **Lightweight** — zero JS by default, Tufte-inspired typography
- **Responsive** — mobile-first with hamburger nav
- **GitHub Pages** deployment via GitHub Actions

## Local Development

### Prerequisites

- [Nix](https://nixos.org/download) with flakes enabled
- [direnv](https://direnv.net) (optional, auto-activates nix shell)

### Quick Start

```bash
# First time: allow direnv to use flake
direnv allow

# Or manually enter nix shell
nix develop

# Install dependencies (inside nix shell)
npm install

# Dev server with live reload
npm run dev        # → http://localhost:4321

# Production build
npm run build      # → dist/

# Preview production build locally
npm run preview    # → http://localhost:4321
```

### Without Nix

```bash
# Node.js 22+ required
npm install
npm run dev
```

## Project Structure

```
├── src/
│   ├── blog/              # Blog posts (*.md)
│   ├── components/        # Reusable UI components
│   ├── content.config.ts  # Content collection schemas
│   ├── layouts/           # Page layouts
│   ├── pages/             # Routes (file-based routing)
│   │   ├── blog/          # Blog routes
│   │   └── rss.xml.js     # RSS feed endpoint
│   ├── projects/          # Project entries (*.md)
│   └── styles/            # Global CSS
├── public/                # Static assets (favicon, CV PDF, etc.)
├── astro.config.mjs       # Astro configuration
├── flake.nix              # Nix development environment
└── package.json           # Dependencies
```

## Adding Content

### Blog Post

Create `src/blog/my-post.md`:

```markdown
---
title: "My Post Title"
description: "A brief description for listing pages and RSS"
pubDate: 2025-07-12
tags: ["astro", "web"]
---

Content here. Supports **markdown**, `code`, and [links](/).

Math: $E = mc^2$ or

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

Images: ![alt text](./my-image.png)
```

### Project Entry

Create `src/projects/my-project.md`:

```markdown
---
title: "My Project"
description: "A brief description"
tags: ["typescript", "react"]
demoUrl: "https://demo.example.com"
repoUrl: "https://github.com/user/repo"
featured: true
---
```

### CV

1. Drop PDF at `public/cv.pdf`
2. Edit `src/pages/cv.astro` for HTML summary

## Deployment

Push to `main` — GitHub Actions builds and deploys automatically.

```bash
git push origin main
```

Site lives at: https://francescobozzo.github.io

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | Astro 7 |
| Styling | Custom CSS (Tufte-inspired) |
| Syntax highlighting | Shiki (dual light/dark) |
| Math | KaTeX (remark-math + rehype-katex) |
| Navigation | Astro View Transitions |
| RSS | @astrojs/rss |
| Dependencies | npm + Nix flake |
| Hosting | GitHub Pages |

## License

[MIT](LICENSE)