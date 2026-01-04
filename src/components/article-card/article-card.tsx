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
      className={clsx(styles["link"], className)}
      href={href}
      data-id="article-card"
    >
      <Card className={styles["article-card"]}>
        <div className={styles["header"]}>
          <Heading as="h3" className={styles["heading"]}>
            {heading}
          </Heading>

          <Subdued className={styles["date"]}>{formatDate(date)}</Subdued>
        </div>

        {children}

        <span className={styles["read-more"]}>
          <IoArrowForwardSharp className={styles["icon"]} />
        </span>
      </Card>
    </PageLink>
  )
}
