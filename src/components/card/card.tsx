import React from 'react'
import { clsx } from 'clsx'
import styles from './card.module.css'

export default function Card({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return <div className={clsx(styles["card"], className)}>{children}</div>
}
