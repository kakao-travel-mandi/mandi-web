import { isValidElement } from "react";
import { useNavigate } from "react-router-dom";
import { SettingListProps } from "./ListWrapper";
import { ROUTE_PATH } from "@/routers/routePath";

type Props = {
  content: SettingListProps;
  type?: "routes" | "open";
  isClicked?: (state: boolean) => void;
};

function ListItem({ content, type = "routes", isClicked }: Props) {
  const navigation = useNavigate();

  const handleClickItem = () => {
    if (type == "open") {
      if (isClicked) isClicked(true);
    } else {
      if (content.path) navigation(ROUTE_PATH[content.path].path);
    }
  };

  return (
    <div
      className="flex justify-between items-center px-[20px] py-[10px] mb-[2px]"
      onClick={handleClickItem}
    >
      <p className="text-gray-800 text-sm">{content.title}</p>
      <div
        className={`text-gray-400 ${
          isValidElement(content.icon) ? "w-[12px] h-[12px]" : "text-right"
        }`}
      >
        {content.icon}
      </div>
    </div>
  );
}

export default ListItem;
