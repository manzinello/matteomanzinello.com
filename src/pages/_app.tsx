import React from "react";

import { AppProps } from "next/app";

import "../matteomanzinello.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}