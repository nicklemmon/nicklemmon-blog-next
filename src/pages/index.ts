import React from 'react'
import { IoArrowForwardSharp } from 'react-icons/io5'
import { Landing } from '../layouts'
import Heading from '../components/heading'
import Highlight from '../components/highlight'
import Button from '../components/button'
import ArticleCards from '../components/article-cards'
import ArticleCard from '../components/article-card'
import { getPosts, sortPostsByDate, mapPostFrontmatter } from '../helpers'
import styles from './index.module.css'

export default function LandingPage({ posts }) {
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
