import { InstagramIcon } from "../assets/InstagramIcon";
import { XIcon } from "../assets/XIcon";
import useModal from "../../hooks/useModal";
import { ReadyModal } from "../landing/ReadyModal";

export default function Footer() {
  const { open, close } = useModal();
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🎲</span>
              </div>
              <span className="text-xl font-bold">SSAG</span>
            </div>
            <p className="text-gray-300 mb-4">
              보드게임과 방탈출을 사랑하는 사람들이 모인 동아리입니다. 함께
              즐기고 새로운 경험을 만들어가요!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 ssag@example.com</p>
              <p>📱 카카오톡: @ssag</p>
              <p>📍 서울특별시 강남구</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">소셜 미디어</h3>
            <div className="flex space-x-4">
              <div
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                onClick={() =>
                  open(
                    <ReadyModal
                      close={close}
                      readyDescription="소셜 미디어는 준비중입니다."
                    />
                  )
                }
              >
                <XIcon />
              </div>
              <div
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                onClick={() =>
                  open(
                    <ReadyModal
                      close={close}
                      readyDescription="소셜 미디어는 준비중입니다."
                    />
                  )
                }
              >
                <InstagramIcon />
              </div>
              <div
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                onClick={() =>
                  open(
                    <ReadyModal
                      close={close}
                      readyDescription="소셜 미디어는 준비중입니다."
                    />
                  )
                }
              >
                💬
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SSAG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
