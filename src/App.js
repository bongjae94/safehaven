// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutIntro from "./pages/AboutIntro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aboutintro" element={<AboutIntro />} />
        {/* 다른 페이지들도 여기에 추가 가능 */}
      </Routes>
    </Router>
  );
}

export default App;
