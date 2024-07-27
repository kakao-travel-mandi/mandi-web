import { useState } from "react";
import BottomSheet from "./BottomSheet";
import { DownArrow } from "../icons";
import CheckIcon from "@/components/icons/CheckIcon.tsx";

export type SelectionProps = {
  DEFAULT: number;
  [id: number]: string;
};

type Props = {
  items: SelectionProps;
  setItem: (item: number) => void;
};

function SelectChip({ items, setItem }: Props) {
  const [selected, setSelected] = useState<number>(
    items.DEFAULT || 1
  );
  const [isShow, setIsShow] = useState<boolean>(false);

  const options = Object.entries(items)
    .filter(([key]) => key !== "DEFAULT")
    .map(([key, value]) => ({
      key: parseInt(key, 10),
      value: value as string,
    }));

  const handleSheetClose = () => {
    setIsShow(() => false);
  };

  const handleSelected = (key: number) => {
    setSelected(key);
    setItem(selected);
    handleSheetClose();
  };

  return (
    <>
      <div
        onClick={() => setIsShow((pre) => !pre)}
        className="inline-flex gap-1 whitespace-nowrap items-center bg-white text-gray-700 font-semibold rounded-full px-2.5 py-1.5 text-xs"
      >
        <p>{items[selected]}</p>
        <DownArrow className="w-[14px] h-[14px] fill-gray-700" />
      </div>
      <BottomSheet
        isShow={isShow}
        onClose={handleSheetClose}
        children={
          <>
            {options.map(({ key, value }) => (
              <button
                key={key}
                onClick={() => handleSelected(key)}
                className="text-left flex justify-between"
              >
                {value}
                {selected == key && <CheckIcon />}
              </button>
            ))}
          </>
        }
      />
    </>
  );
}

export default SelectChip;
