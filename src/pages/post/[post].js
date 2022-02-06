import React, { useMemo } from 'react'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import mdxPrism from '@mapbox/rehype-prism'
import { getPosts, getPost } from 'src/helpers'
import { Post } from 'src/layouts'

export default function PostPage({ code, frontmatter }) {
  const MdxContent = useMemo(() => getMDXComponent(code), [code])

  return (
    <Post frontMatter={frontmatter}>
      <MdxContent />
    </Post>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const paths = posts.map((post) => {
    return {
      params: {
        post: post.slug,
      },
    }
  })

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const source = await getPost(params.post)
  const { code, frontmatter } = await bundleMDX({
    source,
    xdmOptions(options) {
      options.rehypePlugins = [...(options.rehypePlugins ?? []), mdxPrism]

      return options
    },
  })

  return {
    props: {
      code,
      frontmatter,
    },
  }
}
