import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalsProvider } from "./context/globals";

ReactDOM.render(
  <React.StrictMode>
    <GlobalsProvider>
      <App />
    </GlobalsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
