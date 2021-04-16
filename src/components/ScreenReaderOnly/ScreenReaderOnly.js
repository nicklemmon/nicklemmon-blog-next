import React from 'react'
import styles from './ScreenReaderOnly.module.css'

export default function ScreenReaderOnly({ children }) {
  return <span className={styles.ScreenReaderOnly}>{children}</span>
}
