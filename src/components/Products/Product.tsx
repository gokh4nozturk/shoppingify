import React, { useEffect, useState } from "react";

import { ContainerProduct } from "./styled";

const Product = ({ ...item }) => {
  return (
    <ContainerProduct>
      <p className="product-name">{item.name}</p>
      <button className="btn-add-to-list">+</button>
    </ContainerProduct>
  );
};

export default Product;
