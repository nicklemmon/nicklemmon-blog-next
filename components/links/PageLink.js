import React from 'react'
import Link from 'next/link'

export default function PageLink(props) {
  const { onClick, onKeyDown, children, href, className } = props

  return (
    <Link href={href} passHref onKeyDown={onKeyDown} onClick={onClick}>
      <a className={className} data-id={props['data-id']}>
        {children}
      </a>
    </Link>
  )
}
