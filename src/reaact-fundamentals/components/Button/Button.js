import React from "react";

export const Button = (props) => {
  console.log("---Button props", props);
  const onButtonClick = () => {
    console.log("--- you clicked me");
  };
  return <button onClick={props.onButtonClickHandler}>{props.title}</button>;
};
