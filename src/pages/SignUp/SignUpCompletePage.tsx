import { Confetti } from "@/components/icons";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@/routers/routePath.ts";

export const SignUpCompletePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col px-[20px] items-center">
      <div className="flex flex-col items-center mt-[260px]">
        <Confetti width={80} height={80} />
        <h1 className="text-[14px] text-green-500 font-semibold">가입완료</h1>
        <h2 className="text-[24px] font-bold mt-[4px]">김만디님, 환영해요!</h2>
      </div>
      <Button
        className="bg-green-500 hover:bg-green-400 w-full h-[52px] rounded-[8px] mt-[265px]"
        onClick={() => navigate(ROUTE_PATH.HOME.path)}
      >
        만디 시작하기
      </Button>
    </div>
  );
};
