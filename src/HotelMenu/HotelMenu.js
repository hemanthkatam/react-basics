import React, { useMemo, useRef, useState } from "react";
import { MenuList } from "./MenuList";
import { Count } from "./Count";

import "./HotelMenu.css";

export const HotelMenu = () => {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [money, setMoney] = useState(100);
  const inputRef = useRef(null);

  const onItemChange = (event) => {
    setItem(event.target.value);
  };

  const testClick = () => {
    if (item !== "") {
      const tempList = itemList;
      tempList.push(item);
      setItemList(tempList.slice());
      setItem("");
      inputRef.current.focus();
    }
  };

  const memoRize = useMemo(() => {
    return money;
  }, [money]);

  return (
    <div className="root">
      <div className="add-item">
        <input value={item} onChange={onItemChange} ref={inputRef} />
        <button onClick={testClick}>Add Item</button>
        <button onClick={() => setMoney(money + 1)}>Increase Money</button>
        <button onClick={() => setMoney(money - 1)}>Decrese Money</button>
      </div>
      <MenuList itemList={itemList} />
      <Count value={memoRize} />
    </div>
  );
};
