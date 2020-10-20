import React from 'react'
import Card from 'components/Card'
import styles from './Demo.module.css'

export default function Demo({ children }) {
  return <Card className={styles.Demo}>{children}</Card>
}
