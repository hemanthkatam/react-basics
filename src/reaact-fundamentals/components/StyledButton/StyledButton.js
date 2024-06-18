// import React from "react";
import React, { useState } from 'react';

// const StyledButton = () => {
//   const [buttonName1, setData] = useState('click');

//   const updateData = () => {
//     setData('Updated Data');
// };

export const StyledButton = (props) => {
  console.log("---Button", props);
  const onButtonClick = () => {
    console.log("---on click--");
  };
  return <button onClick={props.onButtonClickHandler}>{props.title}</button>;
}
