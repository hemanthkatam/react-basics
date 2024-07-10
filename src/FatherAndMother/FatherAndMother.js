import React from "react";
import { ChildADetails } from "./ChildADetails/ChildADetails";
import { ChildBDetails } from "./ChildBDetails/ChildBDetails";

import "./fathermain.css";

export const FatherAndMother = () => {
  return (
    <div className="fatherandmother">
      <h1>we are first parents here</h1>
      <h1>Property 5cr</h1>
      <ChildADetails />
      <ChildBDetails />
    </div>
  );
};
