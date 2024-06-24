import React, { useState, useEffect } from "react";

import "./Basictable.css";

// useState -stores data which caiuese for rerender
const URL = "https://run.mocky.io/v3/50469286-d0ca-4ce1-a9ce-88eae349dc76";

export const Basictable = () => {
  const [empData, setEmpData] = useState([]); //on mounting
  const headers = ["first_name", "last_name", "salary"];

  const getEmpDataFromServer = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // received
    console.log("=====data", data);
    setEmpData(data);
  };

  //
  // sideEffects
  useEffect(() => {
    getEmpDataFromServer(); // call only once
  }, []);

  const deleteFiorstName = (firstname) => {
    const updatedDaAta = empData.filter((emp) => emp.first_name !== firstname);
    setEmpData(updatedDaAta);
  };

  return (
    <div className="tableMain">
      <table>
        <thead>
          {headers.map((test) => (
            <th>{test}</th>
          ))}
        </thead>
        <tbody>
          {empData.map((employee) => {
            return (
              <tr onClick={() => deleteFiorstName(employee.first_name)}>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
