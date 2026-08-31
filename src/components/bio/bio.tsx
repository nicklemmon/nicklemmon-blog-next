import Image from 'next/image'
import { clsx } from 'clsx'
import Card from '../card/card'
import Heading from '../heading/heading'
import LongForm from '../long-form/long-form'
import ExternalLink from '../links/external-link'
import styles from './bio.module.css'

export default function Bio({ className }: { className?: string }) {
  return (
    <Card className={clsx(styles["bio"], className)}>
      <div className={styles["img-container"]}>
        <Image
          className={styles["img"]}
          src="/me.webp"
          alt="Nick Lemmon"
          layout="intrinsic"
          width={120}
          height={120}
        />
      </div>

      <LongForm className={styles["content"]}>
        <Heading as="h4">About Me</Heading>

        <p>
          I&rsquo;m a Principal Software Engineer working for{' '}
          <ExternalLink href="https://redhat.com">Red Hat</ExternalLink>{' '}
          currently based in Cary, North Carolina.
        </p>

        <p>
          I&rsquo;m driven to spearhead, design, and build accessible design
          systems and web applications with a great underlying developer
          experience in mind.
        </p>
      </LongForm>
    </Card>
  )
}
