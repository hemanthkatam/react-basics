import React from "react";
import { ChildA1Detail } from "./ChildA1Detail/ChildA1Detail";
import { ChildA2Detail } from "./ChildA2Detail/ChildA2Detail";
import { Header } from "../components/Header";
import "./ChildADetails.css";

export const ChildADetails = () => {
  return (
    <div className="childa">
      <Header name="A" />
      <h3>Property 20 Cr</h3>
      <div className="children">
        <ChildA1Detail />
        <ChildA2Detail />
      </div>
    </div>
  );
};
