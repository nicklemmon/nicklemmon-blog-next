import React from 'react'
import { clsx } from 'clsx'
import styles from './subdued.module.css'

export default function Subdued({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <span className={clsx(styles.Subdued, className)}>{children}</span>
}
