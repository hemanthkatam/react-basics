import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SalaryInfo } from "./SalaryInfo";
import "./UserData.css";

export const JobInfo = () => {
  const jobName = useSelector((state) => {
    return state.job;
  });
  return (
    <div className="salary">
      <h1 className="main-header">I am JobInfo component</h1>
      job: {jobName}
      <SalaryInfo />
    </div>
  );
};
