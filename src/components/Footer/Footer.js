import React from 'react'
import { Icon } from 'react-icons-kit'
import { socialCodepen } from 'react-icons-kit/ionicons/socialCodepen'
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub'
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin'
import { PageLink } from 'src/components/links'
import Container from 'src/components/container'
import ScreenReaderOnly from 'src/components/screen-reader-only'
import styles from './footer.module.css'

export default function Footer() {
  const iconDimensions = 'calc(1.25rem + 1vw)'

  return (
    <footer className={styles.Footer} data-cy="footer">
      <Container size="lg" className={styles.Container}>
        <div className={styles.SocialLinks}>
          <a
            href="https://codepen.io/nicklemmon"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.SocialLink}
          >
            <Icon
              className={styles.SocialIcon}
              icon={socialCodepen}
              size={iconDimensions}
            />

            <ScreenReaderOnly>
              Nick Lemmon on CodePen (Opens in a new tab)
            </ScreenReaderOnly>
          </a>

          <a
            href="https://github.com/nicklemmon"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.SocialLink}
          >
            <Icon
              className={styles.SocialIcon}
              icon={socialGithub}
              size={iconDimensions}
            />

            <ScreenReaderOnly>
              Nick Lemmon on GitHub (Opens in a new tab)
            </ScreenReaderOnly>
          </a>

          <a
            href="https://linkedin.com/in/nicklemmon"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.SocialLink}
          >
            <Icon
              className={styles.SocialIcon}
              icon={socialLinkedin}
              size={iconDimensions}
            />

            <ScreenReaderOnly>
              Nick Lemmon on LinkedIn (Opens in a new tab)
            </ScreenReaderOnly>
          </a>
        </div>

        <div>
          <p>
            All rights reserved,&nbsp;
            <PageLink className={styles.FooterLink} href="/">
              <strong>Nick Lemmon</strong>
            </PageLink>
            &nbsp;{new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  )
}
