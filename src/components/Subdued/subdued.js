import React from 'react'
import classNames from 'classnames'
import styles from './subdued.module.css'

export default function Subdued(props) {
  const { className, children } = props

  return (
    <span className={classNames(styles.Subdued, className)}>{children}</span>
  )
}
