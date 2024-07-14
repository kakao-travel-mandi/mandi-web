import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWithLabel({
  title,
  value,
  required,
}: {
  title: string;
  value: string;
  required?: boolean;
}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={value} className="text-lg">
        {title}
        <span className="text-red-600 leading-6">{required ? "*" : null}</span>
      </Label>
      <Input
        type={value}
        id={value}
        placeholder={title}
        className=" bg-gray-200 border-gray-300 p-5 placeholder:text-gray-700 text-lg"
      />
    </div>
  );
}
