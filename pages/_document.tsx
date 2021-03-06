import createEmotionServer from '@emotion/server/create-instance'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { i18n } from '../i18n'
import createEmotionCache from 'enhancers/createEmotionCache'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000" />

          <link sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/icons/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap&text=INFRONTOFTHEWORLD"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage
  const initialProps = await Document.getInitialProps(ctx)

  // Create Emotion cache
  const direction = i18n?.availableLocales?.[ctx.locale]?.direction
  const cache = createEmotionCache(direction)

  // Extract styles from html
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)
  const chunks = extractCriticalToChunks(initialProps.html)
  const styles = constructStyleTagsFromChunks(chunks)

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App serverEmotionCache={cache} {...props} />
        },
    })

  return {
    ...initialProps,
    emotionStyleTags: styles,
  }
}

export default MyDocument
