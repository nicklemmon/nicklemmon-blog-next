import React from 'react'
import classNames from 'classnames'
import styles from './LongForm.module.css'

export default function LongForm({ className, children }) {
  return (
    <div className={classNames(styles.LongForm, className)}>{children}</div>
  )
}
