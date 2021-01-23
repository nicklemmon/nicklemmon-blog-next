import React from 'react'
import Page from 'layouts/Page'
import LongForm from 'components/LongForm'
import Bio from 'components/Bio'
import styles from './Post.module.css'

export default function Post({ children, frontMatter }) {
  return (
    <Page
      title={frontMatter.title}
      date={frontMatter.date}
      description={frontMatter.description}
    >
      <LongForm>{children}</LongForm>

      <Bio className={styles.Bio} />
    </Page>
  )
}
