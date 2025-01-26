import React from 'react'
import { clsx } from 'clsx'
import Link from 'next/link'
import styles from './page-link.module.css'

export default function PageLink({
  onClick,
  onKeyDown,
  children,
  href,
  className,
  ...props
}: {
  onClick?: () => void
  onKeyDown?: () => void
  children?: React.ReactNode
  href: string
  className?: string
  'data-id'?: string
}) {
  return (
    <Link href={href} passHref onKeyDown={onKeyDown} legacyBehavior>
      <a
        className={clsx(styles.PageLink, className)}
        data-id={props['data-id']}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  )
}
