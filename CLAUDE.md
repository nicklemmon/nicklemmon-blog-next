# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/portfolio site built with Next.js (Pages Router), TypeScript, and MDX. Blog posts are authored in MDX files with frontmatter metadata and rendered using mdx-bundler with Shiki syntax highlighting.

## Development Commands

```bash
# Start dev server (includes image preprocessing)
npm run dev

# Build for production (includes image preprocessing)
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Run Cypress tests (interactive mode)
npm run test:e2e

# Run Cypress tests (CI mode)
npm run test:ci

# Preprocess images (runs automatically with dev/build)
npm run prep:images
```

## Architecture

### Pages Router Structure

- Uses Next.js Pages Router (not App Router)
- Pages in `src/pages/`: index, about, archives, resume, 404
- Dynamic route: `src/pages/post/[slug].tsx` for blog posts
- API route: `src/pages/api/og.tsx` (Edge runtime) for OG image generation

### Blog Post System

**Content Location**: `src/_posts/*.mdx`

**Post Processing Flow**:
1. MDX files contain frontmatter (title, date, description, image)
2. `getPost()` reads raw MDX from filesystem using `POSTS_PATH` constant
3. `bundleMDX()` compiles MDX with rehype-shiki for syntax highlighting
4. `getMDXComponent()` renders compiled code in `src/pages/post/[slug].tsx`
5. Content wrapped in `Post` layout which includes `LongForm` styling and `Bio` component

**Key Files**:
- `src/helpers/index.ts`: `getPosts()`, `getPost()`, `sortPostsByDate()`, `formatDate()`
- `src/constants/index.ts`: `POSTS_PATH` constant
- `src/types/posts.ts`: Post type definitions

### Image Processing

**Script**: `scripts/images.mjs`

**Flow**:
- Raw images: `src/images/*.jpg`
- Output: `public/images/posts/*.webp`
- Processing: Sharp converts to grayscale, resizes to 1200x800, outputs as WebP
- Runs automatically before dev/build via `prep:images` script

### Layout System

Four layout components in `src/layouts/`:
- `default.tsx`: Base layout
- `landing.tsx`: Homepage layout
- `page.tsx`: Standard page layout with title/image/date
- `post.tsx`: Blog post layout (extends Page, adds LongForm + Bio)

### Component Organization

Components follow a barrel export pattern:
- Each component in `src/components/<name>/`
- Contains: `<name>.tsx`, `<name>.module.css`, `index.ts`
- Index file re-exports the component

### Redirects

Legacy post URLs redirect from root to `/post/[slug]` via `next.config.ts`. Configured in `REDIRECT_POST_PATHS` array.

### Webpack Configuration

Custom webpack config in `next.config.ts` disables `fs` module on client-side (required for mdx-bundler which uses filesystem APIs).

### Syntax Highlighting

Uses Shiki (migrated from Prism) with night-owl theme. Configured in `src/pages/post/[slug].tsx` via rehype plugin. Supports: TypeScript, TSX, JavaScript, JSX, Bash, JSON, CSS, HTML.

## Testing

- E2E tests with Cypress in `cypress/tests/`
- Base URL: `http://localhost:3000` (configured in `cypress.config.js`)
- Test files: `404-page.cy.js`, `about-page.cy.js`, `index-page.cy.js`, `navigation.cy.js`
- Uses `@testing-library/cypress` and `cypress-real-events`

## Key Constraints

- Must use `--webpack` flag with Next.js commands (required for mdx-bundler)
- Posts must be in MDX format with proper frontmatter
- Image processing script must run before dev/build
- Uses Pages Router patterns, not App Router
