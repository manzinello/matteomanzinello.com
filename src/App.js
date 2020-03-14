import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { Avatar, Badge, Button, Tag } from "antd";

import { MessageOutlined, CopyOutlined, CodeOutlined } from "@ant-design/icons";

import ClipboardJS from "clipboard";

import ManzinelloIconLink from "./components/ManzinelloIconLink";

import matteo from "./assets/images/matteomanzinello.jpg";

import socialLinks from "./data/social-links.json";

// my project
import "mailgo";

// also this one
import "@fab-ulous/github";

import "./App.scss";

class App extends Component {
  intervalID = 0;

  state = {
    color: null
  };

  constructor(props) {
    super(props);
    this.state = {
      color: this.randomColor(false)
    };
  }

  componentDidMount = () => {
    this.intervalID = setInterval(() => {
      this.randomColor();
    }, 2222);
  };

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

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

  randomColor = (updateState = true) => {
    let colors = [
      "red",
      "orange",
      "green",
      "teal",
      "blue",
      "indigo",
      "purple",
      "pink",
      "gray",
      ""
    ];
    let color = colors[Math.floor(Math.random() * colors.length)];
    if (updateState) {
      this.setState({ color });
    }
    return color;
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
              icon={<MessageOutlined />}
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
              className="manzinello-dev"
              icon={<CodeOutlined />}
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
                  <CopyOutlined size={"2x"} />
                </a>
              )}
            </div>
          </div>
        </Router>
        <a
          id="github-fabulous"
          className={this.state.color}
          href="https://github.com/manzinello/fab-ulous"
          target="_blank"
          rel="noopener noreferrer"
        >
          fab-ulous
        </a>
      </>
    );
  }
}

export default App;
