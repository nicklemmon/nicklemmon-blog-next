import React from 'react'
import Head from 'next/head'
import 'styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nick Lemmon's Blog</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
