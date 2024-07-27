import trashcanImg from "/assets/pngs/trashcan.png";
import discImg from "/assets/pngs/disc.png";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "@/components/icons";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@/routers/routePath";

function ProfileLeave() {
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const navigation = useNavigate();

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
      <div className="absolute bottom-2">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Button
            variant="ghost"
            className="flex justify-start space-x-2 hover:bg-transparent"
            onClick={() => setIsAgree((pre) => !pre)}
          >
            <CheckCircle
              width={20}
              height={20}
              color={isAgree ? "#00B288" : ""}
            />
            <span className="text-sm text-gray-800">
              위 주의사항을 모두 숙지했고, 탈퇴에 동의합니다
            </span>
          </Button>
        </div>
        <div className="flex w-full space-x-3">
          <Button
            variant="secondary"
            className="w-full py-3.5 bg-gray-100 text-gray-600"
          >
            더 써볼래요
          </Button>
          <div className="w-full">
            <AlertDialog>
              <AlertDialogTrigger
                disabled={isAgree ? false : true}
                className="w-full"
              >
                <Button
                  className={`${
                    isAgree ? "bg-green" : "bg-green-100 "
                  } w-full py-3.5 text-white hover:bg-green-600`}
                  disabled={isAgree ? false : true}
                >
                  탈퇴하기
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white border gap-0 space-y-6 border-none pt-7 pb-4 px-4 max-w-80">
                <div className="space-y-1">
                  <AlertDialogTitle className="text-lg text-gray-800">
                    회원탈퇴
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-sm text-gray-600">
                    정말 회원탈퇴할까요?
                  </AlertDialogDescription>
                </div>
                <div className="flex w-full space-x-3">
                  <AlertDialogCancel className="w-full bg-gray-100 border border-none text-gray-600">
                    취소
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="w-full bg-red text-white"
                    onClick={() => navigation(ROUTE_PATH.LOGIN.path)}
                  >
                    탈퇴하기
                  </AlertDialogAction>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileLeave;
