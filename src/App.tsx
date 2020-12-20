import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Products from "./pages/products";
import Statistics from "./pages/statistics";
import History from "./pages/history";
import Details from "./pages/history/details/Details";
import Layout from "./components/layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/history" exact component={History} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/history/:id" component={Details} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
