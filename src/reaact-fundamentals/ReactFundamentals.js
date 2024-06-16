import React from "react";
import { Header } from "./components/Header/Header";
import { Tags } from "./components/Header/Tags/Tags";
import { Table } from "./components/Header/Table";
//  import { Footer} from ".components/Header/Footer";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Header/Footer";
import { Button } from "./components/Button/Button";
export const ReactFundamentals = () => {
  const header = "I am header from ReactFundamentals";
  const buttonName = "hey click me";
  const onButtonClick = () => {
    console.log("hey you clicked me");
  };
  return (
    <div>
      <Header
        headerMessage={header}
        anotherMaggese="another message"
        age={25}
      />
      <Button title={buttonName} onButtonClickHandler={onButtonClick} />
      <Tags />
      <Table />
      <Footer />
      <Content />
    </div>
  );
};

// components will communiate in props

// <Header
// headerMessage={header} prop name like this
// anotherMaggese="another message"
// age={25}
// />

// TODO

// FOOTER
// COTENT
// TABLE
// HTML tags

// Create StyledButton component
