import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { Icon } from 'react-icons-kit'
import { arrowRight } from 'react-icons-kit/feather/arrowRight'
import Card from 'components/Card'
import Subdued from 'components/Subdued'
import Heading from 'components/Heading'
import ScreenReaderOnly from 'components/ScreenReaderOnly'
import './CardArticle.css'

export default class CardArticle extends React.Component {
  render() {
    const { className, date, headingContent, children, linkTo } = this.props

    return (
      <Link className={classNames( 'CardArticle-link', className )} to={linkTo} data-cy="card-article">
        <Card className="CardArticle">
          <Subdued className="CardArticle-date">{date}</Subdued>

          <Heading level="3" className="CardArticle-heading">
            {headingContent}
          </Heading>

          {children}

          <span className="CardArticle-readMore">
            <Icon
              icon={arrowRight}
              size={'100%'}
              className="CardArticle-icon"
            />

            <ScreenReaderOnly>Read More</ScreenReaderOnly>
          </span>
        </Card>
      </Link>
    )
  }
}
