import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ANALYTICS_TRACKING_ID } from 'config'

const ANALYTICS_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${ANALYTICS_TRACKING_ID}');
`

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_TRACKING_ID}`}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: ANALYTICS_SCRIPT,
          }}
        />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
