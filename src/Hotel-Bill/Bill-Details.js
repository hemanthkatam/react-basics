import React, { useState } from "react";
import "./Bill-table";
import "./EnterDetails";
import { BillTable } from "./Bill-table";
import { EnterDetails } from "./EnterDetails";

export const BillDetails = () => {
  const [Idli, setIdli] = useState(0);
  const [Dosa, setDosa] = useState(0);
  const [Poori, setPoori] = useState(0);
  const [Vada, setVada] = useState(0);
  const [Submit, setSubmit] = useState(0);
  const [idliPrice, updatedIdliPrice] = useState(5);
  const [dosaPrice, updatedDosaPrice] = useState(30);
  const [pooriPrice, updatedPooriPrice] = useState(20);
  const [vadaPrice, updatedVadaPrice] = useState(15);

  return !Submit ? (
    <EnterDetails
      Idli={Idli}
      Dosa={Dosa}
      Poori={Poori}
      Vada={Vada}
      setIdli={setIdli}
      setDosa={setDosa}
      setPoori={setPoori}
      setVada={setVada}
      setSubmit={setSubmit}
      idliPrice={idliPrice}
      dosaPrice={dosaPrice}
      pooriPrice={pooriPrice}
      vadaPrice={vadaPrice}
      updatedIdliPrice={updatedIdliPrice}
      updatedDosaPrice={updatedDosaPrice}
      updatedPooriPrice={updatedPooriPrice}
      updatedVadaPrice={updatedVadaPrice}
    />
  ) : (
    <BillTable
      Idli={Idli}
      Dosa={Dosa}
      Poori={Poori}
      Vada={Vada}
      idliPrice={idliPrice}
      dosaPrice={dosaPrice}
      pooriPrice={pooriPrice}
      vadaPrice={vadaPrice}
      idliSubTotal={Idli*idliPrice}
      dosaSubTotal={Dosa*dosaPrice}
      pooriSubTotal={Poori*pooriPrice}
      vadaSubTotal={Vada*vadaPrice}


    />
  );
};
