import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import Card from 'src/components/Card'
import Heading from 'src/components/Heading'
import LongForm from 'src/components/LongForm'
import { ExternalLink } from 'src/components/links'
import styles from './Bio.module.css'

export default function Bio({ className }) {
  return (
    <Card className={classNames(styles.Bio, className)}>
      <div className={styles.ImgContainer}>
        <Image
          className={styles.Img}
          src="/me.png"
          alt="Nick Lemmon"
          width="100%"
          height="100%"
        />
      </div>

      <LongForm className={styles.Content}>
        <Heading as="h4">About Me</Heading>

        <p>
          I&rsquo;m a Senior Principal Frontend Engineer working for{' '}
          <ExternalLink href="https://truist.com">
            Truist Financial
          </ExternalLink>{' '}
          in Columbia, Maryland who also happens to have an&nbsp;
          <ExternalLink href="https://en.wikipedia.org/wiki/Master_of_Social_Work">
            MSW
          </ExternalLink>
          !
        </p>

        <p>
          I&rsquo;m driven to design and build accessible design systems and web
          applications with a great underlying developer experience in mind.
        </p>
      </LongForm>
    </Card>
  )
}
