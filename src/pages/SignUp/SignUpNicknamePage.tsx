import { useForm } from "react-hook-form";
import { InputWithLabel } from "@/components/forms/InputWithLabel.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@/routers/routePath.ts";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const SignUpNicknamePage = () => {
  const { register, formState, getValues, setValue, handleSubmit } = useForm<{
    nickName: string;
  }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (formState.errors.nickName?.type === "maxLength") {
      toast("최대 10자까지 입력 가능해요", {
        type: "error",
        closeButton: false,
      });
    }
  }, [formState.errors.nickName]);

  useEffect(() => {
    if (getValues("nickName")) {
      console.log(getValues("nickName"));
    }
  }, [getValues]);
  return (
    <div className="flex flex-col px-[20px] mt-[24px]">
      <h1 className="text-[24px] font-bold mb-[24px]">
        어떤 닉네임으로
        <br /> 활동하시겠어요?
      </h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          navigate(ROUTE_PATH.SIGNUP_INTRODUCE.path);
        })}
      >
        <InputWithLabel
          title="닉네임"
          value="nickName"
          placeholder="닉네임을 입력해주세요."
          register={register("nickName", {
            required: "닉네임을 입력해주세요.",
            minLength: {
              value: 2,
              message: "2 ~ 10자 이내로 입력해주세요.",
            },
            maxLength: {
              value: 10,
              message: "닉네임은 10자 이하여야 합니다.",
            },
            pattern: {
              value: /^[a-zA-Z0-9가-힣]{2,10}$/,
              message: "사용할 수 없는 문자가 포함되어 있어요.",
            },
          })}
          isFormInvalid={Boolean(formState.errors.nickName)}
          hasValue={
            Boolean(formState.isValidating) || Boolean(getValues("nickName"))
          }
          clearValue={() => setValue("nickName", "")}
        />
        {formState.errors.nickName?.message ? (
          <span className="text-[12px] text-red-400">
            {formState.errors.nickName.message}
          </span>
        ) : (
          <span className="text-[12px] text-gray-700">
            영문, 숫자, 한글을 사용하여 2~10자까지 가능해요
          </span>
        )}
        <Button
          type="submit"
          className="w-full h-[52px] bg-green-500 hover:bg-green-400 text-white text-[16px] rounded-[8px] mt-[434px]"
          disabled={!formState.isValid}
        >
          다음
        </Button>
      </form>
    </div>
  );
};
