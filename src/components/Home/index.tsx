import React from "react";
import Navigation from "../Navigation";
import Products from "../Products/Products";
import ShoppingList from "../ShoppingList";

import { HomeContainer } from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <div className="part-nav home-item">
        <Navigation />
      </div>
      <div className="part-products home-item">
        <Products />
      </div>
      <div className="part-shopping-list home-item">
        <ShoppingList />
      </div>
    </HomeContainer>
  );
};

export default Home;
