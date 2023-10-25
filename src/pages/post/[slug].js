import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import mdxPrism from '@mapbox/rehype-prism'
import { getPosts, getPost } from 'src/helpers'
import PageTitle from 'src/components/page-title'
import { Post } from 'src/layouts'
import { POSTS_PATH } from 'src/constants'
import styles from './[slug].module.css'

export default function PostPage({ code, frontmatter }) {
  const { query } = useRouter()
  const MdxContent = useMemo(() => getMDXComponent(code), [code])

  if (query?.view === 'social-preview') {
    return (
      <PageTitle
        className={styles.SocialPreview}
        date={frontmatter.date}
        image={frontmatter.image}
      >
        {frontmatter.title}
      </PageTitle>
    )
  }

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
        slug: post.slug,
      },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const source = await getPost(params.slug)
  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: POSTS_PATH,
    mdxOptions(options) {
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
