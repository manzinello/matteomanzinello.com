import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import ManzinelloIconLink from "./components/ManzinelloIconLink";
import ManzinelloEmail from "./components/ManzinelloEmail";

import react from "./react.svg";
import socialLinks from "./data/social-links.json";

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
              <ManzinelloEmail />
            </p>
            <div className={"manzinello-icons"}>
              <p>{socialLinks.map(this.mapSocialLink)}</p>
            </div>
            <img src={react} className="App-logo" alt="logo" />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
