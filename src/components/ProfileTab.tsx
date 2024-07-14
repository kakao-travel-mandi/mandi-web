import defaultUserImg from "/assets/pngs/default.png";
import pencilImg from "/assets/pngs/pencil.png";
import flagImg from "/assets/pngs/flag.png";
import { useNavigate } from "react-router-dom";
import { RightArrow } from "./icons";

type UserInfoProps = {
  name: string;
  img: string;
  description?: string;
  review?: number;
  visited?: number;
};

type Props = {
  user: UserInfoProps;
};

function ProfileTab({ user }: Props) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-[20px] mb-[8px]">
      <div
        className="flex items-center justify-between min-w-0 gap-x-4"
        onClick={() => console.log(user.name, "clicked")}
      >
        <div className="flex items-center gap-x-4">
          <img
            alt=""
            src={user.img ? user.img : defaultUserImg}
            className="h-[52px] w-[52px] flex-none rounded-lg bg-gray-50 border border-gray-200"
          />
          <div className="min-w-0 flex flex-col gap-[4px]">
            <p className="text-base font-semibold text-gray-900">
              {user.name ? user.name : "로그인 및 회원가입"}
            </p>
            <p className="truncate text-xs text-gray-600">
              {user.name
                ? user.description && user.description
                : "만디의 회원이 되어주세요!"}
            </p>
          </div>
        </div>
        <RightArrow className="w-[12px] h-[12px]" />
      </div>
      <div className="flex w-full justify-between gap-[8px] mt-[16px] text-sm">
        <button className="w-full bg-gray-50 rounded-lg">
          <div className="flex justify-between px-[12px] py-[16px]">
            <div className="flex gap-1 items-center">
              <img src={pencilImg} className="w-[16px] h-[16px]" alt="pencil" />
              <p className="text-gray-700">나의 코스 후기</p>
            </div>
            <p className="text-gray-800">{user.review}</p>
          </div>
        </button>
        <button
          className="w-full bg-gray-50 rounded-lg"
          onClick={() => navigate("/conq-course")}
        >
          <div className="flex justify-between px-[12px] py-[16px]">
            <div className="flex gap-1 items-center">
              <img src={flagImg} className="w-[16px] h-[16px]" alt="pencil" />
              <p className="text-gray-700">정복 코스 목록</p>
            </div>
            <p className="text-gray-800">{user.visited}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ProfileTab;
