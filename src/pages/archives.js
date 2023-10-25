import React from 'react'
import { Page } from 'src/layouts'
import ArticleCards from 'src/components/article-cards'
import ArticleCard from 'src/components/article-card'
import { getPosts, mapPostFrontmatter, sortPostsByDate } from 'src/helpers'

export default function ArchivesPage({ posts }) {
  return (
    <Page
      title="Archives"
      description="Read from a list of all posts ever written! EVER."
    >
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
      </ArticleCards>
    </Page>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  const postsWithFrontmatter = posts.map(mapPostFrontmatter)
  const sortedPosts = sortPostsByDate(postsWithFrontmatter)

  return {
    props: {
      posts: sortedPosts,
    },
  }
}
