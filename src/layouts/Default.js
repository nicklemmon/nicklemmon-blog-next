import React from 'react'
import styles from './Default.module.css'

export function Default({ children }) {
  return <div className={styles.Page}>{children}</div>
}
