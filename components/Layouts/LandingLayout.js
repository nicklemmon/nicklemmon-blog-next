import React from 'react'
import DefaultLayout from './DefaultLayout'
import Hero from 'components/Hero'
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'
import BreakoutContainer from 'components/BreakoutContainer'
import MaxWidth from 'components/MaxWidth'
import styles from './LandingLayout.module.css'

export default function LandingLayout({ children }) {
  return (
    <DefaultLayout>
      <Header className={styles.Header} />

      <Main className={styles.Main}>
        <Hero className={styles.Hero} />

        <MaxWidth className={styles.Sidebar} size="xl">
          <BreakoutContainer>{children}</BreakoutContainer>
        </MaxWidth>
      </Main>

      <Footer className={styles.Footer} />
    </DefaultLayout>
  )
}
