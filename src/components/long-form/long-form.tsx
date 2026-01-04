import React from 'react'
import { clsx } from 'clsx'
import styles from './long-form.module.css'

export default function LongForm({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={clsx(styles["long-form"], className)}>{children}</div>
}
