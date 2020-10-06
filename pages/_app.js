import React from 'react'
import Head from 'next/head'
import 'prism-theme-night-owl'
import 'styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nick Lemmon&rsquo;s Blog</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
