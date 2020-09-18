import React from 'react'
import classNames from 'classnames'
import './LongForm.css'

export default class LongForm extends React.Component {
  render() {
    const { className, children, ...props } = this.props

    return (
      <article className={classNames('LongForm', className)} {...props}>
        {children}
      </article>
    )
  }
}
