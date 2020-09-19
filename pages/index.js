import Head from 'next/head'
import LandingLayout from 'components/Layouts/LandingLayout'
import Heading from 'components/Heading'
import Highlight from 'components/Highlight'
import Button from 'components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nick Lemmon's Blog</title>
      </Head>

      <LandingLayout>
        <Heading as="h2">
          <Highlight>The latest</Highlight>
        </Heading>

        <Button variant="primary" href="/archives" fullWidth>
          Archives
        </Button>
      </LandingLayout>
    </>
  )
}
