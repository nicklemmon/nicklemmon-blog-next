import React from 'react'
import { clsx } from 'clsx'
import styles from './container.module.css'

type ContainerSize = 'lg' | 'xl' | '2xl'

export default function Container({
  size,
  children,
  className,
}: {
  size: ContainerSize
  children: React.ReactNode
  className?: string
}) {
  const getSizeClassName = (size: ContainerSize) => {
    switch (size) {
      case 'lg': {
        return styles.Large
      }
      case 'xl': {
        return styles.ExtraLarge
      }
      case '2xl': {
        return styles.ExtraExtraLarge
      }
      default: {
        return undefined
      }
    }
  }

  return (
    <div className={clsx(styles.Container, getSizeClassName(size), className)}>
      {children}
    </div>
  )
}
