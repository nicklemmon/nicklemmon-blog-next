import React from 'react'
import Default from 'layouts/Default'
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'
import Container from 'components/Container'
import MaxWidth from 'components/MaxWidth'
import PageTitle from 'components/PageTitle'

export default function Page({ title, date, children }) {
  return (
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
  )
}
