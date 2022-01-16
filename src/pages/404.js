import React from 'react'
import Page from 'src/layouts/Page'
import { PageLink } from 'src/components/links'

export default function Error() {
  return (
    <Page title="404 Error">
      <p>
        Sorry! This isn&rsquo;t a valid page.&nbsp;
        <PageLink href="/">Take me somewhere legit</PageLink>.
      </p>
    </Page>
  )
}
