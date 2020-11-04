import React, { useContext, useState } from "react";
import AddItem from "./AddItem";
import List from "./Cart";

import styled from "styled-components";
import { Shopping } from "../../context";
import Overview from "./Overview";

const SLContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ShoppingList = () => {
  const [toggle, setToggle] = useState(false);
  const { onToggleOverview } = useContext(Shopping);

  const toggleControl = () => {
    setToggle(!toggle);
  };

  return (
    <SLContainer>
      {onToggleOverview ? <Overview /> : <List onToggle={toggleControl} />}
    </SLContainer>
  );
};

export default ShoppingList;
