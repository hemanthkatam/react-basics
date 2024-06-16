import React from "react";
import { Header } from "./components/Header/Header";
import { Tags } from "./components/Tags/Tags";
import { Table } from "./components/Table/Table";
//  import { Footer} from ".components/Header/Footer";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { Button } from "./components/Button/Button";
import { StyledButton } from "./components/StyledButton/StyledButton";
export const ReactFundamentals = () => {
  const header = "I am header from ReactFundamentals";
  const buttonName = "hey click me";
  const buttonName1=" I am new one"
  const onButtonClick = () => {
    console.log("hey you clicked me");
  };
  const onButtonClick1=()=>{
    console.log("clicked")
  }
  const table="I am table from React"
  const footer="I am footer from ReactFundamentals";
  const content="I am the content for React"
  const tags=" I am having basic html tags "
  return (
    <div>
      <Header
        headerMessage={header}
        anotherMaggese="another message"
        age={25}
      />
      <Button title={buttonName} onButtonClickHandler={onButtonClick} />
      <Tags title={tags} />
      <Table  title={table}/>
      <Footer 
      footerMessage={footer}/>
      <Content  title={content}/>
      <StyledButton title={buttonName1} onButtonClickHandler={onButtonClick1}/>
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
