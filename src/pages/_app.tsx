import React, { useEffect } from "react";

import { AppProps } from "next/app";

import "../matteomanzinello.scss";

import mailgo, { MailgoConfig } from "mailgo";

const mailgoConfig: MailgoConfig = {
  dark: true,
};

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // console.log(mailgo);
    mailgo(mailgoConfig);
  }, []);
  return <Component {...pageProps} />;
}
