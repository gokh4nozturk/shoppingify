import React, { useContext, useMemo, useState } from "react";
import Product from "./Product";

import {
  ProductsContainer,
  ProductsView,
  ProductsTop,
  ProductsCategories,
  ProductsCategory,
  ProductsTitle,
  SearchBox,
  Transparent,
} from "./styled";
import { ProductType, Shopping } from "../../context";
import CancelPopUp from "../Modal";

const Products = () => {
  const [filter, setFilter] = useState("");
  const {
    products,
    categories,
    onTogglePopUp,
    isControlPopUpToggle,
  } = useContext(Shopping);

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
      {onTogglePopUp ? <Transparent onClick={isControlPopUpToggle} /> : null}
      {onTogglePopUp ? <CancelPopUp /> : null}
      <ProductsTop>
        <ProductsTitle className="title">
          <p className="shoppingify">Shoppingify </p>
          <p> allows you take your shopping list wherever you go</p>
        </ProductsTitle>
        <SearchBox className="search-box">
          <input type="search" name="" id="" />
        </SearchBox>
      </ProductsTop>
      <ProductsCategories>
        {/* Mapping categories for filtering */}
        {categories.map((item) => (
          <ProductsCategory
            onClick={() => {
              setFilter(filter === item ? "" : item);
            }}
          >
            {item}
          </ProductsCategory>
        ))}
      </ProductsCategories>
      <ProductsView>
        {filteredProducts.map(
          (item) => item.visible && <Product key={item._id} {...item} />
        )}
      </ProductsView>
    </ProductsContainer>
  );
};

export default Products;
