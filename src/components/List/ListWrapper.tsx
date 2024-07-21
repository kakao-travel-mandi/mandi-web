import ListItem from "./ListItem";
import { ReactElement } from "react";

type SettingListProps = {
  id: number;
  title: string;
  icon: ReactElement | string;
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
      {contents.map((content, index) => (
        <ListItem key={index} title={content.title} show={content.icon} />
      ))}
    </div>
  );
}

export default ListWrapper;
