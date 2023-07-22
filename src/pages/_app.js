import React from 'react'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import 'prism-theme-night-owl'
import 'src/styles/global.css'

function MyApp({ Component, pageProps }) {
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

export default MyApp
