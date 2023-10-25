import React from 'react'
import Container from 'src/components/container'
import styles from './BreakoutContainer.module.css'

export default function BreakoutContainer({ children }) {
  return (
    <div className={styles.BreakoutContainer}>
      <Container size="lg" className={styles.Container}>
        {children}
      </Container>
    </div>
  )
}
