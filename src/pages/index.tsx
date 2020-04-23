import React from "react";

import Head from "next/head";

import { Avatar, Badge, Button, Tag } from "antd";

import { MessageOutlined, CodeOutlined } from "@ant-design/icons";

import Icons from "../components/Icons";

// my project
// import "mailgo";
// working on mailgo for nextjs...

// also this one, but it is not good as mailgo
// import "@fab-ulous/github";
// working on fab-ulous for nextjs...

const Index = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Matteo Manzinello</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-T2H8JL3");`,
          }}
        ></script>
        <meta
          name="description"
          content="27, a creative, a computer engineer, a freelance developer"
        />
      </Head>
      <div className="manzinello-app">
        <Avatar
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
