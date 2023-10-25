import React from 'react'
import Image from 'next/legacy/image'
import classNames from 'classnames'
import Card from 'src/components/card'
import Heading from 'src/components/heading'
import LongForm from 'src/components/long-form'
import { ExternalLink } from 'src/components/links'
import styles from './bio.module.css'

export default function Bio({ className }) {
  return (
    <Card className={classNames(styles.Bio, className)}>
      <div className={styles.ImgContainer}>
        <Image
          className={styles.Img}
          src="/me.webp"
          alt="Nick Lemmon"
          layout="intrinsic"
          width={120}
          height={120}
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
