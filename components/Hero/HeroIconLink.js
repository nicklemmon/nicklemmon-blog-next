import React from 'react'
import { Icon } from 'react-icons-kit'
import ScreenReaderOnly from 'components/ScreenReaderOnly'
import styles from './Hero.module.css'

export default class HeroLinkIcon extends React.Component {
  render() {
    const { icon, href, screenReaderContent } = this.props

    return (
      <a className={styles.IconLink} href={href} rel="noopener">
        <Icon
          className={styles.Icon}
          size={'calc(2.5rem + 1.5vw)'}
          icon={icon}
        />

        <ScreenReaderOnly>{screenReaderContent}</ScreenReaderOnly>

        <span className={styles.IconUnderlay} role="presentation" />
      </a>
    )
  }
}
