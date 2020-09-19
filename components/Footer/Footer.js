import React from 'react'

import { Icon } from 'react-icons-kit'
import { socialCodepen } from 'react-icons-kit/ionicons/socialCodepen'
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub'
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin'
import { PageLink } from 'components/links'
import Container from 'components/Container'
import ScreenReaderOnly from 'components/ScreenReaderOnly'
import styles from './Footer.module.css'

export default function Footer() {
  const iconDimensions = 'calc(1.25rem + 1vw)'

  return (
    <footer className={styles.Footer} data-cy="footer">
      <Container size="lg" className={styles.Container}>
        <div className={styles.SocialLinks}>
          <a
            href="http://codepen.com/nicklemmon"
            className={styles.SocialLink}
            rel="noopener"
          >
            <Icon
              className={styles.SocialIcon}
              icon={socialCodepen}
              size={iconDimensions}
            />

            <ScreenReaderOnly>Nick Lemmon on Codepen</ScreenReaderOnly>
          </a>

          <a
            href="http://github.com/nicklemmon"
            className={styles.SocialLink}
            rel="noopener"
          >
            <Icon
              className={styles.SocialIcon}
              icon={socialGithub}
              size={iconDimensions}
            />

            <ScreenReaderOnly>Nick Lemmon on GitHub</ScreenReaderOnly>
          </a>

          <a
            href="http://linkedin.com/in/nicklemmon"
            className={styles.SocialLink}
            rel="noopener"
          >
            <Icon
              className={styles.SocialIcon}
              icon={socialLinkedin}
              size={iconDimensions}
            />

            <ScreenReaderOnly>Nick Lemmon on LinkedIn</ScreenReaderOnly>
          </a>
        </div>

        <div>
          <p>
            All rights reserved,
            <PageLink className={styles.FooterLink} href="/">
              <strong>Nick Lemmon</strong>
            </PageLink>
            {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  )
}
