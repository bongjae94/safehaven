import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutCertification from "./pages/AboutCertification";
import CheckQualification from "./pages/CheckQualification";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-certification" element={<AboutCertification />} />
        <Route path="/check-qualification" element={<CheckQualification />} />
      </Routes>
    </Router>
  );
}

export default App;
