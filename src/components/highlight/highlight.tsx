import React from 'react'
import classNames from 'classnames'
import styles from './highlight.module.css'

export default function Highlight({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={classNames(styles.Highlight, className)}>{children}</span>
  )
}
