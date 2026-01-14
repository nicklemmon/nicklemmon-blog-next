import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  const defaultTitle = 'Nick Lemmon, Front End Engineering Leader'
  const defaultDescription =
    'A frontend engineering leader driven to create accessible user interfaces at scale.'
  const ogImageUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${encodeURIComponent(defaultTitle)}`

  return (
    <>
      <Head>
        <title>{defaultTitle}</title>

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={ogImageUrl} />

        {/* Standard meta */}
        <meta name="description" content={defaultDescription} />
      </Head>

      <Component {...pageProps} />

      <Analytics />
    </>
  )
}
