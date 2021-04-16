import React from 'react'
import { Icon } from 'react-icons-kit'
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward'
import Landing from 'src/layouts/Landing'
import Heading from 'src/components/Heading'
import Highlight from 'src/components/Highlight'
import Button from 'src/components/Button'
import ArticleCards from 'src/components/ArticleCards'
import ArticleCard from 'src/components/ArticleCard'
import { formatPath, sortPostsByDate } from 'src/helpers'
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

        <Icon
          className={styles.ArticlesHeadingIcon}
          icon={androidArrowForward}
          size="2rem"
        />
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
