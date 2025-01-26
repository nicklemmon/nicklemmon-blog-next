import React from 'react'
import { Page } from '../layouts'
import ArticleCards from '../components/article-cards'
import ArticleCard from '../components/article-card'
import { getPosts, sortPostsByDate } from '../helpers'
import { Post } from '../types/posts'

export default function ArchivesPage({ posts }: { posts: Array<Post> }) {
  return (
    <Page
      title="Archives"
      description="Read from a list of all posts ever written! EVER."
    >
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
      </ArticleCards>
    </Page>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  const sortedPosts = sortPostsByDate(posts)

  return {
    props: {
      posts: sortedPosts,
    },
  }
}
