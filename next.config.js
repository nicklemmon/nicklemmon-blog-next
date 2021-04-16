/* eslint-disable */
const withMdxEnhanced = require('next-mdx-enhanced')
const mdxPrism = require('@mapbox/rehype-prism')

module.exports = withMdxEnhanced({
  layoutPath: 'src/layouts',
  defaultLayout: false,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [mdxPrism],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
  pageExtensions: ['.js', '.mdx'],
})(/* your normal nextjs config */)
