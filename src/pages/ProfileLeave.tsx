import trashcanImg from "/assets/pngs/trashcan.png";
import discImg from "/assets/pngs/disc.png";
import { Button } from "@/components/ui/button";

function ProfileLeave() {
  const leaveCondition = [
    {
      id: 1,
      text: "작성했던 후기는 자동으로 삭제되지 않아요. 탈퇴 전 개별적으로 삭제해주세요.",
      icon: trashcanImg,
    },
    {
      id: 2,
      text: "개인 정보 및 스크랩 등 서비스 이용 정보는 복구가 불가능하며, 동일한 아이디로 24시간 이후 재가입이 가능해요.",
      icon: discImg,
    },
  ];

  return (
    <div className="pt-11 px-5">
      <div className="space-y-3">
        <p className="text-gray-900 text-2xl font-bold text-center">
          정말 만디를 <br /> 탈퇴하실 건가요?
        </p>
        <p className="text-gray-700 text-base font-normal text-center">
          탈퇴하기 전에 아래 정보를
          <br />
          확인해주세요
        </p>
      </div>
      <div className="space-y-3.5 mt-8 px-4 text-sm text-gray-700">
        {leaveCondition.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-xl p-2.5 flex items-start space-x-3"
          >
            <img src={item.icon} alt="icon" width="24" height="24" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="relative bottom-0">
        <div className="flex w-full space-x-3">
          <Button className="w-full py-3.5 bg-gray-100 text-gray-600">
            더 써볼래요
          </Button>
          <Button className="w-full py-3.5 bg-green-100 text-white">
            탈퇴하기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileLeave;
