export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              GameCrew를 소개합니다
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              2022년부터 시작된 우리의 여정과 함께하는 멤버들, 그리고 앞으로의
              계획을 소개해드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Club Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                우리의 시작
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  GameCrew는 2022년 보드게임을 사랑하는 몇 명의 친구들이 모여
                  시작된 동아리입니다. 처음에는 작은 모임이었지만, 게임에 대한
                  열정과 새로운 사람들과의 만남에 대한 즐거움이 더해져 현재
                  45명의 활발한 멤버를 보유한 커뮤니티로 성장했습니다.
                </p>
                <p>
                  우리는 단순히 게임을 즐기는 것을 넘어서, 서로 다른 배경을 가진
                  사람들이 모여 소통하고 협력하며 성장하는 공간을 만들어가고
                  있습니다. 게임을 통해 만나는 새로운 관점과 경험들이 우리
                  각자의 일상을 더욱 풍요롭게 만들어줍니다.
                </p>
                <p>
                  현재는 보드게임뿐만 아니라 방탈출, 추리게임, 그리고 다양한
                  오프라인 활동까지 영역을 확장하여 멤버들의 다양한 관심사를
                  수용하고 있습니다.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  우리의 미션
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  게임을 통해 사람들을 연결하고,
                  <br />
                  즐거운 경험을 공유하며,
                  <br />
                  함께 성장하는 커뮤니티 만들기
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              주요 활동
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              다양한 활동을 통해 멤버들과 함께하는 시간들
            </p>
          </div>

          <div className="space-y-12">
            {/* Regular Meetings */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl mb-4">📅</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    정기 모임
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    매주 화요일 저녁, 다양한 보드게임을 즐기는 정기 모임을
                    진행합니다.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        시간
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        매주 화요일 19:00-22:00
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        장소
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        강남구 보드게임 카페
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        참여
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        평균 15-20명 참석
                      </p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        게임
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        전략/파티 게임 위주
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Escape Room Tours */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    방탈출 투어
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    월 2회 서울 각지의 방탈출 카페를 탐방하며 팀워크를
                    다져갑니다.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400 font-bold">
                          🏆
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          성공률 80%
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          지금까지 200회 이상의 도전 중 80% 성공
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">
                          📍
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          전지역 커버
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          강남, 홍대, 건대, 신촌 등 서울 전지역
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">
                          ⭐
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          난이도별 추천
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          초보자부터 고수까지 맞춤형 추천 시스템
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Events */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    특별 이벤트
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    시즌별 토너먼트, 신년회, 송년회 등 다양한 특별 행사를
                    진행합니다.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
                      <div className="text-3xl mb-2">🏆</div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        토너먼트
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        분기별 게임 대회
                      </p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                      <div className="text-3xl mb-2">🍻</div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        친목 모임
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        정기 회식 & 모임
                      </p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg">
                      <div className="text-3xl mb-2">🎊</div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        시즌 이벤트
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        신년회, 송년회 등
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              운영진 소개
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              GameCrew를 이끌어가는 열정적인 운영진들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                김
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                김동아리 (회장)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "게임을 통해 만나는 새로운 세상과 사람들이 너무 좋아요!"
              </p>
              <div className="flex justify-center space-x-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                  전략게임
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                  추리
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                박
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                박보드 (부회장)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "방탈출의 짜릿함을 함께 나누고 싶어요!"
              </p>
              <div className="flex justify-center space-x-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-full text-sm">
                  방탈출
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 rounded-full text-sm">
                  협동게임
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                이
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                이게임 (총무)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "모든 멤버가 편안하게 즐길 수 있는 환경을 만들어갑니다."
              </p>
              <div className="flex justify-center space-x-2">
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-300 rounded-full text-sm">
                  파티게임
                </span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">
                  운영
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            GameCrew와 함께하세요!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            나이, 성별, 경험에 상관없이 게임을 사랑하는 모든 분들을 환영합니다.
            <br />
            새로운 친구들과 함께 만들어갈 즐거운 추억이 기다리고 있어요!
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">가입 조건</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90">
              <div>
                <div className="text-3xl mb-2">❤️</div>
                <p>게임에 대한 열정</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🤝</div>
                <p>서로 배려하는 마음</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⏰</div>
                <p>정기 모임 참여 의지</p>
              </div>
            </div>
          </div>
          <button
            className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScewbSKObfxEjwzFM-RPtTRlbNm7brG3X65SUrB74B0je3lhA/viewform?usp=header",
                "_blank"
              );
            }}
          >
            지금 바로 가입하기 🎮
          </button>
        </div>
      </section>
    </div>
  );
}
