import React from 'react'
import classNames from 'classnames'
import styles from './subdued.module.css'

export default function Subdued({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <span className={classNames(styles.Subdued, className)}>{children}</span>
  )
}
