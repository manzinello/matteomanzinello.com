import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { Button } from "antd";

import ManzinelloIconLink from "./components/ManzinelloIconLink";

import socialLinks from "./data/social-links.json";

import "mailgo";

import "./App.css";

class App extends Component {
  mapSocialLink = (iconLink, i) => {
    let { key, type, theme, text, link, target, classes } = iconLink;

    return (
      <ManzinelloIconLink
        key={key}
        type={type}
        theme={theme}
        text={text}
        link={link}
        target={target}
        classes={classes}
      />
    );
  };

  render() {
    return (
      <>
        <Router>
          <div className="manzinello-app">
            <p className="manzinello-matteo">
              matteo <strong>manzinello</strong>
            </p>
            <p className={"manzinello-description"}>
              26, a <em>computer engineer</em>, a <em>freelance developer</em>
            </p>
            <div className={"manzinello-icons"}>
              <p>{socialLinks.map(this.mapSocialLink)}</p>
            </div>
            <Button
              type="primary"
              icon="message"
              href="mailto:matteo@manzinello.dev"
              target="_blank"
              shape="round"
            >
              matteo@manzinello.dev
            </Button>
            <br />
            <Button
              href="https://manzinello.dev"
              type="dashed"
              target="_blank"
              shape="round"
              size="small"
              ghost
            >
              manzinello.dev
            </Button>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
