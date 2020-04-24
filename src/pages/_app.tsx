import "react-app-polyfill/ie11";

import React from "react";

import { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../components/Layout";

import "../App.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
