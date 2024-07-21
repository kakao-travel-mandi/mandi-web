import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Check, CheckCircle } from "@/components/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@/routers/routePath.ts";

const AgreeTermsBottomSheet = () => {
  const navigate = useNavigate();
  const [isServiceTermAgreed, setIsServiceTermAgreed] = useState(false);
  const [isPrivacyPolicyAgreed, setIsPrivacyPolicyAgreed] = useState(false);

  const handleClickAllTermsAgreed = () => {
    if (!isServiceTermAgreed || !isPrivacyPolicyAgreed) {
      setIsServiceTermAgreed(true);
      setIsPrivacyPolicyAgreed(true);
    }
    if (isServiceTermAgreed && isPrivacyPolicyAgreed) {
      setIsServiceTermAgreed(false);
      setIsPrivacyPolicyAgreed(false);
    }
  };

  return (
    <Drawer open={true}>
      <DrawerContent className="mx-auto w-[390px] h-[390px] rounded-tl-[32px] rounded-tr-[32px]">
        <DrawerHeader className="mt-[24px]">
          <DrawerTitle className="text-[20px] font-semibold">
            만디를 사용하기 위해
            <br /> 약관에 동의해주세요
          </DrawerTitle>
          <DrawerDescription className="hidden" />
          <Button
            variant="ghost"
            className="bg-gray-100 flex justify-start gap-[12px] px-[12px] py-[16px] rounded-[10px] mt-[16px]"
            onClick={handleClickAllTermsAgreed}
          >
            <CheckCircle
              width={24}
              height={24}
              color={
                isServiceTermAgreed && isPrivacyPolicyAgreed ? "#00B288" : ""
              }
            />
            <span className="text-[16px]">모두 동의합니다</span>
          </Button>
          {/* 이용약관 동의 섹션 */}
          <div className="flex flex-col gap-[16px] mt-[24px]">
            <div className="flex items-center px-[16px] justify-between">
              <div
                className="flex gap-[16px] cursor-pointer"
                onClick={() => setIsServiceTermAgreed(!isServiceTermAgreed)}
              >
                <Check
                  width={24}
                  height={24}
                  color={isServiceTermAgreed ? "#00B288" : ""}
                />
                <span className="text-[14px] text-gray-700">
                  (필수) 서비스 이용약관 동의
                </span>
              </div>
              <span className="text-[11px] text-gray-400 cursor-pointer">
                보기
              </span>
            </div>
            <div className="flex items-center px-[16px] justify-between">
              <div
                className="flex gap-[16px] cursor-pointer"
                onClick={() => setIsPrivacyPolicyAgreed(!isPrivacyPolicyAgreed)}
              >
                <Check
                  width={24}
                  height={24}
                  color={isPrivacyPolicyAgreed ? "#00B288" : ""}
                />
                <span className="text-[14px] text-gray-700">
                  (필수) 개인정보 수집 및 이용 동의
                </span>
              </div>
              <span className="text-[11px] text-gray-400 cursor-pointer">
                보기
              </span>
            </div>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <Button
            className="bg-green-500 rounded-[8px] py-[15px] hover:bg-green-400 disabled:bg-green-200"
            disabled={!isServiceTermAgreed || !isPrivacyPolicyAgreed}
            onClick={() => navigate(ROUTE_PATH.SIGNUP_NICKNAME.path)}
          >
            동의하고 시작하기
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AgreeTermsBottomSheet;
