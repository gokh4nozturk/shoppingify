import React, { useEffect, useState } from "react";
import Axios from "axios";
import Product, { ProductType } from "./Product";

import { ProductsContainer, ProductsView, ProductsTop } from "./styled";

type ResponseType = undefined | ProductType[];

interface Props {
  handleProducts: (item: ProductType) => void;
}

const Products = ({ handleProducts }: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const fetchData = async () => {
    const newProducts: ResponseType = await Axios.get(`/api/products`)
      .then((res) => res.data)
      .catch((e) => {
        console.log(e);
      });

    if (!newProducts) return;

    const productCategories = newProducts.reduce<string[]>((state, cur) => {
      const { category } = cur;
      const isInState = state.includes(category);
      if (isInState) {
        return state;
      }
      return [...state, category];
    }, []);

    setCategories(productCategories);
    setProducts(newProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleProduct = (item: ProductType) => {
    handleProducts(item);
  };

  return (
    <ProductsContainer>
      <ProductsTop className="products-top">
        <div className="title">
          <p className="shoppingify">Shoppingify </p>
          {"  "}
          <p> allows you take your shopping list wherever you go</p>
        </div>
        <div className="search-box">
          <input type="search" name="" id="" />
        </div>
      </ProductsTop>
      <ProductsView>
        {products.map((item) => (
          <Product key={item._id} handleProduct={handleProduct} {...item} />
        ))}
      </ProductsView>
      <div className="categoriess">
        {categories.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </ProductsContainer>
  );
};

export default Products;
