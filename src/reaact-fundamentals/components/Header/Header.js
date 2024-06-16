import React from "react";

import "./Header.css";

export const Header = (props) => {
  console.log("---header props---", props);
  console.log("---header message", props.headerMessage);
  return <h1 className="header">{props.headerMessage}</h1>;
};
