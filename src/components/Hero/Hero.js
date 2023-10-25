import React from 'react'
import classNames from 'classnames'
import Image from 'next/legacy/image'
import { socialCodepen } from 'react-icons-kit/ionicons/socialCodepen'
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub'
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin'
import Container from 'src/components/container'
import MaxWidth from 'src/components/max-width'
import Heading from 'src/components/heading'
import Highlight from 'src/components/highlight'
import HeroIconLink from './hero-icon-link'
import styles from './hero.module.css'

export default function Hero(props) {
  const { className } = props

  return (
    <div className={classNames(styles.Hero, className)}>
      <MaxWidth size="xl">
        <Container className={styles.Container} size="xxl">
          <Heading as="h1" className={styles.Title}>
            A <Highlight>front-end</Highlight> developer driven to create{' '}
            <Highlight>accessible</Highlight> user interfaces
          </Heading>

          <MaxWidth size="sm" className={styles.Links}>
            <HeroIconLink
              href="https://codepen.io/nicklemmon"
              icon={socialCodepen}
              screenReaderContent="Nick Lemmon on CodePen"
            />

            <HeroIconLink
              href="https://github.com/nicklemmon"
              icon={socialGithub}
              screenReaderContent="Nick Lemmon on GitHub"
            />

            <HeroIconLink
              href="https://linkedin.com/in/nicklemmon"
              icon={socialLinkedin}
              screenReaderContent="Nick Lemmon on LinkedIn"
            />
          </MaxWidth>
        </Container>
      </MaxWidth>

      <div className={styles.Overlay} role="presentation" />

      <Image
        className={styles.Image}
        src="/hero-bg.webp"
        role="presentation"
        alt=""
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
