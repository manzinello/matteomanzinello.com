import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { Avatar, Badge, Button, Icon, Tag } from "antd";

import ClipboardJS from "clipboard";

import ManzinelloIconLink from "./components/ManzinelloIconLink";

import matteo from "./assets/images/matteomanzinello.jpg";

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

  copyPartitaIva = () => {
    new ClipboardJS("#partita-iva");
  };

  render() {
    return (
      <>
        <Router>
          <div className="manzinello-app">
            <Avatar size={150} src={matteo} className="manzinello-avatar" />
            <p className="manzinello-matteo">
              matteo <strong>manzinello</strong>
            </p>
            <p className={"manzinello-description"}>
              27, a <em>creative</em>, a <em>computer engineer</em>, a{" "}
              <em>freelance developer</em>
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
              {socialLinks.map(this.mapSocialLink)}
            </div>
            <Button
              href="https://manzinello.dev"
              type="link"
              target="_blank"
              shape="round"
              size="small"
              icon="code"
              ghost
            >
              <code>{" manzinello.dev"}</code>
            </Button>
            <Badge
              status="processing"
              text="Monza e Brianza, Italia"
              className="manzinello-place-badge"
            />
            <div className={"manzinello-piva"}>
              <Tag color="#424855">P.IVA 10310610968</Tag>
              {false && (
                <a
                  onClick={this.copyPartitaIva}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={"a-icon"}
                  title={"Copia Partita IVA"}
                  href={"#copy-partita-iva"}
                >
                  <Icon type={"copy"} size={"2x"} />
                </a>
              )}
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
