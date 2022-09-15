import React from 'react'
import styles from './ArticleCards.module.css'

export default function ArticleCards({ children }) {
  return <div className={styles.ArticleCards}>{children}</div>
}
