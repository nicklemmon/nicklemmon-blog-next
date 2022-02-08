import React from 'react'
import { Page } from 'src/layouts'
import Bio from 'src/components/Bio'

export default function AboutPage() {
  return (
    <Page title="About" description="Learn more about me and my expertise.">
      <Bio />
    </Page>
  )
}
