import React from 'react'
import styles from './default.module.css'

export function Default({ children }) {
  return <div className={styles.Page}>{children}</div>
}
