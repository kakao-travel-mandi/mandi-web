import { ReactElement, isValidElement } from "react";

type Props = {
  title: string;
  show: string | ReactElement;
};

function ListItem({ title, show }: Props) {
  return (
    <div
      className="flex justify-between items-center px-[20px] py-[10px] mb-[2px] hover:bg-gray-100 cursor-pointer duration-200"
      onClick={() => console.log(title, "clicked")}>
      <p className="text-gray-800">{title}</p>
      <div
        className={`text-gray-400 ${
          isValidElement(show) ? "w-[12px] h-[12px]" : "text-right"
        }`}>
        {show}
      </div>
    </div>
  );
}

export default ListItem;
