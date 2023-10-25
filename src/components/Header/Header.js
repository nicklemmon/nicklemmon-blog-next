import React from 'react'
import classNames from 'classnames'
import { PageLink } from 'src/components/links'
import Navigation from 'src/components/navigation'
import styles from './header.module.css'

export default function Header({ className, theme = 'dark' }) {
  return (
    <header className={classNames(styles.Header, className)} data-cy="header">
      <div>
        <PageLink href="/" className={styles.BrandLink}>
          Nick Lemmon
        </PageLink>
      </div>

      <Navigation theme={theme} />
    </header>
  )
}
