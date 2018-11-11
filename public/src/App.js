import React, { Component } from "react";

import ManzinelloIconLink from "./components/ManzinelloIconLink";

import react from "./react.svg";

import "antd/dist/antd.css";
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
    type: "facebook",
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
  },
  {
    key: "mail",
    type: "mail",
    theme: "outlined",
    text: "Send an email to Matteo Manzinello",
    link: "mailto:ciao@matteomanzinello.com",
    classes: ["a-icon-mail"],
    target: false
  }
];

class App extends Component {
  componentDidMount() {
    const w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName("body")[0];
  }

  handleOrientation = event => {
    var absolute = event.absolute;
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
  };

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
        />{" "}
      </>
    );
  };

  render() {
    return (
      <>
        <div className="App">
          <p>
            matteo <strong>manzinello</strong>
            <span className={"manzinello-description"}>
              26, a <em>computer engineer</em>, a{" "}
              <code>freelance developer</code>
            </span>
          </p>
          <p>{iconLinks.map(this.mapIconLink)}</p>
          <img src={react} className="App-logo" alt="logo" />
        </div>
      </>
    );
  }
}

export default App;
