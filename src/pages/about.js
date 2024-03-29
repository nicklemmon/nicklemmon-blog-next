import React from 'react'
import { Page } from '../layouts'
import Bio from '../components/bio'

export default function AboutPage() {
  return (
    <Page title="About" description="Learn more about me and my expertise.">
      <Bio />
    </Page>
  )
}
