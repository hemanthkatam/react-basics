import React from "react";
import "./ChildA1Detail.css";
import { ChildA11Detail } from "./ChildA11Details/ChildA11Details";

export const ChildA1Detail = () => {
  return (
    <div className="ChildA1Detail">
      <h1>I am Child A1</h1>
      <h3>10 Cr + earnings 20 Cr</h3>
      <ChildA11Detail/>
    </div>
  );
};
