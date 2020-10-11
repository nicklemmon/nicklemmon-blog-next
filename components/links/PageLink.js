import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import styles from './PageLink.module.css'

export default function PageLink(props) {
  const { onClick, onKeyDown, children, href, className } = props

  return (
    <Link href={href} passHref onKeyDown={onKeyDown}>
      <a
        className={classNames(styles.PageLink, className)}
        data-id={props['data-id']}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  )
}
