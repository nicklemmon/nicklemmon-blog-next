import React from 'react'
import { Icon } from 'react-icons-kit'
import ScreenReaderOnly from 'components/ScreenReaderOnly'

export default class HeroLinkIcon extends React.Component {
  render() {
    const { icon, href, screenReaderContent } = this.props

    return (
      <a className="Hero-iconLink" href={href} rel="noopener">
        <Icon className="Hero-icon" size={'calc(2.5rem + 1.5vw)'} icon={icon} />

        <ScreenReaderOnly>{screenReaderContent}</ScreenReaderOnly>

        <span className="Hero-iconUnderlay" role="presentation" />
      </a>
    )
  }
}
