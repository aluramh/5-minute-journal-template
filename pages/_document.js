import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en'>
        <Head>
          {/* <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script> */}
        </Head>
        <body className='bg-red-50'>
          <Main />
          <NextScript />
          {/* <script src='https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js'></script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
