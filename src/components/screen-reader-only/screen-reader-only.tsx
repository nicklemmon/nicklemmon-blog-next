import React from 'react'
import styles from './screen-reader-only.module.css'

export default function ScreenReaderOnly({
  children,
}: {
  children: React.ReactNode
}) {
  return <span className={styles.ScreenReaderOnly}>{children}</span>
}
