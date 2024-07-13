import React, { useState } from "react";
import { useSelector } from "react-redux";
import { JobInfo } from "./JobInfo";
import "./UserData.css";

const getState = (state) => {
  return state.name;
};

export const UserData = () => {
  const empName = useSelector(getState);
  return (
    <div className="user">
      <h1 className="main-header">I am UserData component</h1>
      name: {empName}
      <JobInfo />
    </div>
  );
};
