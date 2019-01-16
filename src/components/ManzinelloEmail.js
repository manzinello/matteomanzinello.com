import React, { Component } from "react";

class ManzinelloEmail extends Component {
  render = () => {
    return (
      <>
        <code className={"manzinello-email"}>
          <a href="mailto:matteo@manzinello.com">matteo@manzinello.com</a>
        </code>
      </>
    );
  };
}

export default ManzinelloEmail;
