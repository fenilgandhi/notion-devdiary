import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <noscript>
            <h1 className="warning">Your javascript is disabled. Release the JavaScript Kraken! Let the fun commence</h1>
            <image href='/images/noscript.gif' />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
