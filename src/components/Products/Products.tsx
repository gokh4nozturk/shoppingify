import React, { useEffect, useState } from "react";
import Axios from "axios";
import Product from "./Product";

import { ProductsContainer, ProductsView } from "./styled";

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const data = await Axios.get(`/api/products`).then((res) => res.data);
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductsContainer>
      <div className="products-top">
        Shoppingify allows you take your shopping list wherever you go
      </div>
      <ProductsView>
        {products.map((item: any) => (
          <Product key={item._id} {...item} />
        ))}
      </ProductsView>
    </ProductsContainer>
  );
};

export default Products;
