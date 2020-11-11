import React, { useContext } from "react";
import AddItem from "./AddItem";
import Cart from "./cart/Cart";

import styled from "styled-components";
import { Shopping } from "../../context";
import Overview from "./overview/Overview";

const SLContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ShoppingList = () => {
  const { onToggleOverview, onToggleAddItem } = useContext(Shopping);

  return (
    <SLContainer>
      {onToggleOverview && <Overview />}
      {onToggleAddItem && <AddItem />}
      {!onToggleAddItem && !onToggleOverview && <Cart />}
    </SLContainer>
  );
};

export default ShoppingList;
