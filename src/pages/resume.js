import React from 'react'
import { Page } from '../layouts'
import Resume from '../components/resume'

export default function ResumePage() {
  return (
    <Page title="Resume" description="Read about my skills and experience">
      <Resume />
    </Page>
  )
}
