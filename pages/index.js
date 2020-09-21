import Head from 'next/head'
import LandingLayout from 'components/Layouts/LandingLayout'
import Heading from 'components/Heading'
import Highlight from 'components/Highlight'
import Button from 'components/Button'
import ArticleCard from 'components/ArticleCard'
import { formatPath } from 'helpers'
import { frontMatter as posts } from './*.mdx'
import styles from './styles/index.module.css'

export default function Home() {
  return (
    <LandingLayout>
      <Heading as="h2" className={styles.ArticlesHeading}>
        <Highlight>The latest</Highlight>
      </Heading>

      {posts.map((post, index) => (
        <ArticleCard
          key={`article-card-${index}`}
          heading={post.title}
          href={formatPath(post.__resourcePath)}
          date={post.date}
        ></ArticleCard>
      ))}

      <Button variant="primary" href="/archives" fullWidth>
        Archives
      </Button>
    </LandingLayout>
  )
}
