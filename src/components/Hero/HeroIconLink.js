import React from 'react'
import { Icon } from 'react-icons-kit'
import ScreenReaderOnly from 'src/components/ScreenReaderOnly'
import styles from './Hero.module.css'

export default function HeroIconLink(props) {
  const { icon, href, screenReaderContent } = props

  return (
    <a
      className={styles.IconLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={styles.Icon} size={'calc(2.5rem + 1.5vw)'} icon={icon} />

      <ScreenReaderOnly>
        {screenReaderContent} (Opens in a new tab)
      </ScreenReaderOnly>

      <span className={styles.IconUnderlay} role="presentation" />
    </a>
  )
}
