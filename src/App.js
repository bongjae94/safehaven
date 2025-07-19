// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', lineHeight: '1.6', padding: '2rem', backgroundColor: '#fdfdfd' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#222' }}>
          Find Your Safe Haven
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#444' }}>
          심리적 어려움 속에서 누구나 안심하고 머물 수 있는 신뢰로운 상담센터를 찾도록 도와드립니다.
        </p>
      </header>

      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <p>
          많은 사람들이 살아가며 다양한 심리적 어려움을 겪습니다. 하지만 자신의 마음을 털어놓을 수 있는 공간을 찾기란 쉽지 않습니다.
        </p>
        <p>
          정신건강의학과는 국가의 관리 아래 운영되기 때문에 비교적 신뢰할 수 있는 반면, 심리상담센터는 수많은 자격증이 존재하고 그 신뢰도를 일반인이 구별하기 어렵습니다.
        </p>
        <p>
          <strong>이 사이트는</strong> 최소한의 전문성과 신뢰성을 담보할 수 있는 자격을 갖춘 전문가들이 운영하는 상담센터들을 안내하고자 만들어졌습니다.
        </p>
        <p>
          예를 들어, <strong>정신건강임상심리사</strong>, <strong>임상심리전문가</strong>, <strong>상담심리사</strong>, <strong>전문상담사</strong> 등의 자격은 오랜 기간의 수련과 교육을 필요로 하며, 그 자체로 신뢰의 기준이 될 수 있습니다.
        </p>
        <p>
          이제 더 이상 혼자 고민하지 않아도 됩니다. 누군가의 용기가 소중하게 다뤄질 수 있도록, 이 사이트가 따뜻하고 신뢰할 수 있는 연결의 출발점이 되기를 바랍니다.
        </p>
      </section>

      <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
        © 2025 Find Your Safe Haven | Made by Bong
      </footer>
    </div>
  );
}

export default App;
