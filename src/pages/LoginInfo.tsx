import ListItem from "@/components/List/ListItem";
import googleLogo from "/assets/pngs/google.png";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

function LoginInfo() {
  return (
    <div>
      <div className="mt-2.5">
        <div className="py-2.5 px-5 space-y-2">
          <p className="text-gray-600 text-xs">로그인 계정</p>
          <div className="flex items-center bg-gray-100 rounded-lg p-3 space-x-2">
            <img src={googleLogo} alt="snsLogo" width="24" height="24" />
            <p className="text-gray-800 text-base">user@email.com</p>
          </div>
        </div>
        <AlertDialog>
          <AlertDialogTrigger>
            <ListItem content={{ id: 1, title: "로그아웃", icon: "" }} />
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white border gap-0 space-y-6 border-none pt-7 pb-4 px-4 max-w-80">
            <div className="space-y-1">
              <AlertDialogTitle className="text-lg text-gray-800">
                로그아웃
              </AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-gray-600">
                정말 로그아웃할까요?
              </AlertDialogDescription>
            </div>
            <div className="flex w-full space-x-3">
              <AlertDialogCancel className="w-full bg-gray-100 border border-none text-gray-600">
                취소
              </AlertDialogCancel>
              <AlertDialogAction className="w-full bg-red text-white">
                로그아웃
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialog>
        <ListItem
          content={{
            id: 1,
            title: "회원탈퇴",
            path: "PROFILE_LEAVE",
            icon: "",
          }}
        />
      </div>
    </div>
  );
}

export default LoginInfo;
