import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import rehypeShiki from '@shikijs/rehype'
import { transformerNotationHighlight } from '@shikijs/transformers'
import { getPosts, getPost } from '../../helpers'
import PageTitle from '../../components/page-title'
import { Post } from '../../layouts'
import { POSTS_PATH } from '../../constants'
import styles from './[slug].module.css'
import { GetStaticPropsContext } from 'next'

export default function PostPage({
  code,
  frontmatter,
}: {
  code: string
  frontmatter: {
    title: string
    image: string
    date: string
    description: string
  }
}) {
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
    <Post frontmatter={frontmatter}>
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

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (typeof params?.slug !== 'string') return

  const source = await getPost(params.slug)
  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: POSTS_PATH,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [
          rehypeShiki,
          {
            theme: 'night-owl',
            langs: [
              'typescript',
              'tsx',
              'javascript',
              'jsx',
              'bash',
              'json',
              'css',
              'html',
            ],
            transformers: [transformerNotationHighlight()],
          }
        ]
      ]

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
