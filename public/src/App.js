import React, { Component } from "react";

import ManzinelloIconLink from "./components/ManzinelloIconLink";

import react from "./react.svg";

import "antd/dist/antd.css";
import "./App.css";

const iconLinks = [
  {
    type: "instagram",
    theme: "outlined",
    text: "Follow @manzinello on Instagram",
    link: "https://www.instagram.com/manzinello/"
  },
  {
    type: "twitter",
    theme: "outlined",
    text: "Follow @mmanzinello on Twitter",
    link: "https://twitter.com/mmanzinello"
  },
  {
    type: "facebook",
    theme: "filled",
    text: "Follow @manzinello on Facebook",
    link: "https://www.facebook.com/manzinello"
  },
  {
    type: "github",
    theme: "filled",
    text: "@manzinello on GitHub",
    link: "https://github.com/manzinello"
  },
  {
    type: "mail",
    theme: "outlined",
    text: "Send an email to Matteo Manzinello",
    link: "mailto:ciao@matteomanzinello.com"
  }
];

class App extends Component {
  mapIconLink = iconLink => {
    return (
      <>
        <ManzinelloIconLink
          type={iconLink.type}
          theme={iconLink.theme}
          text={iconLink.text}
          link={iconLink.link}
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
