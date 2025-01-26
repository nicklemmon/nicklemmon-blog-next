import React from 'react'

function ExternalLink({
  href,
  children,
}: {
  href: string
  children?: React.ReactNode
}) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      title="Opens in a new tab"
      href={href}
    >
      {children}
    </a>
  )
}

export default ExternalLink
