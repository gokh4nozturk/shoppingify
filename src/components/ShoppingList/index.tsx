import React, { useState } from "react";
import AddItem from "./AddItem";
import List from "./Cart";

import styled from "styled-components";

const SLContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ShoppingList = () => {
  const [toggle, setToggle] = useState(false);

  const toggleControl = () => {
    setToggle(!toggle);
  };

  return (
    <SLContainer>
      {toggle ? (
        <AddItem onToggle={toggleControl} />
      ) : (
        <List onToggle={toggleControl} />
      )}
    </SLContainer>
  );
};

export default ShoppingList;
