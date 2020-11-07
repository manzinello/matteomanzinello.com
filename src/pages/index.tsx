import React from "react";

import Head from "next/head";

import { Avatar, Badge, Button, Tag, Typography } from "antd";

import { MessageOutlined, CodeOutlined } from "@ant-design/icons";

import Icons from "../components/Icons";

const { Title, Text } = Typography;

const Index = () => {
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
          28, creative, engineer, developer
        </Title>
        <Text className={"manzinello-ing"} code>
          iscritto all'<strong>Ordine degli Ingegneri</strong>
        </Text>
        <Button
          type="primary"
          // size="small"
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
        <div className="privacy">
          <a
            target="_blank"
            href="https://www.iubenda.com/privacy-policy/29552893"
            title="Privacy Policy"
            style={{ marginRight: 10 }}
          >
            Privacy Policy
          </a>
          <a
            target="_blank"
            href="https://www.iubenda.com/privacy-policy/29552893/cookie-policy"
            title="Cookie Policy "
          >
            Cookie Policy
          </a>
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
