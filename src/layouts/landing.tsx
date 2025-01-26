import React from 'react'
import Hero from '../components/hero'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import BreakoutContainer from '../components/breakout-container'
import MaxWidth from '../components/max-width'
import { Default } from './default'
import styles from './landing.module.css'

export function Landing({ children }: { children: React.ReactNode }) {
  return (
    <Default>
      <Header className={styles.Header} theme="dark" />

      <Main className={styles.Main}>
        <Hero className={styles.Hero} />

        <MaxWidth className={styles.Sidebar} size="xl">
          <BreakoutContainer>{children}</BreakoutContainer>
        </MaxWidth>
      </Main>

      <Footer />
    </Default>
  )
}
