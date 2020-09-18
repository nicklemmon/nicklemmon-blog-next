import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { androidArrowBack } from 'react-icons-kit/ionicons/androidArrowBack'
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward'
import get from 'lodash/get'
import { PageLayout } from 'components/Layouts'
import LongForm from 'components/LongForm'
import Button from 'components/Button'
import Bio from 'components/Bio'
import Heading from 'components/Heading'
import ScreenReaderOnly from 'components/ScreenReaderOnly'

import './BlogPostLayout.css'

class BlogPostLayout extends React.Component {
  render() {
    const post = this.props.pageResources.json.data.mdx
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <PageLayout
        className="BlogPostLayout"
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      >
        <LongForm className="BlogPostLayout-content">
          <MDXRenderer>{post.body}</MDXRenderer>
        </LongForm>

        <Bio />

        <ScreenReaderOnly>
          <Heading level="4">More Articles</Heading>
        </ScreenReaderOnly>

        <div className="BlogPostLayout-buttons">
          {previous && (
            <Button
              className="BlogPostLayout-button BlogPostLayout-button--prev"
              type="secondary"
              to={previous.fields.slug}
              preIcon={androidArrowBack}
            >
              {previous.frontmatter.title}
            </Button>
          )}

          {next && (
            <Button
              className="BlogPostLayout-button BlogPostLayout-button--next"
              type="secondary"
              to={next.fields.slug}
              postIcon={androidArrowForward}
            >
              {next.frontmatter.title}
            </Button>
          )}
        </div>
      </PageLayout>
    )
  }
}

export default BlogPostLayout
