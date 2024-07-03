import React from "react";

export const MarskTable = ({ teluguMarks, englishMarks }) => {
  return (
    <div>
      <h1>marks</h1>
      <table>
        <tr>
          <th>Telugu</th>
          <th>English</th>
        </tr>
        <tr>
          <td>{teluguMarks}</td>
          <td>{englishMarks}</td>
        </tr>
      </table>
    </div>
  );
};
