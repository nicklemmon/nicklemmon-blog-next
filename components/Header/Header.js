import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import MaxWidth from 'components/MaxWidth'
import Navigation from 'components/Navigation'
import styles from './Header.module.css'

export default function Header({ className }) {
  return (
    <header className={classNames(styles.Header, className)} data-cy="header">
      <div>
        <Link href="/" passHref>
          <a className={styles.BrandLink}>Nick Lemmon</a>
        </Link>
      </div>

      <Navigation />
    </header>
  )
}
