import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Products from "../../components/Products/Products";
import ShoppingList from "../../components/ShoppingList";
import Statistics from "../Statistics";
import History from "../History";

import { HomeContainer } from "./styled";

const Home = () => {
  return (
    <Router>
      <HomeContainer>
        <div className="part-nav home-item">
          <Navigation />
        </div>
        <Switch>
          <div className="part-products home-item">
            <Route path="/" exact component={Products} />
            <Route path="/history" component={History} />
            <Route path="/statistics" component={Statistics} />
          </div>
        </Switch>
        <div className="part-shopping-list home-item">
          <ShoppingList />
        </div>
      </HomeContainer>
    </Router>
  );
};

export default Home;
