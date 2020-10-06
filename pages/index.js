import React from 'react'
import Landing from 'layouts/Landing'
import Heading from 'components/Heading'
import Highlight from 'components/Highlight'
import Button from 'components/Button'
import ArticleCard from 'components/ArticleCard'
import { formatPath, sortPostsByDate } from 'helpers'
import { frontMatter as allPosts } from './*.mdx'
import styles from './styles/index.module.css'

export default function LandingPage() {
  const posts = sortPostsByDate(allPosts).filter(
    (_post, postIndex) => postIndex < 3
  )

  return (
    <Landing>
      <Heading as="h2" className={styles.ArticlesHeading}>
        <Highlight>The latest</Highlight>
      </Heading>

      {posts.map((post, index) => (
        <ArticleCard
          key={`article-card-${index}`}
          heading={post.title}
          description={post.description}
          href={formatPath(post.__resourcePath)}
          date={post.date}
        />
      ))}

      <Button variant="primary" href="/archives" fullWidth>
        Archives
      </Button>
    </Landing>
  )
}
