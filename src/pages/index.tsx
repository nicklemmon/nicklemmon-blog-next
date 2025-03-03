import React from 'react'
import { IoArrowForwardSharp } from 'react-icons/io5'
import { Landing } from '../layouts'
import Heading from '../components/heading'
import Highlight from '../components/highlight'
import Button from '../components/button'
import ArticleCards from '../components/article-cards'
import ArticleCard from '../components/article-card'
import { getPosts, sortPostsByDate } from '../helpers'
import type { Post } from '../types/posts'
import styles from './index.module.css'

export default function LandingPage({ posts }: { posts: Array<Post> }) {
  return (
    <Landing>
      <Heading as="h2" className={styles.ArticlesHeading}>
        <Highlight>The latest</Highlight>

        <IoArrowForwardSharp
          className={styles.ArticlesHeadingIcon}
          size="2rem"
        />
      </Heading>

      <ArticleCards>
        {posts.map((post, index) => {
          if (!post.frontmatter.title) return null

          if (!post.frontmatter.date) return null

          return (
            <ArticleCard
              key={`article-card-${index}`}
              heading={post.frontmatter.title}
              href={`/post/${post.slug}`}
              date={post.frontmatter.date}
            />
          )
        })}

        <Button variant="primary" rounding="full" href="/archives" fullWidth>
          Archives
        </Button>
      </ArticleCards>
    </Landing>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  const sortedPosts = sortPostsByDate(posts)
  const latestPosts = sortedPosts.filter((post, index) => {
    if (index < 4) return post
  })

  return {
    props: {
      posts: latestPosts,
    },
  }
}
