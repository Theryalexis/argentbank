import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home.jsx";
import Sign from "../src/Pages/Sign.jsx";
import Error from "../src/Pages/Error.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
