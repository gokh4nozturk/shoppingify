import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "../../context";

import Navigation from "../../components/Navigation";
import Products from "../../components/Products/Products";
import ShoppingList from "../../components/ShoppingList";
import Statistics from "../Statistics";
import History from "../History";

import { HomeContainer } from "./styled";
import Details from "../History/Details";

const Home = () => {
  return (
    <Provider>
      <Router>
        <HomeContainer>
          <div className="part-nav home-item">
            <Navigation />
          </div>
          <Switch>
            <div className="part-products home-item">
              <Route path="/" exact component={Products} />
              <Route path="/history" exact component={History} />
              <Route path="/statistics" component={Statistics} />
              <Route path="/history/:id" component={Details} />
            </div>
          </Switch>
          <div className="part-shopping-list home-item">
            <ShoppingList />
          </div>
        </HomeContainer>
      </Router>
    </Provider>
  );
};

export default Home;
