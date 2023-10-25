import React from 'react'
import { Page } from './page'
import LongForm from '../components/long-form'
import Bio from '../components/bio'
import styles from './post.module.css'

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
