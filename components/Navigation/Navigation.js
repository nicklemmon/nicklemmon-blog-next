import React from 'react'
import { PageLink } from 'components/links'
import classNames from 'classnames'
import ScreenReaderOnly from 'components/ScreenReaderOnly'
import styles from './Navigation.module.css'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleStartKeypress = this.handleStartKeypress.bind(this)
    this.handleEndKeypress = this.handleEndKeypress.bind(this)

    this.firstFocusable = React.createRef()
    this.lastFocusable = React.createRef()
  }

  handleStartKeypress(e) {
    if (e.shiftKey && e.keyCode === 9 && this.state.isOpen) {
      e.preventDefault()

      this.lastFocusable.focus()
    }
  }

  handleEndKeypress(e) {
    if (!e.shiftKey && e.keyCode === 9) {
      e.preventDefault()

      this.firstFocusable.current.focus()
    }
  }

  handleClick(e) {
    e.preventDefault

    // DOM manipulation! 😭😭😭
    if (this.state.isOpen === false) {
      document.querySelector('html').setAttribute('style', 'overflow: hidden;')
    } else {
      document.querySelector('html').setAttribute('style', 'overflow: initial;')
    }

    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const { className } = this.props
    const { isOpen } = this.state

    return (
      <div className={classNames(styles.Navigation, className)}>
        <button
          className={classNames(styles.Button, isOpen ? 'is-open' : '')}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={this.handleClick}
          onKeyDown={(e) => this.handleStartKeypress(e)}
          ref={this.firstFocusable}
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

        <nav
          className={classNames(
            styles.Nav,
            isOpen ? styles.isOpen : styles.isClosed
          )}
          id="nav-menu"
          data-cy="navigation-menu"
        >
          <PageLink className={styles.Link} href="/" onClick={this.handleClick}>
            Home
          </PageLink>

          <PageLink
            className={styles.Link}
            href="/archives"
            onClick={this.handleClick}
          >
            Archives
          </PageLink>

          <PageLink
            className={styles.Link}
            href="/about"
            onClick={this.handleClick}
            onKeyDown={(e) => this.handleEndKeypress(e)}
            innerRef={(el) => {
              this.lastFocusable = el
            }}
          >
            About
          </PageLink>

          {/* <PageLink
            className={styles.Link}
            href="/resume"
            onClick={this.handleClick}
            onKeyDown={e => this.handleEndKeypress( e )}
            innerRef={el => {
              this.lastFocusable = el
            }}
            data-cy="navigation-link"
          >
            Resume
          </Link> */}
        </nav>
      </div>
    )
  }
}
