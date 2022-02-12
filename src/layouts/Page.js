import React from 'react'
import Head from 'next/head'
import { Default } from 'src/layouts/Default'
import Header from 'src/components/Header'
import Main from 'src/components/Main'
import Footer from 'src/components/Footer'
import Container from 'src/components/Container'
import MaxWidth from 'src/components/MaxWidth'
import PageTitle from 'src/components/PageTitle'

export function Page({ title, titleImage, description, date, children }) {
  return (
    <>
      <Head>
        <title>{title} | Nick Lemmon, Front End Web Developer</title>
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
