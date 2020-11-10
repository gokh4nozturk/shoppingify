import React, { useContext } from "react";
import { Shopping } from "../../context";

import {
  ContainerProduct,
  AddToListBtn,
  AddToListBtnContainer,
  ProductName,
  ProductNameContainer,
} from "./styled";

export interface ProductType {
  _id: string;
  name: string;
  category: string;
  note: string;
  image?: string;
  visible: boolean;
  count: number;
  completed: boolean;
}

const Product = ({ ...item }: ProductType) => {
  const { isControlToggleOverview, addToOverview, addToCart } = useContext(
    Shopping
  );
  return (
    <ContainerProduct>
      <ProductNameContainer>
        <ProductName
          onClick={() => {
            isControlToggleOverview(true);
            addToOverview(item);
          }}
        >
          {item.name}
        </ProductName>
      </ProductNameContainer>
      <AddToListBtnContainer>
        <AddToListBtn
          onClick={() => {
            addToCart(item);
          }}
        >
          +
        </AddToListBtn>
      </AddToListBtnContainer>
    </ContainerProduct>
  );
};

export default Product;
