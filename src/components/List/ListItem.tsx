import { isValidElement } from "react";
import { useNavigate } from "react-router-dom";
import { SettingListProps } from "./ListWrapper";

type Props = {
  content: SettingListProps;
};

function ListItem({ content }: Props) {
  const navigation = useNavigate();

  return (
    <div
      className="flex justify-between items-center px-[20px] py-[10px] mb-[2px]"
      onClick={() => navigation(content.path)}>
      <p className="text-gray-800 text-sm">{content.title}</p>
      <div
        className={`text-gray-400 ${
          isValidElement(content.icon) ? "w-[12px] h-[12px]" : "text-right"
        }`}>
        {content.icon}
      </div>
    </div>
  );
}

export default ListItem;
