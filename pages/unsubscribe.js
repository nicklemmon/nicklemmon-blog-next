import React from 'react'
import Head from 'next/head'
import Heading from 'components/Heading'
import styles from './unsubscribe.module.css'

export default function UnsubscribePage() {
  return (
    <div>
      <Head>
        <title>Unsubscribed Successfully</title>
      </Head>

      <div className={styles.Container}>
        <Heading as="h1">Unsubscribed Successfully</Heading>

        <p className={styles.Description}>
          You have successfully unsubscribed from the mailing list. Sorry to see
          you go!
        </p>
      </div>
    </div>
  )
}
