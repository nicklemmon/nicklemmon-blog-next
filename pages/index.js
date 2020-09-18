import Head from 'next/head'
import { LandingLayout } from 'components/Layouts'
import Heading from 'components/Heading'
import Highlight from 'components/Highlight'
import CardArticles from 'components/CardArticles'
import Button from 'components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nick Lemmon's Blog</title>
      </Head>
      
      <LandingLayout>
        <Heading level="2">
          <Highlight>The latest</Highlight>
        </Heading>

        <CardArticles
          className="IndexPage-cardArticles"
          posts={posts}
          postLimit={3}
        />

        <Button type="primary" to="/archives" fullWidth>
          Archives
        </Button>
      </LandingLayout>
    </>
  )
}
