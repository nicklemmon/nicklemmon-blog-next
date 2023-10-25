import React from 'react'
import classNames from 'classnames'
import styles from './container.module.css'

export default function Container(props) {
  const { size, children, className } = props
  const getSizeClassName = (size) => {
    switch (size) {
      case 'lg': {
        return styles.Large
      }
      case 'xl': {
        return styles.ExtraLarge
      }
      case 'xxl': {
        return styles.ExtraExtraLarge
      }
      default: {
        return undefined
      }
    }
  }

  return (
    <div
      className={classNames(
        styles.Container,
        getSizeClassName(size),
        className
      )}
    >
      {children}
    </div>
  )
}
