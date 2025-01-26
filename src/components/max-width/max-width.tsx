import React from 'react'
import classNames from 'classnames'
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
      className={classNames(
        styles.MaxWidth,
        styles[`MaxWidth--${size}`],
        className
      )}
    >
      {children}
    </div>
  )
}
