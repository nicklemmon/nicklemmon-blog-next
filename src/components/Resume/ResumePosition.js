import React from 'react'
import Heading from 'src/components/Heading'
import Subdued from 'src/components/Subdued'
import LongForm from 'src/components/LongForm'
import ScreenReaderOnly from 'src/components/ScreenReaderOnly'
import styles from './Resume.module.css'

export default function ResumePosition(props) {
  const { heading, subheading, children, startDate, endDate } = props

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
