import React from 'react'
import classNames from 'classnames'
import MaxWidth from 'components/MaxWidth'
import Heading from 'components/Heading'
import Highlight from 'components/Highlight'
import { formatDate } from 'helpers'
import styles from './PageTitle.module.css'

export default function PageTitle(props) {
  const { className, children, date } = props

  return (
    <div className={classNames(styles.PageTitle, className)} size="xl">
      <MaxWidth size="lg">
        <Heading className={styles.Heading} as="h1">
          <Highlight>{children}</Highlight>
        </Heading>

        {date && <div className={styles.Meta}>{formatDate(date)}</div>}
      </MaxWidth>

      <div className={styles.Overlay} role="presentation" />

      <img
        className={styles.Image}
        src="page-bg.png"
        role="presentation"
        alt=""
      />
    </div>
  )
}
