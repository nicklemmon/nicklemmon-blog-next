import React from 'react'
import classNames from 'classnames'
import styles from './Main.module.css'

export default function Main({ children, className }) {
  return <main className={classNames(styles.Main, className)}>{children}</main>
}
