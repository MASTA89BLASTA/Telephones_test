/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import store from "App/features/store/store";
import App from "./App/App";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
      <App />
  </Provider>
);