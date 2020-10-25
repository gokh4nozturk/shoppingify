import React, { useEffect, useState } from "react";
import Axios from "axios";
import Product from "./Product";

import { Container } from "./styled";

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
    <div>
      <Container>
        {products.map((item: any) => (
          <Product key={item._id} {...item} />
        ))}
      </Container>
    </div>
  );
};

export default Products;
