import React from "react";

import { Button } from "antd";

import {
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FacebookFilled,
} from "@ant-design/icons";

const Icons = () => {
  return (
    <div className={"manzinello-icons"}>
      <Button
        href={"https://www.instagram.com/manzinello/"}
        className="instagram"
        target="_blank"
        rel="noopener noreferrer"
        shape="circle"
        icon={<InstagramOutlined />}
      />
      <Button
        href={"https://twitter.com/mmanzinello"}
        target="_blank"
        className="twitter"
        rel="noopener noreferrer"
        shape="circle"
        icon={<TwitterOutlined />}
      />
      <Button
        href={"https://www.facebook.com/manzinello"}
        target="_blank"
        className="facebook"
        rel="noopener noreferrer"
        shape="circle"
        icon={<FacebookFilled />}
      />
      <Button
        href={"https://github.com/manzinello"}
        target="_blank"
        className="github"
        rel="noopener noreferrer"
        shape="circle"
        icon={<GithubOutlined />}
      />
    </div>
  );
};

export default Icons;
