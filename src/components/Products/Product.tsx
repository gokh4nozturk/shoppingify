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

export interface Props extends ProductType {
  onClick: (item: ProductType) => void;
}

const Product = ({ onClick, ...item }: Props) => {
  const { isControlToggleOverview } = useContext(Shopping);
  return (
    <ContainerProduct>
      <p className="product-name" onClick={isControlToggleOverview}>
        {item.name}
      </p>
      <button
        className="btn-add-to-list"
        onClick={() => {
          onClick(item);
        }}
      >
        +
      </button>
    </ContainerProduct>
  );
};

export default Product;
