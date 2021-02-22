import "react-app-polyfill/ie11";

import React from "react";

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="it">
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="/images/matteomanzinello-favicon.png"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `var _iub = _iub || [];
              _iub.csConfiguration = {"consentOnContinuedBrowsing":false,"whitelabel":false,"lang":"it","siteId":2057074,"cookiePolicyId":29552893, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"position":"float-bottom-right" }};`,
            }}
          ></script>
          <script
            type="text/javascript"
            src="//cdn.iubenda.com/cs/iubenda_cs.js"
            charSet="UTF-8"
            async
          ></script>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-HW0EYFMV4B"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-HW0EYFMV4B');
                `,
            }}
          ></script>
          <meta
            name="description"
            content="28, creative, engineer, developer"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
