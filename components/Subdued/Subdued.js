import React from 'react'
import classNames from 'classnames'
import './Subdued.css'

export default class Subdued extends React.Component {
  render() {
    const { className, children } = this.props

    return <span className={classNames('Subdued', className)}>{children}</span>
  }
}
