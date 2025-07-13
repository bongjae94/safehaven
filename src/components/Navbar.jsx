import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
    <Link to="/" style={{ marginRight: "15px" }}>홈</Link>
    <Link to="/about-certification" style={{ marginRight: "15px" }}>공신력 자격 안내</Link>
    <Link to="/check-qualification" style={{ marginRight: "15px" }}>전문가 자격 조회</Link>
    <Link to="/find-center">센터 찾기</Link>
  </nav>
);

export default Navbar;
