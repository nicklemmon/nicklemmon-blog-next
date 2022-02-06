/* eslint-disable */
const withMdxEnhanced = require('next-mdx-enhanced')
const mdxPrism = require('@mapbox/rehype-prism')

const REDIRECT_POST_PATHS = [
  'a-typescript-monster-battler',
  'automated-ui-testing-to-build-confidence',
  'building-a-collapsible-web-component-with-lit',
  'building-a-screen-reader-only-component',
  'building-an-accessible-collapsible-element',
  'building-an-accessible-heading-component',
  'buttons-that-look-like-links',
  'encouraging-a11y-best-practices-with-cypress',
  'using-tabindex-effectively',
]

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    // See: https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }

    return config
  },
  async redirects() {
    return REDIRECT_POST_PATHS.map((slug) => toPostRedirect(slug))
  },
}

/**
 * Returns a Next.js redirect config according to the passed-in slug. Posts were originally in the root of the site but have since moved.
 */
function toPostRedirect(slug) {
  return {
    source: `/${slug}`,
    destination: `/post/${slug}`,
    permanent: true,
  }
}
