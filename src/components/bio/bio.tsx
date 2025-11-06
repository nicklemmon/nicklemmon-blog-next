import Image from 'next/image'
import { clsx } from 'clsx'
import Card from '../card'
import Heading from '../heading'
import LongForm from '../long-form'
import { ExternalLink } from '../links'
import styles from './bio.module.css'

export default function Bio({ className }: { className?: string }) {
  return (
    <Card className={clsx(styles.Bio, className)}>
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
          I&rsquo;m a frontend engineering manager working for{' '}
          <ExternalLink href="https://truist.com">
            Truist Financial
          </ExternalLink>{' '}
          currently based in in Cary, North Carolina.
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
