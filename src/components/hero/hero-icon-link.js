import React from 'react'
import ScreenReaderOnly from '../screen-reader-only'
import styles from './hero.module.css'

export default function HeroIconLink(props) {
  const { href, screenReaderContent, children } = props

  return (
    <a
      className={styles.IconLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}

      <ScreenReaderOnly>
        {screenReaderContent} (Opens in a new tab)
      </ScreenReaderOnly>

      <span className={styles.IconUnderlay} role="presentation" />
    </a>
  )
}
