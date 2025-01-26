import React from 'react'
import classNames from 'classnames'
import Image from 'next/legacy/image'
import MaxWidth from '../max-width'
import Heading from '../heading'
import Highlight from '../highlight'
import { formatDate } from '../../helpers'
import styles from './page-title.module.css'

export default function PageTitle({
  className,
  children,
  date,
  image = 'kenan-alboshi-UCbY7s2bF4o-unsplash.webp',
}: {
  className?: string
  children: React.ReactNode
  date: string
  image?: string
}) {
  return (
    <div className={classNames(styles.PageTitle, className)}>
      <MaxWidth size="lg">
        <Heading className={styles.Heading} as="h1">
          <Highlight>{children}</Highlight>
        </Heading>

        {date && <div className={styles.Meta}>{formatDate(date)}</div>}
      </MaxWidth>

      <div className={styles.Overlay} role="presentation" />

      <Image
        className={styles.Image}
        src={`/images/posts/${image}`}
        role="presentation"
        alt=""
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
