import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import ScreenReaderOnly from 'components/ScreenReaderOnly'
import './Navigation.css'

export default class Navigation extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      isOpen: false,
    }

    this.handleClick = this.handleClick.bind( this )
    this.handleStartKeypress = this.handleStartKeypress.bind( this )
    this.handleEndKeypress = this.handleEndKeypress.bind( this )

    this.firstFocusable = React.createRef()
    this.lastFocusable = React.createRef()
  }

  handleStartKeypress( e ) {
    if ( e.shiftKey && e.keyCode === 9 && this.state.isOpen ) {
      e.preventDefault()

      this.lastFocusable.focus()
    }
  }

  handleEndKeypress( e ) {
    if ( !e.shiftKey && e.keyCode === 9 ) {
      e.preventDefault()

      this.firstFocusable.current.focus()
    }
  }

  handleClick( e ) {
    e.preventDefault

    // DOM manipulation! 😭😭😭
    if ( this.state.isOpen === false ) {
      document.querySelector( 'html' ).setAttribute( 'style', 'overflow: hidden;' )
    } else {
      document.querySelector( 'html' ).setAttribute( 'style', 'overflow: initial;' )
    }

    this.setState( prevState => ( {
      isOpen: !prevState.isOpen,
    } ) )
  }

  render() {
    const { className } = this.props
    const { isOpen } = this.state

    return (
      <div className={classNames( 'Navigation', className )}>
        <button
          className={classNames( 'Navigation-button', isOpen ? 'is-open' : '' )}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={this.handleClick}
          onKeyDown={e => this.handleStartKeypress( e )}
          ref={this.firstFocusable}
          data-cy="navigation-button"
        >
          <ScreenReaderOnly>{isOpen ? 'Open' : 'Close'} Menu</ScreenReaderOnly>

          <div
            className="Navigation-bar Navigation-bar--1"
            role="presentation"
          />

          <div
            className="Navigation-bar Navigation-bar--2"
            role="presentation"
          />
        </button>

        <nav
          className={classNames(
            'Navigation-nav',
            isOpen ? 'is-open' : 'is-closed'
          )}
          id="nav-menu"
          data-cy="navigation-menu"
        >
          <Link
            className="Navigation-link"
            to="/"
            onClick={this.handleClick}
            data-cy="navigation-link"
          >
            Home
          </Link>

          <Link
            className="Navigation-link"
            to="/archives"
            onClick={this.handleClick}
            data-cy="navigation-link"
          >
            Archives
          </Link>

          <Link
            className="Navigation-link"
            to="/about"
            onClick={this.handleClick}
            onKeyDown={e => this.handleEndKeypress( e )}
            innerRef={el => {
              this.lastFocusable = el
            }}
            data-cy="navigation-link"
          >
            About
          </Link>

          {/* <Link
            className="Navigation-link"
            to="/resume"
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
