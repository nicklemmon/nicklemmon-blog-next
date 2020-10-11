import React from 'react'
import Page from 'layouts/Page'
import { PageLink } from 'components/links'

export default function Error() {
  return (
    <Page title={`404 Error`}>
      <p>
        Sorry! This isn&rsquo;t a valid page.&nbsp;
        <PageLink href="/">Take me somewhere legit</PageLink>.
      </p>
    </Page>
  )
}
