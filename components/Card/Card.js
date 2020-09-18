import React from 'react'
import classNames from 'classnames'
import './Card.css'

export default class Card extends React.Component {
  render() {
    const { className, children } = this.props

    return <div className={classNames( 'Card', className )}>{children}</div>
  }
}
