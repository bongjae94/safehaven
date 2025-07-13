import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutCertification from "./pages/AboutCertification";
import CheckQualification from "./pages/CheckQualification";
import FindCenter from "./pages/FindCenter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>안식처 찾기 - 신뢰할 수 있는 심리센터를 위한 가이드</h2>} />
        <Route path="/about-certification" element={<AboutCertification />} />
        <Route path="/check-qualification" element={<CheckQualification />} />
        <Route path="/find-center" element={<FindCenter />} />
      </Routes>
    </Router>
  );
}

export default App;
