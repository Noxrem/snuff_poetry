import { Html, Head, Main, NextScript } from 'next/document'
import Layout from '../src/layouts/Layout'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Layout>
          <Main />
        </Layout>
        <NextScript />
      </body>
    </Html>
  )
}