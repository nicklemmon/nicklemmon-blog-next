import React from 'react'
import styles from './Default.module.css'

export default function Page({ children }) {
  return <div className={styles.Page}>{children}</div>
}
