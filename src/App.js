import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home"; // Adjust the import path according to your project structure
import Demo from "./components/Demo";
import EarlyLife from "./components/EarlyLife";
import CollegeYears from "./components/CollegeYears";
import CareerCommunity from "./components/CareerCommunity";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/early-life" element={<EarlyLife />} />
        <Route path="/college-years" element={<CollegeYears />} />
        <Route path="/career-community" element={<CareerCommunity />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
