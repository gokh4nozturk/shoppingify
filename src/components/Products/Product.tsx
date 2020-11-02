import React from "react";

import { ContainerProduct } from "./styled";

export interface ProductType {
  _id: string;
  name: string;
  category: string;
  note: string;
  image?: string;
}

export interface Props extends ProductType {
  handleProduct: (item: ProductType) => void;
}

const Product = ({ handleProduct, ...item }: Props) => {
  return (
    <ContainerProduct>
      <p className="product-name">{item.name}</p>
      <button
        className="btn-add-to-list"
        onClick={() => {
          handleProduct(item);
        }}
      >
        +
      </button>
    </ContainerProduct>
  );
};

export default Product;
