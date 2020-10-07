import React from 'react'
import Container from 'components/Container'
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
