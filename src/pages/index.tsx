import React, { useEffect } from "react";

import Head from "next/head";

import { Avatar, Badge, Button, Tag } from "antd";

import { MessageOutlined, CodeOutlined } from "@ant-design/icons";

import Icons from "../components/Icons";

// import mailgo from "../../../mailgo/dist/mailgo.min.js";

// my project
// import "mailgo";
// working on mailgo for nextjs...

// also this one, but it is not good as mailgo
// import "@fab-ulous/github";
// working on fab-ulous for nextjs...

const Index = () => {
  useEffect(() => {
    // mailgo();
  }, []);

  return (
    <>
      <Head>
        <title>Matteo Manzinello</title>
      </Head>
      <div className="manzinello-app">
        <Avatar
          alt="Matteo Manzinello"
          size={150}
          src={"/images/matteomanzinello.jpg"}
          className="manzinello-avatar"
        />
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
      {false && (
        <a
          id="github-fabulous"
          className="teal"
          href="https://github.com/manzinello/fab-ulous"
          target="_blank"
          rel="noopener noreferrer"
        >
          fab-ulous
        </a>
      )}
    </>
  );
};

export default Index;
