import React from 'react'
import ScreenReaderOnly from '../screen-reader-only'
import styles from './hero.module.css'

export default function HeroIconLink({
  href,
  screenReaderContent,
  children,
}: {
  href: string
  screenReaderContent: string
  children: React.ReactNode
}) {
  return (
    <a
      className={styles["icon-link"]}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}

      <ScreenReaderOnly>
        {screenReaderContent} (Opens in a new tab)
      </ScreenReaderOnly>

      <span className={styles["icon-underlay"]} role="presentation" />
    </a>
  )
}
