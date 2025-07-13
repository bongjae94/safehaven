import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="px-6 py-4 border-b shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-bold">안식처 찾기</h1>
        <nav className="space-x-4">
          <Link to="/find-center" className="hover:underline">센터 찾기</Link>
          <Link to="/check-qualification" className="hover:underline">자격 검증하기</Link>
          <Link to="/about-certification" className="hover:underline">공신력 안내</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center py-20 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          당신의 마음에 안식처를 드립니다.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
          공신력 있는 심리상담 센터를 정확하고 편안하게 안내해드립니다.
        </p>

        <div className="space-x-4">
          <Link
            to="/find-center"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
          >
            센터 찾기
          </Link>
          <Link
            to="/check-qualification"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            자격 검증하기
          </Link>
        </div>
      </main>

      <footer className="py-4 border-t text-sm text-gray-500 text-center">
        &copy; 2025 안식처 찾기 | Made with 🧠 by 봉재환
      </footer>
    </div>
  );
}
