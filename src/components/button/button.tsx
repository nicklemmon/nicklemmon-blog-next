import React from 'react'
import { clsx } from 'clsx'
import { PageLink } from '../links'
import styles from './button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost'

type ButtonRounding = 'md' | 'full'

export default function Button({
  href,
  children,
  fullWidth,
  centered,
  className,
  rounding = 'md',
  variant,
}: {
  href: string
  children: React.ReactNode
  fullWidth?: boolean
  centered?: boolean
  className?: string
  rounding?: ButtonRounding
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
        rounding === 'full' && styles.RoundingFull,
        rounding === 'md' && styles.RoundingMd,
        fullWidth && styles.FullWidth,
        centered && styles.Centered,
        className
      )}
    >
      {children}
    </PageLink>
  )
}
