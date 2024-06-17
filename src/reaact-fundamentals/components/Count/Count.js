import React, { useState } from "react";

export const Count1 = () => {
  const [clickedCounts, setNumberOftimeCLicked] = useState(0);

  const [inputValue, setInputValue] = useState("");

  const countClick = () => {
    const newValue = clickedCounts + 1;
    setNumberOftimeCLicked(newValue);
    console.log("---Count---", clickedCounts);
  };

  const onInputChange = (event) => {
    console.log("---display changes---", event);
    setInputValue(event.target.value);
  };

  return (
    <div className="count">
      <button onClick={countClick}>Click me to increase count</button>
      <div>you clicked me times: {clickedCounts}</div>

      <input type="textbox" value={inputValue} onChange={onInputChange} />

      <div>input text: {inputValue} </div>
    </div>
  );
};
