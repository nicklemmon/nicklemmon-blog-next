import React from 'react'
import get from 'lodash/get'
import classNames from 'classnames'
import CardArticle from 'components/CardArticle'

export default class CardArticles extends React.Component {
  render() {
    const { className, posts, postLimit } = this.props
    const maxPosts = postLimit + 1 || null

    return (
      <div
        className={classNames('CardArticles', className)}
        data-cy="card-articles"
      >
        {posts.map(({ node }, index) => {
          const title = get(node, 'frontmatter.title')
          const count = index + 1
          const cardMarkup = (
            <CardArticle
              key={node.fields.slug}
              date={node.frontmatter.date}
              headingContent={title}
              linkTo={node.fields.slug}
            >
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </CardArticle>
          )

          if (maxPosts != null) {
            if (count < maxPosts) {
              return cardMarkup
            }
          } else {
            return cardMarkup
          }
        })}
      </div>
    )
  }
}
