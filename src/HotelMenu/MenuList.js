import React, { useEffect, useState } from "react";

import "./HotelMenu.css";
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const MenuList = ({ itemList }) => {
  const [listWithPrice, setListWithPrice] = useState([]);

  useEffect(() => {
    console.log("----this is called", itemList);
    const updatedValues = itemList.map((item) => ({
      name: item,
      price: getRandomNumber(30, 50),
    }));
    setListWithPrice(updatedValues);
  }, [itemList]);

  return (
    <div className="list">
      <table className="list-table">
        <tr>
          <th>Item</th>
          <th>Cost</th>
        </tr>

        {listWithPrice.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
