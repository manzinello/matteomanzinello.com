import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import * as Sentry from "@sentry/browser";

import * as serviceWorker from "./serviceWorker";

Sentry.init({
  dsn: "https://103776ba2b304221bd538a9e88b95b9e@sentry.io/1541174"
});

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
