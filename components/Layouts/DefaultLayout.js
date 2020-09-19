import React from 'react'
import classNames from 'classnames'
import styles from './DefaultLayout.module.css'

export default function DefaultLayout({ children, className }) {
  return (
    <div className={classNames(styles.DefaultLayout, className)}>
      {children}
    </div>
  )
}
