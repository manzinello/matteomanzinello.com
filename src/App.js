import React, { Component } from "react";

import ManzinelloIconLink from "./components/ManzinelloIconLink";

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
  /*
  {
    key: "mail",
    type: "envelope",
    theme: "outlined",
    text: "Send an email to Matteo Manzinello",
    link: "mailto:ciao@matteomanzinello.com",
    classes: ["a-icon-mail"],
    target: false
  }
  */
];

class App extends Component {
  mapIconLink = (iconLink, i) => {
    return (
      <>
        <ManzinelloIconLink
          key={iconLink.key}
          type={iconLink.type}
          theme={iconLink.theme}
          text={iconLink.text}
          link={iconLink.link}
          target={iconLink.target}
          classes={iconLink.classes}
        />
      </>
    );
  };

  render() {
    return (
      <>
        <div className="App">
          <p>
            matteo <strong>manzinello</strong>
          </p>
          <div className={"manzinello-description"}>
            26, a <em>computer engineer</em>, a <em>freelance developer</em>
            <code className={"manzinello-email"}>~ matteo@manzinello.com</code>
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
