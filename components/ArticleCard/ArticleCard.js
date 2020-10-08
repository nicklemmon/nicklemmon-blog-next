import React from 'react'
import classNames from 'classnames'
import { Icon } from 'react-icons-kit'
import { arrowRight } from 'react-icons-kit/feather/arrowRight'
import { PageLink } from 'components/links'
import Card from 'components/Card'
import Subdued from 'components/Subdued'
import Heading from 'components/Heading'
import { formatDate } from 'helpers'
import styles from './ArticleCard.module.css'

export default function ArticleCard(props) {
  const { className, date, heading, children, href } = props

  return (
    <PageLink
      className={classNames(styles.Link, className)}
      href={href}
      data-id="article-card"
    >
      <Card className={styles.ArticleCard}>
        <div className={styles.Header}>
          <Heading as="h3" className={styles.Heading}>
            {heading}
          </Heading>

          <Subdued className={styles.Date}>{formatDate(date)}</Subdued>
        </div>

        {children}

        <span className={styles.ReadMore}>
          <Icon icon={arrowRight} size="100%" className={styles.Icon} />
        </span>
      </Card>
    </PageLink>
  )
}
