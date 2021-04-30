import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import MaxWidth from 'src/components/MaxWidth'
import Heading from 'src/components/Heading'
import Highlight from 'src/components/Highlight'
import { formatDate } from 'src/helpers'
import styles from './PageTitle.module.css'

export default function PageTitle(props) {
  const { className, children, date, backgroundImg = '/page-bg.png' } = props

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
        src={backgroundImg}
        role="presentation"
        alt=""
        layout="fill"
        priority={true}
      />
    </div>
  )
}
