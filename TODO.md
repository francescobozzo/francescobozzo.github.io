# TODO

## Known Issues

### White flash on browser back/forward from internal links
When navigating via internal links (e.g., clicking a link in a blog post that goes to another page), then pressing browser back, there's a brief white flash before the previous page appears.

**What's been tried:**
- `<script is:inline>` in head to set data-theme before paint — works for initial load, not for ClientRouter swaps
- `injectScript('head-inline')` via Astro integration — scripts run during parse but head doesn't re-process on swaps
- Body visibility hide/show with before-swap/after-swap — caused black screens on nav
- `html { background-color }` hardcoded — flash still occurs
- `ClientRouter transition="none"` — instant swap but flash persists
- FOUC-killer integration with reveal-on-DOMContentLoaded — overcomplicated, caused side effects
- Tracking page ref instead of location.pathname — fixed scroll restore but not flash

**Root cause (suspected):**
During ClientRouter's DOM swap, the browser paints a frame with default white background before the new body's styles apply. The `<html>` element persists with data-theme, but the swap briefly exposes the underlying white. This may be a browser rendering limitation during innerHTML replacement.

**Possible solutions:**
1. Use a full-page overlay div that matches the theme color during swaps (transition:persist)
2. Accept the flash (milliseconds, only on browser back/forward, not on forward clicks)
3. Switch to native browser navigation for back/forward (data-astro-reload on links)
4. Investigate Astro's swapFunctions API for custom swap logic

### Scroll position edge cases
- Scroll restoration works for most cases but may miss positions during momentum scrolling on some browsers
- Astro's built-in restoreScroll conflicts with manual restoration (had to disable it)
