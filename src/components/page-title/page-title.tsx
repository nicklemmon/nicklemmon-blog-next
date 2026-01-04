import React from 'react'
import { clsx } from 'clsx'
import Image from 'next/image'
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
  date?: string
  image?: string
}) {
  return (
    <div className={clsx(styles["page-title"], className)}>
      <MaxWidth size="lg">
        <Heading className={styles["heading"]} as="h1">
          <Highlight>{children}</Highlight>
        </Heading>

        {date && <div className={styles["meta"]}>{formatDate(date)}</div>}
      </MaxWidth>

      <div className={styles["overlay"]} role="presentation" />

      <Image
        className={styles["image"]}
        src={`/images/posts/${image}`}
        role="presentation"
        alt=""
        layout="fill"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  )
}
