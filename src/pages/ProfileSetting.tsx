import { dummyUser as user } from "@/pages/MyPage";
import defaultUserImg from "/assets/pngs/default.png";
import { CameraIcon } from "lucide-react";
import { InputWithLabel } from "@/components/forms/InputWithLabel";

export default function ProfileSettingPage() {
  return (
    <div className="h-full flex flex-col justify-start items-center px-4 gap-4 py-10 bg-white">
      <div className="relative flex items-center gap-x-4">
        <img
          alt=""
          src={user.img ? user.img : defaultUserImg}
          className="h-[100px] w-[100px] flex-none rounded-lg bg-gray-50 border border-gray-200"
        />
        <div className="bg-black absolute -right-2 -bottom-2 w-7 h-7 rounded-full flex justify-center items-center">
          <CameraIcon size={20} fill="white" />
        </div>
      </div>
      <InputWithLabel title="이름" value="name" required />
      <InputWithLabel title="한 줄 소개" value="introduce" />
      <button className="bg-green-500 w-[90%] p-5 text-white rounded-lg">
        저장
      </button>
    </div>
  );
}
