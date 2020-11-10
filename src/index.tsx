import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Provider } from "./context";
import Products from "./pages/Products/Products";
import Statistics from "./pages/Statistics";
import History from "./pages/History";
import Details from "./pages/History/Details";

import GlobalStyles from "./theme/globalStyles";
import Theme from "./theme/theme";

import reportWebVitals from "./reportWebVitals";
import Layout from "./components/layout";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Provider>
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
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
