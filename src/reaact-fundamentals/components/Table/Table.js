import React from "react";

// import "./Table.css";

export const Table = (props) => {
  console.log("--I am props--", props);
  //  return <button onClick={props.onButtonClickHandler}>{props.title}</button>;
  return (
    //<button onClick={props}>{props.title}</button>;
    <div>
      <h1 className="table tags">{props.title}</h1>;
      <table>
        <caption>Details of Flowers</caption>
        <tbody>
          <tr>
            <td> Rose</td>
            <td>Lilly</td>
          </tr>
          <tr>
            <td>10</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
