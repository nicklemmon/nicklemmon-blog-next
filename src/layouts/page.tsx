import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import Container from '../components/container'
import MaxWidth from '../components/max-width'
import PageTitle from '../components/page-title'
import { Default } from './default'

export function Page({
  title,
  titleImage,
  description,
  date,
  children,
}: {
  title: string
  titleImage?: string
  description?: string
  date?: string
  children?: React.ReactNode
}) {
  const ogImageUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${encodeURIComponent(title)}&date=${date}`

  return (
    <>
      <Head>
        <title>{`${title} | Nick Lemmon, Front End Web Developer`}</title>

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImageUrl} />

        {/* Standard meta */}
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="javascript,testing,react,accessibility,css"
        />
      </Head>

      <Default>
        <Header theme="light" />

        <Main>
          {title ? (
            <PageTitle date={date} image={titleImage}>
              {title}
            </PageTitle>
          ) : null}

          <Container size="lg">
            <MaxWidth size="lg">{children}</MaxWidth>
          </Container>
        </Main>

        <Footer />
      </Default>
    </>
  )
}
