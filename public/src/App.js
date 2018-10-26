import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Icon } from "antd";

import "antd/dist/antd.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <p>
              {"matteo manzinello"}
              <br />
              <span style={{ fontSize: "0.7em", lineHeight: "0.7em" }}>
                {"26, computer engineer, freelance developer"}
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
          </header>
        </div>
      </>
    );
  }
}

export default App;
