import React from 'react'
import { clsx } from 'clsx'
import styles from './max-width.module.css'

type MaxWidthSize = 'sm' | 'md' | 'lg' | 'xl'

export default function MaxWidth({
  children,
  className,
  size,
}: {
  children: React.ReactNode
  className?: string
  size: MaxWidthSize
}) {
  return (
    <div
      className={clsx(styles.MaxWidth, styles[`MaxWidth--${size}`], className)}
    >
      {children}
    </div>
  )
}
