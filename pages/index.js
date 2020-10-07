import React from 'react'
import Landing from 'layouts/Landing'
import Heading from 'components/Heading'
import Highlight from 'components/Highlight'
import Button from 'components/Button'
import ArticleCards from 'components/ArticleCards'
import ArticleCard from 'components/ArticleCard'
import { formatPath, sortPostsByDate } from 'helpers'
import { frontMatter as allPosts } from './*.mdx'
import styles from './index.module.css'

export default function LandingPage() {
  const posts = sortPostsByDate(allPosts).filter(
    (_post, postIndex) => postIndex < 4
  )

  return (
    <Landing>
      <Heading as="h2" className={styles.ArticlesHeading}>
        <Highlight>The latest</Highlight>
      </Heading>

      <ArticleCards>
        {posts.map((post, index) => {
          return (
            <ArticleCard
              key={`article-card-${index}`}
              heading={post.title}
              description={post.description}
              href={formatPath(post.__resourcePath)}
              date={post.date}
            />
          )
        })}

        <Button variant="primary" href="/archives" fullWidth>
          Archives
        </Button>
      </ArticleCards>
    </Landing>
  )
}
