import React from 'react'
import classNames from 'classnames'
import './Highlight.css'

export default class Highlight extends React.Component {
  render() {
    const { children, className } = this.props

    return (
      <span className={classNames( `Highlight`, className )}>{children}</span>
    )
  }
}
