import React from 'react'
import { clsx } from 'clsx'
import { PageLink } from '../links'
import styles from './button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost'

export default function Button({
  href,
  children,
  fullWidth,
  centered,
  className,
  variant,
}: {
  href: string
  children: React.ReactNode
  fullWidth?: boolean
  centered?: boolean
  className?: string
  variant: ButtonVariant
}) {
  return (
    <PageLink
      href={href}
      className={clsx(
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
