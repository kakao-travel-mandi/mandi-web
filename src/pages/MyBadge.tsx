import set01 from "/assets/pngs/set01.png";
import lockIcon from "/assets/pngs/lock.png";
import BottomSheet from "@/components/shared/BottomSheet";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type badgeProps = {
  id: number;
  title: string;
  require: string;
  icon: string;
  state: 0 | 1;
};

const myBadgeList: badgeProps[] = [
  {
    id: 1,
    title: "만디 스타터",
    require: "만디 서비스에 가입해요",
    icon: set01,
    state: 1,
  },
  {
    id: 2,
    title: "코스 수집가",
    require: "만디 서비스에 가입해요",
    icon: set01,
    state: 1,
  },
  {
    id: 3,
    title: "공유의 기쁨",
    require: "만디 서비스에 가입해요",
    icon: set01,
    state: 0,
  },
  {
    id: 4,
    title: "완주의 시작",
    require: "만디 서비스에 가입해요",
    icon: set01,
    state: 0,
  },
  {
    id: 5,
    title: "걸어서 만보",
    require: "만디 서비스에 가입해요",
    icon: set01,
    state: 0,
  },
  {
    id: 6,
    title: "만디홀릭",
    require: "만디 서비스에 가입해요",
    icon: set01,
    state: 1,
  },
];

function MyBadge() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [badgeItem, setBadgeItem] = useState<number>(0);

  const handleBadgeClick = (id: number) => {
    setBadgeItem(id - 1);
    setIsOpen((pre) => !pre);
  };

  const handleSheetClose = () => {
    setIsOpen(false);
  };

  const badgeCard = (item: badgeProps) => {
    return (
      <div
        className={`${
          item.state == 1 ? "bg-green-50" : "bg-gray-100"
        } w-[82px] h-[82px] rounded-3xl flex items-center justify-center`}
      >
        <img
          src={item.state == 1 ? item.icon : lockIcon}
          alt="lock"
          width={item.state == 1 ? "40" : "32"}
        />
      </div>
    );
  };

  return (
    <>
      <div className="px-4 py-10 space-y-6">
        <div className="flex flex-col items-center gap-1">
          <img src={set01} alt="badge" width="32" height="32" />
          <p className="text-sm text-gray-900">0 / 6</p>
          <p className="text-xs text-gray-600 text-center">
            획득조건을 확인하고 <br /> 배지를 모아보세요!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-6">
          {myBadgeList.map((item) => (
            <div
              className="flex flex-col items-center space-y-3"
              onClick={() => handleBadgeClick(item.id)}
            >
              {badgeCard(item)}
              <p className="text-sm text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <BottomSheet
        isShow={isOpen}
        children={
          <div className="flex flex-col items-center space-y-5 p-2">
            {badgeCard(myBadgeList[badgeItem])}
            <div className="text-center text-gray-800 space-y-2">
              <p className="text-lg">{myBadgeList[badgeItem].title}</p>
              <p className="text-base font-normal">
                {myBadgeList[badgeItem].require}
              </p>
            </div>
            <Button
              onClick={handleSheetClose}
              className="bg-green-500 w-full p-5 text-white rounded-lg"
            >
              닫기
            </Button>
          </div>
        }
        onClose={handleSheetClose}
      />
    </>
  );
}

export default MyBadge;
