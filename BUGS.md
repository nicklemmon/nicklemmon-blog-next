# Bug Report - Nick Lemmon Blog
**Date**: 2026-01-09
**Environment**: Local Development (http://localhost:3000)
**Browser**: Playwright/Chromium

---

## Critical Issues

### 1. Blog Post URL Typo
**Location**: Latest blog post
**Issue**: URL contains typo "effectice" instead of "effective"
**Current URL**: `/post/building-and-shipping-an-effectice-icon-web-component`
**Expected URL**: `/post/building-and-shipping-an-effective-icon-web-component`
**Impact**: Broken or inconsistent URLs affect SEO and bookmarking
**Pages Affected**:
- Homepage (link to post)
- Archives page (link to post)
- The blog post page itself

**Evidence**:
```
Link text: "Building (and shipping) an effective icon web component"
Actual href: /post/building-and-shipping-an-effectice-icon-web-component
                                             ^^^^^^^^^ (typo)
```

---

### 2. Incomplete Blog Post Content
**Location**: `/post/building-and-shipping-an-effectice-icon-web-component`
**Issue**: Blog post sections 3-6 only contain headings with no body content
**Missing Content For**:
- "3. Allowing for customization" - heading only, no content
- "4. Responding to design tokens" - heading only, no content
- "5. Support for ARIA attributes" - heading only, no content
- "6. Simple API" - heading only, no content

**Impact**: Incomplete article provides poor user experience and suggests work-in-progress content is published

---

## High Priority Issues

### 3. Typography Error in Hero Headline
**Location**: Homepage hero section
**Issue**: Extra period at the end of the headline
**Current Text**: "A frontend engineering leader driven to create accessible user interfaces at scale ."
**Expected Text**: "A frontend engineering leader driven to create accessible user interfaces at scale."
**Impact**: Unprofessional appearance with incorrect spacing before period

---

### 4. Text Duplication on About Page
**Location**: `/about` - "About Me" section
**Issue**: Word "in" is duplicated
**Current Text**: "...currently based in in Cary, North Carolina."
**Expected Text**: "...currently based in Cary, North Carolina."
**Impact**: Obvious typo that affects professionalism

---

## Medium Priority Issues (Performance & Optimization)

### 5. Next.js Image Legacy Props Warnings
**Issue**: Multiple images using deprecated Next.js Image props
**Console Warnings**:
```
Image with src "/hero-bg.webp" has legacy prop "layout".
Did you forget to run the codemod?

Image with src "/hero-bg.webp" has legacy prop "objectFit".
Did you forget to run the codemod?

Image with src "/images/posts/kenan-alboshi-UCbY7s2bF4o-unsplash.webp"
has legacy prop "layout".

Image with src "/me.webp" has legacy prop "layout".
```

**Affected Images**:
- `/hero-bg.webp` (homepage background)
- `/images/posts/kenan-alboshi-UCbY7s2bF4o-unsplash.webp` (page headers)
- `/me.webp` (profile photo)

**Impact**: Using deprecated API that may break in future Next.js versions
**Fix**: Run Next.js codemod: `npx @next/codemod next-image-to-legacy-image .`
Or manually update to use `fill` prop instead of `layout="fill"`

---

### 6. Missing 'sizes' Prop on Fill Images
**Issue**: Images with `fill` prop missing required `sizes` attribute
**Console Warning**:
```
Image with src "/hero-bg.webp" has "fill" but is missing "sizes" prop.
Please add it to improve page performance.
```

**Impact**: Sub-optimal image loading performance, browser cannot determine appropriate image size
**Fix**: Add `sizes` prop to specify responsive image sizes, e.g.:
```tsx
<Image
  src="/hero-bg.webp"
  fill
  sizes="100vw"
  alt="Background"
/>
```

---

### 7. LCP (Largest Contentful Paint) Optimization Warning
**Issue**: Hero background image detected as LCP element
**Console Warning**:
```
Image with src "/hero-bg.webp" was detected as the Largest Contentful Paint (LCP).
Please add the "priority" property if this image is above the fold.
```

**Affected Pages**: Homepage, About, Archives, Post pages
**Impact**: Slower perceived page load time, affects Core Web Vitals
**Fix**: Add `priority` prop to hero images:
```tsx
<Image src="/hero-bg.webp" fill priority sizes="100vw" alt="Background" />
```

---

## Low Priority Issues

### 8. StackBlitz Embed CSP/CORS Errors
**Location**: Blog post with embedded StackBlitz demo
**Issue**: StackBlitz iframe generates console errors
**Console Errors**:
```
Failed to load resource: the server responded with a status of 404 ()
@ https://stackblitz.c...

Refused to execute script from 'https://stackblitz.com/edit/...'
because its MIME type ('text/html') is not executable
```

**Impact**: Embedded code demos may not load properly
**Note**: This may be a StackBlitz platform issue rather than a site issue, but worth investigating if embeds work in production

---

## Additional Observations

### Content Freshness (Informational)
**Location**: `/resume`
**Issue**: Resume shows "August 2019 — through Current" for SparkPost role
**Note**: If this is outdated, consider updating the resume. If accurate, no action needed.

---

## Summary Statistics

- **Critical Issues**: 2
- **High Priority**: 2
- **Medium Priority**: 3
- **Low Priority**: 1
- **Total Issues**: 8

## Recommended Priority Order

1. Fix blog post URL typo (breaks SEO/sharing)
2. Fix text typos (hero headline, About page)
3. Complete blog post content OR mark as draft
4. Update Next.js Image components (deprecated API)
5. Add `priority` and `sizes` props to optimize performance
6. Investigate StackBlitz embed issues

---

## Testing Notes

All pages tested:
- ✅ Homepage (`/`)
- ✅ About (`/about`)
- ✅ Archives (`/archives`)
- ✅ Resume (`/resume`)
- ✅ Blog Post (`/post/building-and-shipping-an-effectice-icon-web-component`)
- ✅ 404 Page (`/does-not-exist`)

Mobile responsiveness tested:
- ✅ Mobile layout appears functional (tested at 375x667)
- ✅ Navigation menu works on mobile
- ✅ Content is readable on mobile devices
