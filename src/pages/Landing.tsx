import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🎲</div>
          <div className="absolute top-32 right-20 text-4xl">🧩</div>
          <div className="absolute bottom-32 left-20 text-5xl">🔍</div>
          <div className="absolute bottom-20 right-32 text-4xl">🎯</div>
          <div className="absolute top-1/2 left-1/4 text-3xl">🎪</div>
          <div className="absolute top-1/3 right-1/3 text-4xl">🎨</div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Game<span className="text-yellow-400">Crew</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            보드게임과 방탈출의 짜릿한 세계로 초대합니다
            <br />
            함께 즐기고, 함께 성장하는 게임 커뮤니티
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              동아리 알아보기
            </Link>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 cursor-pointer">
              가입 문의하기
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              우리가 즐기는 것들
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              다양한 보드게임과 스릴 넘치는 방탈출 게임을 통해 새로운 친구들과
              잊지 못할 추억을 만들어보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Board Games */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-6">🎲</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                보드게임
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                전략적 사고와 재미를 동시에! 카탄, 스플렌더, 윙스팬 등 인기
                보드게임부터 신작까지 다양하게 즐겨요.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• 매주 화요일 정기모임</li>
                <li>• 100여 종의 게임 보유</li>
                <li>• 초보자 환영</li>
              </ul>
            </div>

            {/* Escape Rooms */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                방탈출
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                팀워크와 추리력이 필요한 짜릿한 모험! 서울 전지역의 방탈출
                카페를 정복해 나가고 있어요.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• 월 2회 방탈출 투어</li>
                <li>• 난이도별 추천 시스템</li>
                <li>• 성공률 80% 달성</li>
              </ul>
            </div>

            {/* Community */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-6">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                커뮤니티
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                게임을 사랑하는 사람들이 모인 따뜻한 공간. 함께 웃고 즐기며 평생
                친구를 만나보세요.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• 현재 45명의 활발한 멤버</li>
                <li>• 정기 번개 모임</li>
                <li>• 게임 리뷰 & 추천</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                45+
              </div>
              <div className="text-gray-600 dark:text-gray-400">활동 멤버</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                120+
              </div>
              <div className="text-gray-600 dark:text-gray-400">보유 게임</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">
                200+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                방탈출 도전
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                3년
              </div>
              <div className="text-gray-600 dark:text-gray-400">운영 기간</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            함께 게임하고 싶다면?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            새로운 친구들과 재미있는 게임의 세계에 빠져보세요!
            <br />
            언제든 환영합니다 🎉
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              📧 가입 신청하기
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300">
              💬 카카오톡 문의
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
