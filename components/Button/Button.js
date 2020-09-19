import React from 'react'
import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import classNames from 'classnames'
import styles from './Button.module.css'

export default function Button(props) {
  const {
    href,
    children,
    fullWidth,
    centered,
    className,
    prefixIcon,
    suffixIcon,
    variant,
  } = props

  return (
    <Link
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
      <>
        {prefixIcon && (
          <Icon className={styles.PrefixIcon} size="1rem" icon={prefixIcon} />
        )}

        {children}

        {suffixIcon && (
          <Icon className={styles.SuffixIcon} size="1rem" icon={suffixIcon} />
        )}
      </>
    </Link>
  )
}
