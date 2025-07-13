import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutIntro from "./pages/AboutIntro";
import AboutCertification from "./pages/AboutCertification";
import CheckQualification from "./pages/CheckQualification";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-certification" element={<AboutCertification />} />
        <Route path="/check-qualification" element={<CheckQualification />} />
        <Route path="/about-intro" element={<AboutIntro />} />
      </Routes>
    </Router>
  );
}

export default App;
