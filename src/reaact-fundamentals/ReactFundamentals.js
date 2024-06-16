import React from "react";
import { Header } from "./components/Header/Header";
import { Tags } from "./components/Header/Tags/Tags";
import { Table } from "./components/Header/Table";
//  import { Footer} from ".components/Header/Footer";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Header/Footer";
export const ReactFundamentals = () => {
  const header = "I am header from ReactFundamentals";

  return (
    <div>
      <Header
        headerMessage={header}
        anotherMaggese="another message"
        age={25}
      />
      <Tags />
      <Table />
      <Footer />
      <Content />
    </div>
  );
};
// components will communiate in props

// TODO

// FOOTER
// COTENT
// TABLE
// HTML tags
