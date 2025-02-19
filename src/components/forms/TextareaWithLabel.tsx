import { Xcircle } from "@/components/icons";
import { clsx } from "clsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Label } from "@/components/ui/label.tsx";
import { UseFormRegisterReturn } from "react-hook-form";
import { forwardRef } from "react";

interface TextareaWithLabelProps {
  title: string;
  placeholder: string;
  value: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
  isFormInvalid?: boolean;
  hasValue?: boolean;
  clearValue?: () => void;
}

export const TextareaWithLabel = forwardRef<
  HTMLTextAreaElement,
  TextareaWithLabelProps
>(
  (
    {
      title,
      placeholder,
      required,
      value,
      register,
      isFormInvalid,
      hasValue,
      clearValue,
    },
    ref
  ) => {
    return (
      <div>
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
          <div className="relative w-full">
            <Textarea
              id={value}
              ref={ref}
              placeholder={placeholder}
              {...register}
              className={clsx(
                "bg-gray-200 border-gray-300 p-5 placeholder:text-gray-500 text-[16px]",
                isFormInvalid && "bg-red-light border-none"
              )}
            />
            {hasValue && (
              <Xcircle
                width={20}
                height={20}
                className="absolute right-2 top-9 cursor-pointer"
                onClick={() => clearValue && clearValue()}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
);

TextareaWithLabel.displayName = "TextareaWithLabel";
