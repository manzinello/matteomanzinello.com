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
            dangerouslySetInnerHTML={{
              __html: `(function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-T2H8JL3");`,
            }}
          ></script>
          <meta
            name="description"
            content="27, creative, engineer, developer"
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
