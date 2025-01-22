import React from 'react'
import classNames from 'classnames'
import { PageLink } from '../links'
import styles from './button.module.css'

export default function Button(props) {
  const { href, children, fullWidth, centered, className, variant } = props

  return (
    <PageLink
      href={href}
      className={classNames(
        styles.Button,
        variant === 'primary' && styles.PrimaryVariant,
        variant === 'secondary' && styles.SecondaryVariant,
        variant === 'tertiary' && styles.TertiaryVariant,
        variant === 'ghost' && styles.GhostVariant,
        fullWidth && styles.FullWidth,
        centered && styles.Centered,
        className
      )}
    >
      {children}
    </PageLink>
  )
}
