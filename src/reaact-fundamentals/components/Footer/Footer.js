import React from "react";

export const Footer = (props) => {
  console.log("--footer props---", props);
  console.log("---footer  message", props.footerMessage);
  return <h1 className="footer">{props.footerMessage}</h1>;
};
