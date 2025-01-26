import React from 'react'
import { clsx } from 'clsx'
import { PageLink } from '../links'
import Navigation from '../navigation'
import styles from './header.module.css'

export default function Header({
  className,
  theme = 'dark',
}: {
  className?: string
  theme: 'light' | 'dark'
}) {
  return (
    <header className={clsx(styles.Header, className)} data-cy="header">
      <div>
        <PageLink href="/" className={styles.BrandLink}>
          Nick Lemmon
        </PageLink>
      </div>

      <Navigation theme={theme} />
    </header>
  )
}
