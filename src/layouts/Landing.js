import React from 'react'
import Hero from 'src/components/hero'
import Header from 'src/components/header'
import Main from 'src/components/main'
import Footer from 'src/components/footer'
import BreakoutContainer from 'src/components/breakout-container'
import MaxWidth from 'src/components/max-width'
import { Default } from './default'
import styles from './landing.module.css'

export function Landing({ children }) {
  return (
    <Default>
      <Header className={styles.Header} theme="dark" />

      <Main className={styles.Main}>
        <Hero className={styles.Hero} />

        <MaxWidth className={styles.Sidebar} size="xl">
          <BreakoutContainer>{children}</BreakoutContainer>
        </MaxWidth>
      </Main>

      <Footer className={styles.Footer} />
    </Default>
  )
}
