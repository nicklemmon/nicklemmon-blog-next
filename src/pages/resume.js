import React from 'react'
import { Page } from 'src/layouts'
import Resume from 'src/components/resume'

export default function ResumePage() {
  return (
    <Page title="Resume" description="Read about my skills and experience">
      <Resume />
    </Page>
  )
}
