import React from 'react'
import Hero from 'src/components/Hero'
import Header from 'src/components/Header'
import Main from 'src/components/Main'
import Footer from 'src/components/Footer'
import BreakoutContainer from 'src/components/BreakoutContainer'
import MaxWidth from 'src/components/MaxWidth'
import Default from './Default'
import styles from './Landing.module.css'

export default function LandingLayout({ children }) {
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
