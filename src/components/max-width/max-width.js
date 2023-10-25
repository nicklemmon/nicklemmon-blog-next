import React from 'react'
import classNames from 'classnames'
import styles from './max-width.module.css'

export default function MaxWidth({ children, className, size }) {
  return (
    <div
      className={classNames(
        styles.MaxWidth,
        styles[`MaxWidth--${size}`],
        className
      )}
    >
      {children}
    </div>
  )
}
