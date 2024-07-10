import React from "react";
import "./ChildA1Detail.css";
import { Header } from "../../components/Header";
import { ChildA11Detail } from "./ChildA11Details/ChildA11Details";

export const ChildA1Detail = () => {
  return (
    <div className="ChildA1Detail">
      <Header name="ChildA1Detail" />
      <h3>10 Cr + earnings 20 Cr</h3>
      <ChildA11Detail />
    </div>
  );
};
