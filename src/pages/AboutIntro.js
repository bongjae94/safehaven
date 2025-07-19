// src/pages/AboutIntro.js

import React from "react";

const AboutIntro = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: "url('/background.jpg')", // 반드시 public 폴더에 있어야 함!
      }}
    >
      <div className="bg-white bg-opacity-90 p-10 rounded-2xl shadow-xl max-w-3xl text-gray-800 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Find Your Safe Haven
        </h1>
        <p className="text-center text-gray-600 mb-10">
          심리적 어려움 속에서도 누구나 안심하고 머물 수 있는 신뢰로운 상담센터를 찾도록 돕고자 합니다.
        </p>
        <p className="mb-4">
          많은 사람들이 살아가며 다양한 심리적 어려움을 겪습니다. 하지만 자신의 마음을 털어놓을 수 있는 공간을 찾기란 쉽지 않습니다.
        </p>
        <p className="mb-4">
          정신건강의학과는 국가의 관리 아래 운영되기 때문에 비교적 신뢰할 수 있는 반면, 심리상담센터는 수많은 자격증이 존재하고 그 신뢰도를 일반인이 구별하기 어렵습니다.
        </p>
        <p className="mb-4 font-semibold">
          이 사이트는 최소한의 전문성과 신뢰성을 담보할 수 있는 자격을 갖춘 전문가들이 운영하는 상담센터들을 안내하고자 만들어졌습니다.
        </p>
        <p className="mb-4">
          예를 들어, <strong className="text-blue-700">정신건강임상심리사</strong>,
          <strong className="text-blue-700"> 임상심리전문가</strong>,
          <strong className="text-blue-700"> 상담심리사</strong>,
          <strong className="text-blue-700"> 전문상담사</strong> 등의 자격은 오랜 기간의 수련과 교육을 필요로 하며,
          그 자체로 신뢰의 기준이 될 수 있습니다.
        </p>
        <p className="mb-4">
          이제 더 이상 혼자 고민하지 않아도 됩니다. 누군가의 용기가 소중하게 다뤄질 수 있도록, 이 사이트가 따뜻하고 신뢰할 수 있는 연결의 출발점이 되기를 바랍니다.
        </p>
        <p className="text-center text-sm text-gray-500 mt-8">© 2025 Find Your Safe Haven</p>
      </div>
    </div>
  );
};

export default AboutIntro;
