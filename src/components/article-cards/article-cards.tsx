import React from 'react'
import styles from './article-cards.module.css'

export default function ArticleCards({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles["article-cards"]}>{children}</div>
}
