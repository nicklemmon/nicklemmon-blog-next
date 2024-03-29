import React from 'react'
import classNames from 'classnames'
import styles from './card.module.css'

export default function Card({ className, children }) {
  return <div className={classNames(styles.Card, className)}>{children}</div>
}
