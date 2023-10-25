import React from 'react'
import { PageLink } from 'src/components/links'
import { Icon } from 'react-icons-kit'
import classNames from 'classnames'
import styles from './button.module.css'

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
      <>
        {prefixIcon && (
          <Icon className={styles.PrefixIcon} size="1rem" icon={prefixIcon} />
        )}

        {children}

        {suffixIcon && (
          <Icon className={styles.SuffixIcon} size="1rem" icon={suffixIcon} />
        )}
      </>
    </PageLink>
  )
}
