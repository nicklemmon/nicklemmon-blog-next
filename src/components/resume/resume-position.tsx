import React from 'react'
import Heading from '../heading'
import Subdued from '../subdued'
import LongForm from '../long-form'
import ScreenReaderOnly from '../screen-reader-only'
import styles from './resume.module.css'

export default function ResumePosition({
  heading,
  subheading,
  children,
  startDate,
  endDate,
}: {
  heading: string
  subheading: string
  children?: React.ReactNode
  startDate: string
  endDate: string
}) {
  return (
    <div className={styles.Position}>
      <div className={styles.PositionFirstHalf}>
        <div className={styles.PositionHeadingWrapper}>
          <div className={styles.PositionSuperheadingWrapper}>
            <Heading as="h4" className={styles.PositionSuperheading}>
              {subheading}
            </Heading>

            <span
              role="presentation"
              className={styles.PositionSuberHeadingShadow}
            ></span>
          </div>

          <Heading as="h5" className={styles.PositionHeading}>
            {heading}
          </Heading>
        </div>

        <Subdued className={styles.DateRange}>
          <span className={styles.Date}>{startDate}&nbsp;</span>

          <span>&mdash;</span>

          <ScreenReaderOnly>through</ScreenReaderOnly>

          <span className={styles.Date}>&nbsp;{endDate}</span>
        </Subdued>
      </div>

      <div className={styles.PositionSecondHalf}>
        <LongForm>{children}</LongForm>
      </div>
    </div>
  )
}
