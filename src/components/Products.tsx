import Axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

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
      {products.map((item: any) => (
        <Product key={item._id} {...item} />
      ))}
    </div>
  );
};

export default Products;
