import React from 'react'
import { clsx } from 'clsx'
import styles from './main.module.css'

export default function Main({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return <main className={clsx(styles["main"], className)}>{children}</main>
}
