import React from 'react'
import Page from 'layouts/Page'
import Bio from 'components/Bio'

export default function AboutPage() {
  return (
    <Page title="About" description="Learn more about me and my expertise.">
      <Bio />
    </Page>
  )
}
