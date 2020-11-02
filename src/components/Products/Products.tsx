import React, { useContext, useMemo, useState } from "react";
import Product from "./Product";

import { ProductsContainer, ProductsView, ProductsTop } from "./styled";
import { ProductType, Shopping } from "../../context";

const Products = () => {
  const [filter, setFilter] = useState("");
  const { products, categories, addToCart } = useContext(Shopping);

  // products from filter that is selected or not
  const filteredProducts: ProductType[] = useMemo(() => {
    // Check if there is a filter
    if (!filter) {
      return products;
    }
    // if no filter
    return products.filter((product) => product.category === filter);
  }, [filter, products]);

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
      <div className="categoriess">
        {/* Mapping categories for filtering */}
        {categories.map((item) => (
          <p
            onClick={() => {
              setFilter(filter === item ? "" : item);
            }}
          >
            {item}
          </p>
        ))}
      </div>
      <ProductsView>
        {filteredProducts.map((item) => (
          <Product key={item._id} onClick={addToCart} {...item} />
        ))}
      </ProductsView>
    </ProductsContainer>
  );
};

export default Products;
