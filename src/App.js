import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from "./components/Home"; // Adjust the import path according to your project structure
import Demo from "./components/Demo";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/demo" element={<Demo />} />

        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
