import React from 'react'
import Hero from 'components/Hero'
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'
import BreakoutContainer from 'components/BreakoutContainer'
import MaxWidth from 'components/MaxWidth'
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
