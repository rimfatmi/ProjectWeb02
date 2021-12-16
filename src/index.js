import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./Redux/Store/Store";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Header />
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
