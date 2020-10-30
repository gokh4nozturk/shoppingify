import React from "react";

import { ContainerProduct } from "./styled";

export interface ProductType {
  _id: string;
  name: string;
  category: string;
  note: string;
  image?: string;
}

interface Props extends ProductType {}

const Product = ({ ...item }: Props) => {
  return (
    <ContainerProduct>
      <p className="product-name">{item.name}</p>
      <button className="btn-add-to-list">+</button>
    </ContainerProduct>
  );
};

export default Product;
