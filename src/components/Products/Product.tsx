import React, { useContext } from "react";
import { Shopping } from "../../context";

import { ContainerProduct } from "./styled";

export interface ProductType {
  _id: string;
  name: string;
  category: string;
  note: string;
  image?: string;
  count: number;
}

const Product = ({ ...item }: ProductType) => {
  const { isControlToggleOverview, addToOverview, addToCart } = useContext(
    Shopping
  );
  return (
    <ContainerProduct>
      <p
        className="product-name"
        onClick={() => {
          isControlToggleOverview(true);
          addToOverview(item);
        }}
      >
        {item.name}
      </p>
      <button
        className="btn-add-to-list"
        onClick={() => {
          addToCart(item);
        }}
      >
        +
      </button>
    </ContainerProduct>
  );
};

export default Product;
