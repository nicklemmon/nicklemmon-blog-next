import { clsx } from 'clsx'
import Image from 'next/image'
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
    <div className={clsx(styles["hero"], className)}>
      <MaxWidth size="xl">
        <Container className={styles["container"]} size="2xl">
          <Heading as="h1" className={styles["title"]}>
            A <Highlight>frontend</Highlight> engineering leader driven to
            create <Highlight>accessible</Highlight> user interfaces at{' '}
            <Highlight>scale.</Highlight>
          </Heading>

          <MaxWidth size="sm" className={styles["links"]}>
            <HeroIconLink
              href="https://codepen.io/nicklemmon"
              screenReaderContent="Nick Lemmon on CodePen"
            >
              <IoLogoCodepen size={iconSize} className={styles["icon"]} />
            </HeroIconLink>

            <HeroIconLink
              href="https://github.com/nicklemmon"
              screenReaderContent="Nick Lemmon on GitHub"
            >
              <IoLogoGithub size={iconSize} className={styles["icon"]} />
            </HeroIconLink>

            <HeroIconLink
              href="https://linkedin.com/in/nicklemmon"
              screenReaderContent="Nick Lemmon on LinkedIn"
            >
              <IoLogoLinkedin size={iconSize} className={styles["icon"]} />
            </HeroIconLink>
          </MaxWidth>
        </Container>
      </MaxWidth>

      <div className={styles["overlay"]} role="presentation" />

      <Image
        className={styles["image"]}
        src="/hero-bg.webp"
        role="presentation"
        alt=""
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
