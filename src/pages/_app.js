import "react-app-polyfill/ie11";

import React from "react";

import Layout from "../components/Layout";

import "../App.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
