import React, { Component } from "react";

import { Icon } from "rsuite";

class ManzinelloEmail extends Component {
  render = () => {
    return (
      <>
        <code className={"manzinello-email"}>
          <Icon icon={"send"} />{" "}
          <a href="mailto:matteo@manzinello.com">matteo@manzinello.com</a>
        </code>
      </>
    );
  };
}

export default ManzinelloEmail;
