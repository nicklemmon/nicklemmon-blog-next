import type { NextConfig } from 'next'

const REDIRECT_POST_PATHS = [
  'a-typescript-monster-battler',
  'automated-ui-testing-to-build-confidence',
  'building-a-collapsible-web-component-with-lit',
  'building-an-accessible-collapsible-element',
  'building-an-accessible-heading-component',
  'buttons-that-look-like-links',
  'encouraging-a11y-best-practices-with-cypress',
  'using-tabindex-effectively',
]

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // See: https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
  async redirects() {
    return REDIRECT_POST_PATHS.map((slug) => toPostRedirect(slug))
  },
  reactStrictMode: true,
}

/**
 * Returns a Next.js redirect config according to the passed-in slug. Posts were originally in the root of the site but have since moved.
 */
function toPostRedirect(slug: string) {
  return {
    source: `/${slug}`,
    destination: `/post/${slug}`,
    permanent: true,
  }
}

export default nextConfig
