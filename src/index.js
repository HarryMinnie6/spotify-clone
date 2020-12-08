import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  rootElement
);
