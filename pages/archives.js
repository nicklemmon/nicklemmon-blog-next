import React from 'react'
import Page from 'layouts/Page'
import ArticleCards from 'components/ArticleCards'
import ArticleCard from 'components/ArticleCard'
import { formatPath, sortPostsByDate } from 'helpers'
import { frontMatter as allPosts } from './*.mdx'

export default function ArchivesPage() {
  const posts = sortPostsByDate(allPosts)

  return (
    <Page title="Archives">
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
