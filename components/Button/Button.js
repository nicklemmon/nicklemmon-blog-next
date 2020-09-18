import React from 'react'
import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import classNames from 'classnames'
import './Button.css'

export default class Button extends React.Component {
  render() {
    const {
      to,
      type,
      children,
      fullWidth,
      centered,
      className,
      preIcon,
      postIcon,
    } = this.props

    return (
      <Link
        to={to}
        className={classNames(
          `Button Button--${type}`,
          fullWidth ? 'Button--full' : '',
          centered ? 'Button--centered' : '',
          className
        )}
      >
        {preIcon && (
          <Icon
            className="Button-icon Button-icon--pre"
            size="1rem"
            icon={preIcon}
          />
        )}

        {children}

        {postIcon && (
          <Icon
            className="Button-icon Button-icon--post"
            size="1rem"
            icon={postIcon}
          />
        )}
      </Link>
    )
  }
}
