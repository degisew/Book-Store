import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import BookStore from "./Components/BookStore";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BookStore />
      </Router>
    </Provider>
  </React.StrictMode>
);
