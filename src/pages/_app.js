import "react-app-polyfill/ie11";

import React from "react";

import "../index.scss";
import "../App.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
