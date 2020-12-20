import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";

import { Provider } from "./context";

import GlobalStyles from "./theme/globalStyles";
import Theme from "./theme/theme";

import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Provider>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root"),
);
