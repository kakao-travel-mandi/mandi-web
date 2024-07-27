import { RouteKey } from "@/routers/routePath";
import ListItem from "./ListItem";
import { ReactElement } from "react";

export type SettingListProps = {
  id: number;
  title: string;
  icon: ReactElement | string;
  path?: RouteKey;
  onClick?: () => void;
};

type Props = {
  title: string;
  icon: string;
  contents: SettingListProps[];
};

function ListWrapper({ title, icon, contents }: Props) {
  return (
    <div className="bg-white">
      <div className="flex px-[20px] py-[10px] items-center">
        <img src={icon} alt="icon" className="pr-2 size-[18px] box-content" />
        <p className="text-gray-800 font-semibold">{title}</p>
      </div>
      {contents.map((content) => (
        <ListItem content={content} />
      ))}
    </div>
  );
}

export default ListWrapper;
