import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Icon } from "antd";

import react from "./react.svg";

import "antd/dist/antd.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <p>
            matteo <strong>manzinello</strong>
            <br />
            <span style={{ fontSize: "0.7em", lineHeight: "0.7em" }}>
              26, a <em>computer engineer</em>, a <em>freelance developer</em>
            </span>
          </p>
          <p>
            <a
              className={"a-icon"}
              href="https://www.instagram.com/manzinello/"
            >
              <Icon type="instagram" theme="outlined" />
            </a>
            {"  "}
            <a className={"a-icon"} href="https://twitter.com/mmanzinello">
              <Icon type="twitter" theme="outlined" />
            </a>
            {"  "}
            <a className={"a-icon"} href="https://www.facebook.com/manzinello">
              <Icon type="facebook" theme="filled" />
            </a>
            {"  "}
            <a className={"a-icon"} href="https://github.com/manzinello">
              <Icon type="github" theme="filled" />
            </a>
            {"  "}
            <a className={"a-icon"} href="mailto:ciao@matteomanzinello.com">
              <Icon type="mail" theme="outlined" />
            </a>
          </p>
          <img src={react} className="App-logo" alt="logo" />
        </div>
      </>
    );
  }
}

export default App;
