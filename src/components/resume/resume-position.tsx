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
    <div className={styles["position"]}>
      <div className={styles["position-first-half"]}>
        <div className={styles["position-heading-wrapper"]}>
          <div className={styles["position-superheading-wrapper"]}>
            <Heading as="h4" className={styles["position-superheading"]}>
              {subheading}
            </Heading>

            <span
              role="presentation"
              className={styles["position-suber-heading-shadow"]}
            ></span>
          </div>

          <Heading as="h5" className={styles["position-heading"]}>
            {heading}
          </Heading>
        </div>

        <Subdued className={styles["date-range"]}>
          <span className={styles["date"]}>{startDate}&nbsp;</span>

          <span>&mdash;</span>

          <ScreenReaderOnly>through</ScreenReaderOnly>

          <span className={styles["date"]}>&nbsp;{endDate}</span>
        </Subdued>
      </div>

      <div className={styles["position-second-half"]}>
        <LongForm>{children}</LongForm>
      </div>
    </div>
  )
}
