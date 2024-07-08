import defaultUserImg from "../assets/pngs/default.png";
import RightArrowIcon from "../assets/svgs/RightArrow.svg?react";

type UserInfoProps = {
  name: string;
  img: string;
  description?: string;
};

type Props = {
  user: UserInfoProps;
};

function ProfileTab({ user }: Props) {
  return (
    <div
      className="flex items-center justify-between min-w-0 gap-x-4 bg-white p-[20px] mb-[8px]"
      onClick={() => console.log(user.name, "clicked")}>
      <div className="flex items-center gap-x-4">
        <img
          alt=""
          src={user.img ? user.img : defaultUserImg}
          className="h-[52px] w-[52px] flex-none rounded-full bg-gray-50 border border-gray-200"
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
      <RightArrowIcon className="w-[12px] h-[12px]" />
    </div>
  );
}

export default ProfileTab;
