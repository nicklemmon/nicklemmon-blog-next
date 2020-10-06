import React from 'react'
import Head from 'next/head'
import Default from 'layouts/Default'
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'
import Container from 'components/Container'
import MaxWidth from 'components/MaxWidth'
import PageTitle from 'components/PageTitle'

export default function Page({ title, date, children }) {
  return (
    <>
      <Head>
        <title>{title} | Nick Lemmon, Front End Web Developer</title>
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
