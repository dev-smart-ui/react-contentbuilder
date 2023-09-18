import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <meta name="viewport" content="user-scalable=no, width=device-width, maximum-scale=1, minimum-scale=1" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
