import "react-app-polyfill/ie11";

import React from "react";

import Head from "next/head";

import Layout from "../components/Layout";

import "../App.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Matteo Manzinello</title>
        <link
          rel="icon"
          type="image/png"
          href="/images/matteomanzinello-favicon.png"
        />
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
          content="27, a creative, a computer engineer, a freelance developer"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
