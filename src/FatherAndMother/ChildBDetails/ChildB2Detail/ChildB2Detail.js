import React from "react";
import "./ChildB2Detail.css";
import { ChildB21Detail, ChildB21Details } from "./ChildB21Details/ChildB21Details";

export const ChildB2Detail = () => {
  return (
    <div className="ChildB2Detail">
      <h1>I am Child B2</h1>
      <h3>6.6 Cr + earnings 20 Cr</h3>
      <ChildB21Details />
    </div>
  );
};
