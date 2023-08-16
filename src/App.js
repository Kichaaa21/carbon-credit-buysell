import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buy from "./Pages/Buy/Buy";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Sell from "./Pages/Sell/Sell";
import Calculate from "./Pages/Calculate/Calculate";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/calculate" element={<Calculate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
