import React from 'react'
import { Icon } from 'react-icons-kit'
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward'
import { Landing } from 'src/layouts'
import Heading from 'src/components/Heading'
import Highlight from 'src/components/Highlight'
import Button from 'src/components/Button'
import ArticleCards from 'src/components/ArticleCards'
import ArticleCard from 'src/components/ArticleCard'
import { getPosts, sortPostsByDate, mapPostFrontmatter } from 'src/helpers'
import styles from './index.module.css'

export default function LandingPage({ posts }) {
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
              heading={post.frontmatter.title}
              description={post.frontmatter.description}
              href={`/post/${post.slug}`}
              date={post.frontmatter.date}
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

export async function getStaticProps() {
  const posts = await getPosts()
  const postsWithFrontmatter = posts.map(mapPostFrontmatter)
  const sortedPosts = sortPostsByDate(postsWithFrontmatter)
  const latestPosts = sortedPosts.filter((post, index) => {
    if (index < 4) return post
  })

  return {
    props: {
      posts: latestPosts,
    },
  }
}
