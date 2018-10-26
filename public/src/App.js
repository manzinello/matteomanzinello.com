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
            <Icon type="instagram" theme="outlined" />
            {"  "}
            <Icon type="twitter" theme="outlined" />
            {"  "}
            <Icon type="facebook" theme="filled" />
            {"  "}
            <Icon type="github" theme="filled" />
            {"  "}
            <Icon type="mail" theme="outlined" />
          </p>
          <img src={react} className="App-logo" alt="logo" />
        </div>
      </>
    );
  }
}

export default App;
