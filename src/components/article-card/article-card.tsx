import React from 'react'
import { clsx } from 'clsx'
import { IoArrowForwardSharp } from 'react-icons/io5'
import { PageLink } from '../links'
import Card from '../card'
import Subdued from '../subdued'
import Heading from '../heading'
import { formatDate } from '../../helpers'
import styles from './article-card.module.css'

export default function ArticleCard({
  className,
  date,
  heading,
  children,
  href,
}: {
  className?: string
  date: string
  heading: string
  children?: React.ReactNode
  href: string
}) {
  return (
    <PageLink
      className={clsx(styles.Link, className)}
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
          <IoArrowForwardSharp className={styles.Icon} />
        </span>
      </Card>
    </PageLink>
  )
}
