import React, { useState, useEffect } from "react";

import "./Basictable.css";

// useState -stores data which caiuese for rerender
const URL = "https://mocki.io/v1/60c041a4-5380-4d3f-9afe-38985e642368";

export const Basictable = () => {
  const [empData, setEmpData] = useState([]); //on mounting
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [salary, setSalary] = useState("");
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

  const onFirstnameChange = (event) => {
    setFirstName(event.target.value);
  };
  const onLastnameChange = (event) => {
    setLastname(event.target.value);
  };
  const onSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  const onSubmit = () => {
    const data = {
      first_name: firstname,
      last_name: lastname,
      salary: salary,
    };
    console.log("---data", data);
    const updatedData = [...empData, data];
    setEmpData(updatedData);
  };

  return (
    <div className="tableMain">
      <div>
        <div>
          <div>First name:</div>
          <div>
            <input type="textbox" onChange={onFirstnameChange} />
          </div>
        </div>
        <div>
          <div>last name:</div>
          <div>
            <input type="textbox" onChange={onLastnameChange} />
          </div>
        </div>
        <div>
          <div>Salary:</div>
          <div>
            <input type="textbox" onChange={onSalaryChange} />
          </div>
        </div>
        <button onClick={onSubmit}>submit</button>
      </div>
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
