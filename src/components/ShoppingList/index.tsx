import React, { useState } from "react";
import AddItem from "./AddItem";
import List from "./List";
import { SLContainer } from "./styled";

const ShoppingList = () => {
  const [toggle, setToggle] = useState(false);

  const toggleControl = () => {
    setToggle(!toggle);
  };
  return (
    <SLContainer>
      {toggle ? (
        <AddItem ClickHandler={toggleControl} />
      ) : (
        <List ClickHandler={toggleControl} />
      )}
    </SLContainer>
  );
};

export default ShoppingList;
