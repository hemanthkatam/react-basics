import React from "react";

export const StyledButton = (props) => {
  console.log("---Button", props);
  const onButtonClick = () => {
    console.log("---on click--");
  };
  return <button onClick={props.onButtonClickHandler}>{props.title}</button>;
};
