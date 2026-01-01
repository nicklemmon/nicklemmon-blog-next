import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nick Lemmon, Front End Developer</title>
      </Head>

      <Component {...pageProps} />

      <Analytics />
    </>
  )
}
