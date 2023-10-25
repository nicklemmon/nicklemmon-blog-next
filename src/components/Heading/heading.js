import React from 'react'

export default function Heading({ as, looksLike, children, className }) {
  const Component = looksLike ? looksLike : as
  const ariaLevel = as.replace(/\D/g, '')

  return (
    <Component role="heading" aria-level={ariaLevel} className={className}>
      {children}
    </Component>
  )
}
