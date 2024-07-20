import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forwardRef } from "react";

interface InputWithLabelProps {
  title: string;
  value: string;
  required?: boolean;
}

export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ title, required, value }, ref) => {
    return (
      <div className="grid w-full max-w-xl items-center gap-1.5">
        <Label htmlFor={value} className="text-lg">
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
          className=" bg-gray-200 border-gray-300 p-5 placeholder:text-gray-700 text-lg"
        />
      </div>
    );
  }
);
