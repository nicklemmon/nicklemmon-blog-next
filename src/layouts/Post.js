import React from 'react'
import { Page } from 'src/layouts'
import LongForm from 'src/components/long-form'
import Bio from 'src/components/bio'
import styles from './Post.module.css'

export function Post({ children, frontMatter }) {
  return (
    <Page
      title={frontMatter.title}
      titleImage={frontMatter.image}
      date={frontMatter.date}
      description={frontMatter.description}
    >
      <LongForm>{children}</LongForm>

      <Bio className={styles.Bio} />
    </Page>
  )
}
