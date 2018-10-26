import React, { Component } from "react";

import { Icon } from "antd";

class ManzinelloIconLink extends Component {
  render = () => {
    return (
      <>
        <a className={"a-icon"} title={this.props.text} href={this.props.link}>
          <Icon type={this.props.type} theme={this.props.theme} />
        </a>
      </>
    );
  };
}

export default ManzinelloIconLink;
