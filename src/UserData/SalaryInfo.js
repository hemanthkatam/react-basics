import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./UserData.css";

export const SalaryInfo = () => {
  const salary = useSelector((state) => {
    return state.salary;
  });
  return (
    <div className="salary">
      <h1 className="main-header">I am SalaryInfo component</h1>
      salary: {salary}
    </div>
  );
};
