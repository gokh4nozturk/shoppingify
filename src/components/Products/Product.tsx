import React from "react";

import { ContainerProduct } from "./styled";

const Product = ({ ...item }) => {
  return (
    <ContainerProduct>
      <p>{item.name}</p>
      <button className="btn-add-to-list">+</button>
    </ContainerProduct>
  );
};

export default Product;
