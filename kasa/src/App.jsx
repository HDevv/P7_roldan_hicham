import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/Home/Home";
import Data from "../data.json";
import Error from "./pages/404/404";

// Routing

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/data/:id" element={<Data />} /> */}
        <Route path="/*" element={<Error />} />
        <Route path="/data/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
