import { Link, useLocation } from "react-router-dom";
// import { useTheme } from "../../hooks/useTheme";

export default function Navigation() {
  const location = useLocation();
  // const { toggle, effectiveTheme } = useTheme();

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🎲</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              GameCrew
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 ${
                location.pathname === "/"
                  ? "text-blue-600 dark:text-blue-400 font-medium"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              홈
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-200 ${
                location.pathname === "/about"
                  ? "text-blue-600 dark:text-blue-400 font-medium"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              소개
            </Link>
            {/* 
            <button
              onClick={toggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="테마 전환"
            >
              {effectiveTheme === "dark" ? "🌞" : "🌙"}
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
