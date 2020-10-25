import React from "react";

const Product = ({ ...item }) => {
  return (
    <div>
      <div>
        <p>{item.name}</p>
      </div>
    </div>
  );
};

export default Product;
