import { useState } from "react";
import BottomSheet from "./BottomSheet";
import { CheckIcon, DownArrow } from "../icons";

export type SelectionProps = {
  DEFAULT: number;
  [id: number]: string;
};

type Props = {
  items: SelectionProps;
};

function SelectChip({ items }: Props) {
  const [selected, setSelected] = useState<string>(
    items[items.DEFAULT] || items[1],
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

  const handleSelected = (value: string) => {
    setSelected(value);
    handleSheetClose();
  };

  return (
    <>
      <div
        onClick={() => setIsShow((pre) => !pre)}
        className="inline-flex gap-1 whitespace-nowrap items-center bg-white text-gray-700 font-semibold rounded-full px-2.5 py-1.5 text-xs">
        <p>{selected}</p>
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
                onClick={() => handleSelected(value)}
                className="text-left flex justify-between">
                {value}
                {selected == value && <CheckIcon />}
              </button>
            ))}
          </>
        }
      />
    </>
  );
}

export default SelectChip;
