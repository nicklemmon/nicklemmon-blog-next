import React from 'react'
import classNames from 'classnames'
// import styles from './LongForm.module.css'

export default function LongForm({ className, children }) {
  return <article className={classNames(className)}>{children}</article>
}
