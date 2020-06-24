import React, { useEffect } from "react";

import Head from "next/head";

import { Avatar, Badge, Button, Tag, Typography } from "antd";

import { MessageOutlined, CodeOutlined } from "@ant-design/icons";

import Icons from "../components/Icons";

// import mailgo from "../../../mailgo";

const { Title, Text } = Typography;

// const mailgoConfig: MailgoConfig = {};

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
        <Title className="matteo-manzinello">matteo manzinello</Title>
        <Title level={2} className="manzinello-description">
          27, creative, engineer, developer
        </Title>
        <Text className={"manzinello-ing"} code>
          iscritto all'<strong>Ordine degli Ingegneri</strong>
        </Text>
        <Button
          type="primary"
          icon={<MessageOutlined />}
          href="mailto:matteo@manzinello.dev"
          target="_blank"
          shape="round"
        >
          {"matteo@manzinello.dev"}
        </Button>
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
        <Icons />
        <Badge
          status="processing"
          text={
            <>
              Monza e Brianza,{"  "}
              <img
                alt="Italia"
                className="italy"
                width="17"
                height="17"
                src="/images/italy.png"
              />
            </>
          }
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
