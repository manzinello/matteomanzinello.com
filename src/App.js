import React, { Component } from "react";

import ManzinelloIconLink from "./components/ManzinelloIconLink";
import ManzinelloEmail from "./components/ManzinelloEmail";

import react from "./react.svg";

import "rsuite/dist/styles/rsuite.min.css";
import "./App.css";

const iconLinks = [
  {
    key: "instagram",
    type: "instagram",
    theme: "outlined",
    text: "Follow @manzinello on Instagram",
    link: "https://www.instagram.com/manzinello/",
    classes: ["a-icon-instagram"],
    target: true
  },
  {
    key: "twitter",
    type: "twitter",
    theme: "outlined",
    text: "Follow @mmanzinello on Twitter",
    link: "https://twitter.com/mmanzinello",
    classes: ["a-icon-twitter"],
    target: true
  },
  {
    key: "facebook",
    type: "facebook-official",
    theme: "filled",
    text: "Follow @manzinello on Facebook",
    link: "https://www.facebook.com/manzinello",
    classes: ["a-icon-facebook"],
    target: true
  },
  {
    key: "github",
    type: "github",
    theme: "filled",
    text: "@manzinello on GitHub",
    link: "https://github.com/manzinello",
    classes: ["a-icon-github"],
    target: true
  }
];

class App extends Component {
  mapIconLink = (iconLink, i) => {
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
        <div className="manzinello-app">
          <p>
            matteo <strong>manzinello</strong>
          </p>
          <div className={"manzinello-description"}>
            26, a <em>computer engineer</em>, a <em>freelance developer</em>
            <ManzinelloEmail />
          </div>
          <div className={"manzinello-icons"}>
            <p>{iconLinks.map(this.mapIconLink)}</p>
          </div>
          <img src={react} className="App-logo" alt="logo" />
        </div>
      </>
    );
  }
}

export default App;
