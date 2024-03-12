import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home.jsx";
import Sign from "../src/Pages/Sign.jsx";
import Error from "../src/Pages/Error.jsx";
import Footer from "./Components/Footer.jsx";
import Nav from "./Components/Nav.jsx";
import Users from "./Pages/Users.jsx";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/*" element={<Error />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
