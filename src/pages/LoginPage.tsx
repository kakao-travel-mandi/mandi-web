import {
  GoogleLogo,
  KakaoLogo,
  MandiLogo,
  MandiTitle,
} from "@/components/icons";
import { Button } from "@/components/ui/button.tsx";

const LoginPage = () => {
  return (
    <div className="w-full flex flex-col px-[16px]">
      <div className="flex flex-col gap-[11px] items-center mt-[180px] mb-[314px]">
        <MandiLogo width={67} height={52} />
        <MandiTitle width={129} height={35} />
      </div>
      <div className="flex flex-col items-center gap-[12px]">
        <span className="text-[12px] text-gray-600">
          SNS 계정으로 간편 가입하기
        </span>
        <div className="w-full flex flex-col gap-[6px]">
          <Button
            className="w-full flex h-[52px] items-center text-[16px] font-semibold border border-[#E1E1E1] rounded-[12px] px-[20px] py-[14px]"
            variant="ghost"
          >
            <GoogleLogo width={20} height={20} />
            <span className="w-full">Google로 로그인</span>
          </Button>
          <Button
            className="bg-[#FEE500] hover:bg-[#FEE500] w-full flex h-[52px] items-center text-[16px] font-semibold rounded-[12px] px-[20px] py-[14px]"
            variant="ghost"
          >
            <KakaoLogo width={20} height={20} />
            <span className="w-full">카카오톡으로 로그인</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
