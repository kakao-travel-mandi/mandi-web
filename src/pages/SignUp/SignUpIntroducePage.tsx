import { ROUTE_PATH } from "@/routers/routePath.ts";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { TextareaWithLabel } from "@/components/forms/TextareaWithLabel.tsx";

export const SignUpIntroducePage = () => {
  const navigate = useNavigate();
  const { register, formState, getValues, setValue, handleSubmit } = useForm<{
    introduce: string;
  }>();

  useEffect(() => {
    if (formState.errors.introduce?.type === "maxLength") {
      toast("최대 40자까지 입력 가능해요", {
        type: "error",
        closeButton: false,
      });
    }
  }, [formState.errors.introduce]);

  const handleSkipInput = () => {
    navigate(ROUTE_PATH.SIGNUP_COMPLETE.path);
  };

  return (
    <div className="flex flex-col px-[20px] mt-[24px]">
      <h1 className="text-[24px] font-bold mb-[24px]">
        어떤 사람인지
        <br /> 궁금해요!
      </h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          navigate(ROUTE_PATH.SIGNUP_COMPLETE.path);
        })}
      >
        <TextareaWithLabel
          title="한 줄 소개"
          value="introduce"
          placeholder="짧은 글로 자신을 소개해보세요 (공백 포함 최대 40자)"
          register={register("introduce", {
            required: {
              value: true,
              message: "한 줄 소개를 입력해주세요.",
            },
            maxLength: {
              value: 40,
              message: "최대 40자까지 입력 가능해요.",
            },
          })}
          isFormInvalid={Boolean(formState.errors.introduce)}
          hasValue={
            Boolean(formState.isValidating) || Boolean(getValues("introduce"))
          }
          clearValue={() => setValue("introduce", "")}
        />
        <span className="text-[12px] text-red-400">
          {formState.errors.introduce?.message}
        </span>
        <div className="flex mt-[434px] gap-[11px]">
          <Button
            type="button"
            className="w-full h-[52px] rounded-[8px] bg-gray-100 hover:bg-gray-50 text-gray-600"
            onClick={handleSkipInput}
          >
            건너 뛰기
          </Button>
          <Button
            type="submit"
            className="w-full h-[52px] bg-green-500 hover:bg-green-400 text-white text-[16px] rounded-[8px]"
            disabled={!formState.isValid}
          >
            다음
          </Button>
        </div>
      </form>
    </div>
  );
};
