import React from "react";

import "./Table.css";

export const Table = () => {
  return (
    <div>
      <h1 className="table tags">Practice on Table Tags</h1>;
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
