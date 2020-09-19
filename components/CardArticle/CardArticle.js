import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import { arrowRight } from 'react-icons-kit/feather/arrowRight'
import Card from 'components/Card'
import Subdued from 'components/Subdued'
import Heading from 'components/Heading'
import ScreenReaderOnly from 'components/ScreenReaderOnly'
import styles from './CardArticle.module.css'

export default function CardArticle(props) {
  const { className, date, headingContent, children, linkTo } = props

  return (
    <Link
      className={classNames(styles.Link, className)}
      to={linkTo}
      data-cy="card-article"
    >
      <Card className={styles.CardArticle}>
        <Subdued className={styles.Date}>{date}</Subdued>

        <Heading as="h3" className={styles.Heading}>
          {headingContent}
        </Heading>

        {children}

        <span className={styles.ReadMore}>
          <Icon icon={arrowRight} size={'100%'} className={styles.Icon} />

          <ScreenReaderOnly>Read More</ScreenReaderOnly>
        </span>
      </Card>
    </Link>
  )
}
