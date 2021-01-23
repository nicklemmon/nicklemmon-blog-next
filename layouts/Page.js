import React from 'react'
import Head from 'next/head'
import Default from 'layouts/Default'
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'
import Container from 'components/Container'
import MaxWidth from 'components/MaxWidth'
import PageTitle from 'components/PageTitle'

export default function Page({ title, description, date, children }) {
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
          {title ? <PageTitle date={date}>{title}</PageTitle> : null}

          <Container size="lg">
            <MaxWidth size="lg">{children}</MaxWidth>
          </Container>
        </Main>

        <Footer />
      </Default>
    </>
  )
}
