import React from 'react'
import { Page } from 'src/layouts'
import { PageLink } from 'src/components/links'

function Error({ statusCode }) {
  return (
    <Page title={`${statusCode} Error`}>
      <p>
        Sorry! Something went wrong on our end.&nbsp;
        <PageLink href="/">Take me back somewhere safe</PageLink>.
      </p>
    </Page>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
