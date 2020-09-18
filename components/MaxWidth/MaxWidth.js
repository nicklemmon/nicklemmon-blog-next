import React from 'react'
import classNames from 'classnames'
import './MaxWidth.css'

export default class MaxWidth extends React.Component {
  render() {
    const { children, className, size } = this.props

    return (
      <div className={classNames(`MaxWidth MaxWidth--${size}`, className)}>
        {children}
      </div>
    )
  }
}
