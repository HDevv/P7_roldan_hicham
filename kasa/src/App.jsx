import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/Home/Home";
import Logements from "./pages/logements/logement";
import Error from "./pages/404/404";

// Routing Logic

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="/*" element={<Error />} />
        <Route path="/logements/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
