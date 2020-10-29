import React, { useEffect, useState } from "react";
import Axios from "axios";
import Product from "./Product";

import { ProductsContainer, ProductsView, ProductsTop } from "./styled";

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const data = await Axios.get(`/api/products`).then((res) => res.data);
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductsContainer>
      <ProductsTop className="products-top">
        <div className="title">
          <p className="shoppingify">Shoppingify </p>
          {"  "}
          <p>allows you take your shopping list wherever you go</p>
        </div>
        <div className="search-box">
          <input type="search" name="" id="" />
        </div>
      </ProductsTop>
      <ProductsView>
        {products.map((item: any) => (
          <Product key={item._id} {...item} />
        ))}
      </ProductsView>
    </ProductsContainer>
  );
};

export default Products;
