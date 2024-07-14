import flagImg from "/assets/pngs/flag.png";
import trophyImg from "/assets/pngs/trophy.png";
import mountainImg from "/assets/pngs/mountain.png";

function ConqCourseInfo() {
  return (
    <div className="grid bg-white gap-2 px-5 py-3 grid-cols-3">
      <div className="bg-gray-50 flex flex-col items-center p-[12px] gap-1 rounded-lg">
        <div className="flex items-center gap-1">
          <img src={flagImg} alt="flag" className="w-[12px] h-[12px]" />
          <p className="text-[10px] text-gray-700 font-semibold">
            정복 코스 개수
          </p>
        </div>
        {/* 데이터 방법에 따라 아래 변수 변경 필요 */}
        <p className="font-semibold text-gray-800">0 개</p>
      </div>
      <div className="bg-gray-50 flex flex-col items-center p-[12px] gap-1 rounded-lg">
        <div className="flex items-center gap-1">
          <img src={mountainImg} alt="flag" className="w-[12px] h-[12px]" />
          <p className="text-[10px] text-gray-700 font-semibold">총 거리</p>
        </div>
        <p className="font-semibold text-gray-800">0 km</p>
      </div>
      <div className="bg-gray-50 flex flex-col items-center p-[12px] gap-1 rounded-lg">
        <div className="flex items-center gap-1">
          <img src={trophyImg} alt="flag" className="w-[12px] h-[12px]" />
          <p className="text-[10px] text-gray-700 font-semibold">최고 순위</p>
        </div>
        <p className="font-semibold text-gray-800">0 위</p>
      </div>
    </div>
  );
}

export default ConqCourseInfo;
