import React from "react";

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
  return (
    <ContainerProduct>
      <p className="product-name">{item.name}</p>
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
