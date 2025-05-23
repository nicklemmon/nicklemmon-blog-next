import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FocusLock from 'react-focus-lock'
import { clsx } from 'clsx'
import { PageLink } from '../links'
import ScreenReaderOnly from '../screen-reader-only'
import { useKeyPress } from '../../hooks'
import styles from './navigation.module.css'

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

export default function Navigation({
  className,
  theme,
}: {
  className?: string
  theme?: 'light' | 'dark'
}) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // DOM manipulation! 😭😭😭
    // This could be refactored to use context, or state could be lifted in some other way,
    // however, this addresses preventing background scrolling in the most simple way possible.
    // UPDATE: We may be able to just swap this out for the <dialog /> element but not sure just yet
    // See: https://cassidoo.co/post/css-for-dialogs/
    if (isOpen) {
      return document
        ?.querySelector('html')
        ?.setAttribute('style', 'overflow: hidden;')
    }

    return document
      ?.querySelector('html')
      ?.setAttribute('style', 'overflow: initial;')
  }, [isOpen])

  return (
    <div
      className={clsx(
        styles.Navigation,
        theme === 'light' && styles.LightTheme,
        theme === 'dark' && styles.DarkTheme,
        className
      )}
    >
      <FocusLock disabled={!isOpen}>
        <button
          className={clsx(styles.Button, isOpen ? styles.isOpen : '')}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          data-cy="navigation-button"
        >
          <ScreenReaderOnly>{isOpen ? 'Close' : 'Open'} Menu</ScreenReaderOnly>

          <div className={clsx(styles.Bar, styles.Bar1)} role="presentation" />

          <div className={clsx(styles.Bar, styles.Bar2)} role="presentation" />
        </button>

        <AnimatePresence>
          {isOpen ? <NavList handleClose={() => setIsOpen(false)} /> : null}
        </AnimatePresence>
      </FocusLock>
    </div>
  )
}

function NavList({ handleClose }: { handleClose: () => void }) {
  const escapeKeyPressed = useKeyPress('Escape')

  useEffect(() => {
    if (escapeKeyPressed) {
      return handleClose()
    }
  }, [escapeKeyPressed])

  return (
    <motion.nav
      transition={{ type: 'spring' }}
      className={styles.Nav}
      initial={animationStates.closed}
      animate={animationStates.open}
      exit={animationStates.closed}
    >
      <PageLink className={styles.Link} href="/" onClick={handleClose}>
        Home
      </PageLink>

      <PageLink className={styles.Link} href="/archives" onClick={handleClose}>
        Archives
      </PageLink>

      <PageLink className={styles.Link} href="/about" onClick={handleClose}>
        About
      </PageLink>
    </motion.nav>
  )
}
