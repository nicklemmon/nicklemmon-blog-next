import React from 'react'
import Page from 'src/layouts/Page'
import Resume from 'src/components/Resume'

export default function ResumePage() {
  return (
    <Page title="Resume" description="Read about my skills and experience">
      <Resume />
    </Page>
  )
}
