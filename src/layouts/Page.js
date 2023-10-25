import React from 'react'
import Head from 'next/head'
import { Default } from 'src/layouts/default'
import Header from 'src/components/header'
import Main from 'src/components/main'
import Footer from 'src/components/footer'
import Container from 'src/components/container'
import MaxWidth from 'src/components/max-width'
import PageTitle from 'src/components/page-title'

export function Page({ title, titleImage, description, date, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | Nick Lemmon, Front End Web Developer`}</title>
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />
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
