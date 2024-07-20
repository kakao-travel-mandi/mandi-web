import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { clsx } from "clsx";

interface InputWithLabelProps {
  title: string;
  value: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
  isFormInvalid?: boolean;
}

export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ title, required, value, register, isFormInvalid }, ref) => {
    return (
      <div className="flex flex-col w-full max-w-xl items-start gap-1.5">
        <Label
          htmlFor={value}
          className={clsx(
            "text-[12px] text-gray-700",
            isFormInvalid && "text-red-600"
          )}
        >
          {title}
          <span className="text-red-600 leading-6">
            {required ? "*" : null}
          </span>
        </Label>
        <Input
          type={value}
          id={value}
          ref={ref}
          placeholder={title}
          {...register}
          className={clsx(
            "bg-gray-200 border-gray-300 p-5 placeholder:text-gray-500 text-[16px]",
            isFormInvalid && "bg-red-light border-none"
          )}
        />
      </div>
    );
  }
);
