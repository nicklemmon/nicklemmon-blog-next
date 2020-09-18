import React from 'react'
import classNames from 'classnames'
import './Heading.css'

export default class Heading extends React.Component {
  render() {
    const { level, children, className } = this.props

    return (
      <div
        className={classNames( `Heading Heading--${level}`, className )}
        role="heading"
        aria-level={level}
      >
        {children}
      </div>
    )
  }
}
