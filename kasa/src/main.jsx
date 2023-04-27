import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </>
);
