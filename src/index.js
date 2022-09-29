import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import BookStore from "./Components/BookStore";
import "./index.scss"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <BookStore />
    </Router>
  </React.StrictMode>
);
