import React from "react";
import PropTypes from "prop-types";

import { Icon } from "@ant-design/compatible";

const ManzinelloIconLink = (props) => {
  return (
    <>
      {!props.target ? (
        <a
          className={["a-icon", props.classes].join(" ")}
          title={props.text}
          href={props.link}
        >
          <Icon type={props.type} size={"2x"} theme={props.theme} />
        </a>
      ) : (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={["a-icon", props.classes].join(" ")}
          title={props.text}
          href={props.link}
        >
          <Icon type={props.type} size={"2x"} theme={props.theme} />
        </a>
      )}
    </>
  );
};

ManzinelloIconLink.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  target: PropTypes.bool,
};

ManzinelloIconLink.defaultProps = {
  target: true,
};

export default ManzinelloIconLink;
