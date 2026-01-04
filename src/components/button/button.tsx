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
        styles["button"],
        variant === 'primary' && styles["primary-variant"],
        variant === 'secondary' && styles["secondary-variant"],
        variant === 'tertiary' && styles["tertiary-variant"],
        variant === 'ghost' && styles["ghost-variant"],
        rounding === 'full' && styles["rounding-full"],
        rounding === 'md' && styles["rounding-md"],
        fullWidth && styles["full-width"],
        centered && styles["centered"],
        className
      )}
    >
      {children}
    </PageLink>
  )
}
