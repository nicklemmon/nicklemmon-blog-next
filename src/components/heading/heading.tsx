import React from 'react'
import { clsx } from 'clsx'
import styles from './heading.module.css'

type HeadingEl = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export default function Heading({
  as,
  looksLike,
  children,
  className,
}: {
  as: HeadingEl
  looksLike?: HeadingEl
  children?: React.ReactNode
  className?: string
}) {
  const Component = looksLike ? looksLike : as
  const ariaLevel = Number(as.replace(/\D/g, ''))

  return (
    <Component
      role="heading"
      aria-level={ariaLevel}
      className={clsx(styles['heading'], className)}
    >
      {children}
    </Component>
  )
}
