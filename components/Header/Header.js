import React from 'react'
import classNames from 'classnames'
import { PageLink } from 'components/links'
import Navigation from 'components/Navigation'
import styles from './Header.module.css'

export default function Header({ className }) {
  return (
    <header className={classNames(styles.Header, className)} data-cy="header">
      <div>
        <PageLink href="/" className={styles.BrandLink}>
          Nick Lemmon
        </PageLink>
      </div>

      <Navigation />
    </header>
  )
}
