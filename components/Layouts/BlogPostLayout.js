import React from 'react'
import { androidArrowBack } from 'react-icons-kit/ionicons/androidArrowBack'
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward'
import get from 'lodash/get'
import { PageLayout } from 'components/Layouts'
import LongForm from 'components/LongForm'
import Button from 'components/Button'
import Bio from 'components/Bio'
import Heading from 'components/Heading'
import ScreenReaderOnly from 'components/ScreenReaderOnly'
import styles from './BlogPostLayout.module.css'

export default function BlogPostLayout() {
  const post = this.props.pageResources.json.data.mdx
  const siteTitle = get(this.props, 'data.site.siteMetadata.title')
  const { previous, next } = this.props.pathContext

  return (
    <PageLayout title={post.frontmatter.title} date={post.frontmatter.date}>
      <LongForm>{post.body}</LongForm>

      <Bio />

      <ScreenReaderOnly>
        <Heading as="h4">More Articles</Heading>
      </ScreenReaderOnly>

      <div className={styles.Buttons}>
        {previous && (
          <Button
            variant="secondary"
            to={previous.fields.slug}
            prefixIcon={androidArrowBack}
          >
            {previous.frontmatter.title}
          </Button>
        )}

        {next && (
          <Button
            variant="secondary"
            to={next.fields.slug}
            suffixIcon={androidArrowForward}
          >
            {next.frontmatter.title}
          </Button>
        )}
      </div>
    </PageLayout>
  )
}
