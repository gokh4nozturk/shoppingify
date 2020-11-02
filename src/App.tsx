import React from "react";
import Home from "./components/Home";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
