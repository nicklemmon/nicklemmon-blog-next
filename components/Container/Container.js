import React from 'react'
import classNames from 'classnames'
import './Container.css'

export default class Container extends React.Component {
  render() {
    const { size, children, className } = this.props

    return (
      <div className={classNames( `Container Container--${size}`, className )}>
        {children}
      </div>
    )
  }
}
