import { dummyUser as user } from "@/pages/MyPage";
import defaultUserImg from "/assets/pngs/default.png";
import { CameraIcon } from "lucide-react";
import { InputWithLabel } from "@/components/forms/InputWithLabel";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button.tsx";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ProfileSettingPage() {
  const { register, handleSubmit, formState } = useForm<{
    nickName: string;
    introduce: string;
  }>();

  useEffect(() => {
    if (formState.errors.nickName?.type === "maxLength") {
      toast("최대 10자까지 입력 가능해요.", {
        type: "error",
        closeButton: false,
      });
    }
  }, [formState.errors.nickName]);
  return (
    <div className="h-full flex flex-col items-center px-4 py-10 bg-white">
      <div className="w-full flex flex-col justify-center items-center gap-7">
        <div className="max-w-fit relative flex items-center gap-x-4">
          <img
            alt=""
            src={user.img ? user.img : defaultUserImg}
            className="h-[100px] w-[100px] flex-none rounded-lg bg-gray-50 border border-gray-200"
          />
          <div className="bg-black absolute -right-2 -bottom-2 w-7 h-7 rounded-full flex justify-center items-center">
            <CameraIcon size={20} fill="white" />
          </div>
        </div>
        <form
          className="w-full flex flex-col gap-[28px]"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <div className="flex flex-col gap-[8px]">
            <InputWithLabel
              title="닉네임"
              value="nickName"
              required
              register={register("nickName", {
                required: "닉네임을 입력해주세요.",
                minLength: {
                  value: 2,
                  message: "닉네임은 2자 이상이어야 합니다.",
                },
                maxLength: {
                  value: 10,
                  message: "닉네임은 10자 이하여야 합니다.",
                },
              })}
              isFormInvalid={Boolean(formState.errors.nickName)}
            />
            <span className="text-[12px] text-red-400">
              {formState.errors.nickName?.message}
            </span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <InputWithLabel
              title="한 줄 소개"
              value="introduce"
              register={register("introduce", {
                maxLength: {
                  value: 40,
                  message: "한 줄 소개는 40자 이하여야 합니다.",
                },
              })}
              isFormInvalid={Boolean(formState.errors.introduce)}
            />
            <span>{formState.errors.introduce?.message}</span>
          </div>
          <Button
            className="flex justify-center items-center w-[90%] h-[52px] text-white rounded-lg bg-green-500 hover:bg-green-400 hover:text-white"
            variant="ghost"
          >
            저장
          </Button>
        </form>
      </div>
    </div>
  );
}
