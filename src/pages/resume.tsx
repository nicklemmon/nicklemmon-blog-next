import React from 'react'
import { Page } from '../layouts/page'
import Resume from '../components/resume/resume'

export default function ResumePage() {
  return (
    <Page title="Resume" description="Read about my skills and experience">
      <Resume />
    </Page>
  )
}
