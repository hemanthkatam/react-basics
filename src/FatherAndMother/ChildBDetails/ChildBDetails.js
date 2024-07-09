import React from "react";
import "./ChildBDetails.css";
import { ChildB1Detail } from "./ChildB1Detail/ChildB1Detail";
import { ChildB2Detail } from "./ChildB2Detail/ChildB2Detail";
import { ChildB3Detail } from "./ChildB3Detail/ChildB3Detail";

export const ChildBDetails = () => {
  return (
    <div className="childb">
      <h1>I am Child B</h1>
      <h3> Property 20 Cr</h3>
      <div className="childrenB">
      <ChildB1Detail/>
      <ChildB2Detail />
      <ChildB3Detail />
      </div>
      
    </div>
  );
};
