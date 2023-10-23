import React from 'react'
import classNames from 'classnames'
import Image from "next/legacy/image"
import MaxWidth from 'src/components/MaxWidth'
import Heading from 'src/components/Heading'
import Highlight from 'src/components/Highlight'
import { formatDate } from 'src/helpers'
import styles from './PageTitle.module.css'

export default function PageTitle(props) {
  const {
    className,
    children,
    date,
    image = 'kenan-alboshi-UCbY7s2bF4o-unsplash.webp',
  } = props

  return (
    <div className={classNames(styles.PageTitle, className)} size="xl">
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
