import React from 'react'
import { clsx } from 'clsx'
import styles from './highlight.module.css'

export default function Highlight({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <span className={clsx(styles["highlight"], className)}>{children}</span>
}
