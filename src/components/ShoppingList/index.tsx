import React, { useState } from "react";
import AddItem from "./AddItem";
import List from "./List";
import { SLContainer } from "./styled";

import { ProductType } from "../Products/Product";

interface Props {
  product: ProductType[];
}

const ShoppingList = ({ product }: Props) => {
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
      {product.map((item: any) => {
        console.log("sp");

        console.log(item);
      })}
    </SLContainer>
  );
};

export default ShoppingList;
