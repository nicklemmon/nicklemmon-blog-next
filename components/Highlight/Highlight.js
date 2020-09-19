import React from 'react'
import classNames from 'classnames'
import styles from './Highlight.module.css'

export default function Highlight({ children, className }) {
  return (
    <span className={classNames(styles.Highlight, className)}>{children}</span>
  )
}
