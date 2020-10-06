import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FocusLock from 'react-focus-lock'
import classNames from 'classnames'
import { PageLink } from 'components/links'
import ScreenReaderOnly from 'components/ScreenReaderOnly'
import styles from './Navigation.module.css'

const animationStates = {
  closed: {
    scale: 0.95,
    opacity: 0,
    borderRadius: '3rem',
  },
  open: {
    scale: 1,
    opacity: 1,
    borderRadius: '0%',
  },
}

export default function Navigation({ className, theme }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // DOM manipulation! 😭😭😭
    // This could be refactored to use context, or state could be lifted in some other way,
    // however, this addresses preventing background scrolling in the most simple way possible.
    if (isOpen) {
      return document
        .querySelector('html')
        .setAttribute('style', 'overflow: hidden;')
    }

    return document
      .querySelector('html')
      .setAttribute('style', 'overflow: initial;')
  }, [isOpen])

  return (
    <div
      className={classNames(
        styles.Navigation,
        theme === 'light' && styles.LightTheme,
        theme === 'dark' && styles.DarkTheme,
        className
      )}
    >
      <FocusLock disabled={!isOpen}>
        <button
          className={classNames(styles.Button, isOpen ? styles.isOpen : '')}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          data-cy="navigation-button"
        >
          <ScreenReaderOnly>{isOpen ? 'Open' : 'Close'} Menu</ScreenReaderOnly>

          <div
            className={classNames(styles.Bar, styles.Bar1)}
            role="presentation"
          />

          <div
            className={classNames(styles.Bar, styles.Bar2)}
            role="presentation"
          />
        </button>

        <AnimatePresence>
          {isOpen ? (
            <motion.nav
              transition={{ type: 'spring' }}
              className={styles.Nav}
              initial={animationStates.closed}
              animate={animationStates.open}
              exit={animationStates.closed}
            >
              <PageLink className={styles.Link} href="/">
                Home
              </PageLink>

              <PageLink className={styles.Link} href="/archives">
                Archives
              </PageLink>

              <PageLink className={styles.Link} href="/about">
                About
              </PageLink>

              <PageLink className={styles.Link} href="/resume">
                Resume
              </PageLink>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </FocusLock>
    </div>
  )
}
