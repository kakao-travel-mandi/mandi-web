import ListItem from "@/components/List/ListItem";
import googleLogo from "/assets/pngs/google.png";

function LoginInfo() {
  return (
    <div className="mt-2.5">
      <div className="py-2.5 px-5 space-y-2">
        <p className="text-gray-600 text-xs">로그인 계정</p>
        <div className="flex items-center bg-gray-100 rounded-lg p-3 space-x-2">
          <img src={googleLogo} alt="snsLogo" width="24" height="24" />
          <p className="text-gray-800 text-base">user@email.com</p>
        </div>
      </div>
      <div>
        <ListItem content={{ id: 1, title: "로그아웃", path: "", icon: "" }} />
        <ListItem content={{ id: 1, title: "회원탈퇴", path: "/leave", icon: "" }} />
      </div>
    </div>
  );
}

export default LoginInfo;
