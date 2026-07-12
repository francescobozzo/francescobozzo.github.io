---
title: "Welcome to the Blog"
description: "First post on this new blog. A quick demo of features."
pubDate: 2026-07-12
tags: ["meta", "astro"]
---

Welcome to my blog! This site is built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Features

Here's a quick tour of what this blog supports.

### Code Blocks

Syntax highlighting via Shiki with dual light/dark themes:

```typescript
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
```

### Inline Code

Use `backticks` for `inline code` like this `const x = 42;`.

### Math

Inline math: $E = mc^2$ and $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$.

Display math:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

### Images

Place images in your post directory and reference them:

```markdown
![Description](./image.png)
```

### Links

- [Internal links](/) work with file-based routing
- [External links](https://astro.build) open normally

### Lists

1. First item
2. Second item
3. Third item

- Unordered
- List
- Items

### Blockquotes

> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
> Sed do eiusmod tempor incididunt ut labore.

---

That's it! Happy reading.
