import React, { useState } from "react";

export const CounterExample = () => {
  const [numberOfTimesClicked, setNumberOftimeCLicked] = useState(0);

  const [inputValue, setInputValue] = useState("");

  const counterCLick = () => {
    const newValue = numberOfTimesClicked + 1;
    setNumberOftimeCLicked(newValue);
    console.log("---CounterExample is clicked", numberOfTimesClicked);
  };

  const onInputChange = (event) => {
    console.log("---input is changed", event);
    setInputValue(event.target.value);
  };

  return (
    <div className="counter">
      <button onClick={counterCLick}>Click me to increase count</button>
      <div>you clicked me times: {numberOfTimesClicked}</div>

      <input type="textbox" value={inputValue} onChange={onInputChange} />

      <div>input text: {inputValue} </div>
    </div>
  );
};
