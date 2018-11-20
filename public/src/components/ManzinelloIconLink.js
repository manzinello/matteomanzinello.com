import React, { Component } from "react";
import PropTypes from "prop-types";

import { Icon } from "rsuite";

class ManzinelloIconLink extends Component {
  render = () => {
    return (
      <>
        {!this.props.target ? (
          <a
            className={["a-icon", this.props.classes].join(" ")}
            title={this.props.text}
            href={this.props.link}
          >
            <Icon icon={this.props.type} size={"2x"} theme={this.props.theme} />
          </a>
        ) : (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={["a-icon", this.props.classes].join(" ")}
            title={this.props.text}
            href={this.props.link}
          >
            <Icon icon={this.props.type} size={"2x"} theme={this.props.theme} />
          </a>
        )}
      </>
    );
  };
}

ManzinelloIconLink.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  target: PropTypes.bool
};

ManzinelloIconLink.defaultProps = {
  target: true
};

export default ManzinelloIconLink;
