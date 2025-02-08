import React from 'react'
import { clsx } from 'clsx'
import Image from 'next/legacy/image'
import { IoLogoCodepen, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Container from '../container'
import MaxWidth from '../max-width'
import Heading from '../heading'
import Highlight from '../highlight'
import HeroIconLink from './hero-icon-link'
import styles from './hero.module.css'

export default function Hero({ className }: { className?: string }) {
  const iconSize = 'calc(2.5rem + 1.5vw)'

  return (
    <div className={clsx(styles.Hero, className)}>
      <MaxWidth size="xl">
        <Container className={styles.Container} size="2xl">
          <Heading as="h1" className={styles.Title}>
            A <Highlight>frontend</Highlight> engineering leader driven to
            create <Highlight>accessible</Highlight> user interfaces at{' '}
            <Highlight>scale</Highlight>.
          </Heading>

          <MaxWidth size="sm" className={styles.Links}>
            <HeroIconLink
              href="https://codepen.io/nicklemmon"
              screenReaderContent="Nick Lemmon on CodePen"
            >
              <IoLogoCodepen size={iconSize} className={styles.Icon} />
            </HeroIconLink>

            <HeroIconLink
              href="https://github.com/nicklemmon"
              screenReaderContent="Nick Lemmon on GitHub"
            >
              <IoLogoGithub size={iconSize} className={styles.Icon} />
            </HeroIconLink>

            <HeroIconLink
              href="https://linkedin.com/in/nicklemmon"
              screenReaderContent="Nick Lemmon on LinkedIn"
            >
              <IoLogoLinkedin size={iconSize} className={styles.Icon} />
            </HeroIconLink>
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
