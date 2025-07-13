import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>

      <p className="text-xl text-gray-800 mb-4">
        당신의 마음에 안식처를 드립니다.
      </p>
      <p className="text-gray-600 mb-10">
        신뢰할 수 있는 심리상담 센터를 정확하고 편안하게 안내해드립니다.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/about-intro"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          About Us
        </Link>
        <Link
          to="/about-certification"
          className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          자격증 안내
        </Link>
        <Link
          to="/check-qualification"
          className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          자격 확인하기
        </Link>
      </div>
    </div>
  );
}

export default Home;
