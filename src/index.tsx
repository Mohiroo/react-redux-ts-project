import React from "react";
import App from "./App";
import "./App.scss";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const container = document.getElementById("root")!;
const root = createRoot(container);

const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
