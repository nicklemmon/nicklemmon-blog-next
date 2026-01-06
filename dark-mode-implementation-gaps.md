# Dark/Light Mode Implementation Gap Analysis

## Overview
Your dark mode implementation uses a CSS-only approach with `prefers-color-scheme` media queries and a semantic token system. The architecture is well-designed with three layers (primitives → mode layer → island layer), but there are several gaps in implementation consistency.

---

## Critical Gaps

### 1. **Inconsistent Semantic Token Usage**
Many components bypass the semantic token system and reference primitive color variables directly:

**Files with hardcoded primitives:**
- `src/components/main/main.module.css:2` - uses `--white` instead of `--surface`
- `src/components/subdued/subdued.module.css:2` - uses `--boulder` instead of `--text-subdued`
- `src/components/long-form/long-form.module.css`:
  - Line 44: `--semi-transparent-black` instead of `--border`
  - Line 54: `--boulder` instead of `--text-subdued`
  - Line 65: `--outer-space` instead of `--text`
- `src/components/resume/resume.module.css`:
  - Line 50: `--white` instead of `--on-interactive`
  - Line 52: `--blue-ribbon` instead of `--interactive`
  - Lines 77, 93: `--semi-transparent-black` instead of `--border`
- `src/components/page-title/page-title.module.css:46` - `--white` instead of `--on-interactive`
- `src/components/button/button.module.css:8` - hardcoded `#000` instead of semantic token
- `src/components/navigation/navigation.module.css:29` - `--white` instead of `--on-interactive`
- `src/styles/global.css`:
  - Line 25: `--outer-space` instead of `--text`
  - Line 87: `--white` instead of semantic token

**Impact:** These components won't properly adapt to dark mode since they're locked to primitive values.

### 2. **Syntax Highlighting Theme**
`src/pages/post/[slug].tsx:74` hardcodes `theme: 'night-owl'` (a dark theme) for all code blocks.

**Impact:** Code blocks are always dark-themed, even when the site is in light mode. This creates a jarring visual inconsistency.

**Possible solutions:**
- Use Shiki's dual-theme support
- Switch to a light theme that works in both modes
- Implement theme detection and conditional rendering

### 3. **Dark Mode Text Hierarchy Issue**
`src/styles/color-tokens.css:75` sets `--text-subdued: var(--color-white)` in dark mode, which is identical to `--text`.

**Impact:** Removes visual hierarchy - subdued text should be visually distinct from primary text.

**Recommendation:** Use a muted value like `rgba(255, 255, 255, 0.7)` or `#b0b0b0`.

---

## Medium Priority Gaps

### 4. **Missing Shadow Token**
Line 60 of `color-tokens.css` has a TODO comment for shadow token. Currently, `--shadow-color` is a primitive, not a semantic token.

**Impact:** Shadows don't adapt properly between light/dark modes. Dark mode might need lighter shadows or adjusted opacity.

### 5. **Semi-Transparent Primitives Used as Semantic Tokens**
Variables `--semi-transparent-black` and `--semi-transparent-white` are primitives but used like semantic tokens throughout the codebase.

**Impact:** They don't properly invert between modes. A semi-transparent black overlay works in light mode but may not in dark mode.

**Recommendation:** Create semantic tokens like `--overlay`, `--border-subtle`, etc.

### 6. **Missing Theme Color Meta Tag**
`src/pages/_document.tsx` lacks a `<meta name="theme-color">` tag.

**Impact:** Browser chrome (address bar, tab bar) doesn't match your site's theme in dark mode.

**Recommendation:** Add:
```html
<meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)" />
<meta name="theme-color" content="#293038" media="(prefers-color-scheme: dark)" />
```

### 7. **Static Background Images**
`/public/hero-bg.webp` and `/public/me.webp` are static images.

**Impact:** Depending on their content, they may not look appropriate in dark mode.

**Recommendation:** Review these images in dark mode and consider:
- Adjusting overlays
- Creating dark mode variants
- Using CSS filters

---

## Low Priority / Nice to Have

### 8. **Island System Not Used**
The `data-island="emphasis"` system is fully defined in CSS (lines 93-133 of `color-tokens.css`) but never used in any component.

**Impact:** Dead code / incomplete feature taking up space.

**Recommendation:** Either implement the island system or remove the unused CSS.

### 9. **Unused Focus Ring Token**
`--focus-ring` is defined but never referenced.

**Impact:** Wasted token definition. Focus styles use `currentColor` or inline colors instead.

**Recommendation:** Either use the token consistently or remove it.

### 10. **Redundant Theme Classes**
`src/components/navigation/navigation.module.css` lines 55-67 contain `.dark-theme` and `.light-theme` classes that redundantly set `background-color: var(--text)`.

**Impact:** Unnecessary code duplication - semantic tokens should handle this.

**Recommendation:** Remove these classes.

### 11. **OG Image Always Light Mode**
`src/pages/api/og.tsx` uses hardcoded colors and always generates light-mode images.

**Impact:** Minor - OG images are typically static anyway and won't adapt to viewer's preference.

**Note:** This is probably acceptable as-is, but worth documenting.

---

## Summary Statistics

- **Files with hardcoded primitives:** 9 CSS files
- **Hardcoded color references:** ~15 instances
- **Unused CSS:** ~40 lines (island system + redundant classes)
- **Missing tokens:** 2 (shadow, semantic overlay)
- **Theme consistency issues:** 3 (syntax highlighting, text-subdued, images)

---

## Recommended Priority Order

1. Fix semantic token usage in all component CSS files
2. Address syntax highlighting theme issue
3. Fix `--text-subdued` in dark mode
4. Add shadow semantic token
5. Add theme-color meta tags
6. Review and update semi-transparent color usage
7. Clean up unused island system CSS or implement it
8. Review static images in dark mode
9. Remove unused `--focus-ring` or implement it
10. Remove redundant navigation theme classes
