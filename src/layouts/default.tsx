import React from 'react'
import styles from './default.module.css'

export function Default({ children }: { children: React.ReactNode }) {
  return <div className={styles["page"]}>{children}</div>
}
