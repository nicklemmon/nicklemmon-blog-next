import React from 'react'
import classNames from 'classnames'
import Card from 'src/components/Card'
import Heading from 'src/components/Heading'
import LongForm from 'src/components/LongForm'
import styles from './Bio.module.css'

export default function Bio({ className }) {
  return (
    <Card className={classNames(styles.Bio, className)}>
      <div className={styles.ImgContainer}>
        <img className={styles.Img} src="/me.png" alt="Nick Lemmon" />
      </div>

      <LongForm className={styles.Content}>
        <Heading as="h4">About Me</Heading>

        <p>
          I&rsquo;m a frontend developer in Columbia, Maryland who also happens
          to have an{' '}
          <a
            rel="noopener"
            href="https://en.wikipedia.org/wiki/Master_of_Social_Work"
          >
            MSW
          </a>
          . I&rsquo;m&nbsp;also a certified{' '}
          <a
            href="https://www.accessibilityassociation.org/wascertification"
            rel="noopener"
          >
            Web Accessibility Specialist
          </a>
          !
        </p>

        <p>
          I&rsquo;m driven to design and build accessible design systems with a
          great underlying developer experience in mind.
        </p>
      </LongForm>
    </Card>
  )
}
