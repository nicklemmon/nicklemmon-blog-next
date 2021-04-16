import React from 'react'
import Page from 'src/layouts/Page'
import ArticleCards from 'src/components/ArticleCards'
import ArticleCard from 'src/components/ArticleCard'
import { formatPath, sortPostsByDate } from 'src/helpers'
import { frontMatter as allPosts } from './*.mdx'

export default function ArchivesPage() {
  const posts = sortPostsByDate(allPosts)

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
              heading={post.title}
              description={post.description}
              href={formatPath(post.__resourcePath)}
              date={post.date}
            />
          )
        })}
      </ArticleCards>
    </Page>
  )
}
