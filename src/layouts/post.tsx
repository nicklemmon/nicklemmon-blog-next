import React from 'react'
import { Page } from './page'
import LongForm from '../components/long-form'
import Bio from '../components/bio'
import styles from './post.module.css'

export function Post({
  children,
  frontmatter,
}: {
  children: React.ReactNode
  frontmatter: {
    title: string
    image: string
    date: string
    description: string
  }
}) {
  return (
    <Page
      title={frontmatter.title}
      titleImage={frontmatter.image}
      date={frontmatter.date}
      description={frontmatter.description}
    >
      <LongForm>{children}</LongForm>

      <Bio className={styles.Bio} />
    </Page>
  )
}
