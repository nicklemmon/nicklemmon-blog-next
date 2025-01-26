import React from 'react'
import { Page } from '../layouts'
import { PageLink } from '../components/links'
import { NextPageContext } from 'next'

function Error({ statusCode }: { statusCode: number }) {
  return (
    <Page title={`${statusCode} Error`}>
      <p>
        Sorry! Something went wrong on our end.&nbsp;
        <PageLink href="/">Take me back somewhere safe</PageLink>.
      </p>
    </Page>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
