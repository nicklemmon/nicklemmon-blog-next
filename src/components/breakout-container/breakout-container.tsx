import React from 'react'
import Container from '../container'
import styles from './breakout-container.module.css'

export default function BreakoutContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles["breakout-container"]}>
      <Container size="lg" className={styles["container"]}>
        {children}
      </Container>
    </div>
  )
}
