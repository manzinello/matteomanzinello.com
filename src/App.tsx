import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { Avatar, Badge, Button, Tag } from "antd";

import { MessageOutlined, CodeOutlined } from "@ant-design/icons";

import Icons from "./components/Icons";

import matteo from "./assets/images/matteomanzinello.jpg";

// my project
import "mailgo";

// also this one, but it is not good as mailgo
import "@fab-ulous/github";

import "./App.scss";

const App = () => {
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

          <Icons />

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
          </div>
        </div>
      </Router>
      <a
        id="github-fabulous"
        className="teal"
        href="https://github.com/manzinello/fab-ulous"
        target="_blank"
        rel="noopener noreferrer"
      >
        fab-ulous
      </a>
    </>
  );
};

export default App;
