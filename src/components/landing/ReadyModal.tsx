export const ReadyModal = ({
  close,
  readyDescription,
}: {
  readyDescription: string;
  close: () => void;
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">준비중입니다</h3>
      <p className="text-gray-600">{readyDescription}</p>
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          onClick={close}
        >
          닫기
        </button>
      </div>
    </div>
  );
};
