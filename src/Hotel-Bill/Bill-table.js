import React from "react";
import "./EnterDetails"
export const BillTable = ({ Idli,Dosa,Poori,Vada,idliSubTotal,dosaSubTotal,pooriSubTotal,vadaSubTotal,Quantity}) => {
  return (
    <div>
      <h1>Food Items</h1>
      <table>
        <tr>
          <th>Item name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>SubTotal</th>
        </tr>
        <tr>

          <th>Idli </th>
          <td>{Idli}</td>
          <td>Rs.5</td>
          <td>{idliSubTotal}</td>
          
        </tr>
        <tr>
        <th>Dosa </th>
        <td>{Dosa}</td>
        <td>Rs.30</td>
        <td>{dosaSubTotal}</td>
     
        </tr>
        <tr>
        <th>Poori</th>
        <td>{Poori}</td>
        <td>Rs.20</td>
        <td>{pooriSubTotal}</td>
       
        </tr>
        <tr>
        <th>Vada</th>
        <td>{Vada}</td>
        <td>Rs.15</td>
        <td>{vadaSubTotal}</td>
       
        </tr>
      </table>
    </div>
  );
};
