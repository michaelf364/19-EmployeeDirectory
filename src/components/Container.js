import React from "react";

function Container(props) {
  // eslint-disable-next-line react/prop-types
  return <div className="container">{props.children}</div>;
}

export default Container;
