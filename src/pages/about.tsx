import React from 'react'
import { Page } from '../layouts/page'
import Bio from '../components/bio/bio'

export default function AboutPage() {
  return (
    <Page title="About" description="Learn more about me and my expertise.">
      <Bio />
    </Page>
  )
}
