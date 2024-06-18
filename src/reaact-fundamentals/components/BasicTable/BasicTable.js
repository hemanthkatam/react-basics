import React from "react";
import "./BasicTable.css";

export const BasicTable = () => {
  const mariaDetails = {
    compnay: "Alfreds Futterkiste",
    contract: "Maria Anders",
    country: "Germany",
  };
  const changDetails = {
    compnay: "Li ling",
    contract: "chang le ",
    country: "India",
  };

  const employeeList = [
    {
      compnay: "Alfreds Futterkiste",
      contract: "Maria Anders",
      country: "Germany",
    },
    {
      compnay: "Li ling",
      contract: "chang le ",
      country: "India",
    },
  ];

  console.log("----employeeList", employeeList);

  const headers = ["Company", "Contract", "country"];

  return (
    <div className="table">
      <table>
        <tr>
          {headers.map((heading) => (
            <th>{heading}</th>
          ))}
        </tr>
        {employeeList.map((employee) => {
          return (
            <tr>
              <td>{employee.compnay}</td>
              <td>{employee.contract}</td>
              <td>{employee.country}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
