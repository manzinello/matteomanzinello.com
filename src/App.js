import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Button } from "antd";

import ManzinelloIconLink from "./components/ManzinelloIconLink";
import ManzinelloRef from "./components/ManzinelloRef";

import socialLinks from "./data/social-links.json";

import "mailgo";

import "./App.scss";

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
            <Button
              type="primary"
              icon="message"
              href="mailto:matteo@manzinello.dev"
              target="_blank"
              shape="round"
            >
              {"matteo@manzinello.dev"}
            </Button>
            <div className={"manzinello-icons"}>
              <p>{socialLinks.map(this.mapSocialLink)}</p>
            </div>
            <Button
              href="https://manzinello.dev"
              type="link"
              target="_blank"
              shape="round"
              size="small"
              icon="project"
              ghost
            >
              {"manzinello.dev"}
            </Button>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
