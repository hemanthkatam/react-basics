import React, { useState } from "react";
import { ShowCount } from "./ShowCount/ShowCount";
import "./PropDrilling.css";

export const PropDrilling = () => {
  const [count, setCount] = useState(0);

  const onDecrease = () => {
    setCount(count - 1);
  };
  const onIncrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="parent">
      Parent count
      <div className="counter">
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onIncrease}>Increase</button>
      </div>
      <ShowCount count={count} />
    </div>
  );
};
