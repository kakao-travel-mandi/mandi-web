import { ReactNode, useEffect, useState } from "react";

type Props = {
  isShow: boolean;
  onClose: () => void;
  children?: ReactNode;
};

function BottomSheet({ isShow, children, onClose }: Props) {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isShow) {
      setVisible(() => true);
    } else {
      timeoutId = setTimeout(() => setVisible(() => false), 350);
    }
    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [isShow]);

  if (!visible) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="absolute w-full h-full left-0 top-0 bg-gray-800/[.65] z-50">
      <div
        className={`absolute flex flex-col bottom-0 left-0 bg-white w-full min-h-52 px-5 py-6 rounded-t-[32px] font-semibold text-gray-800 gap-4 ${
          isShow ? "animate-sheet-up" : "animate-sheet-down"
        }`}>
        {children}
      </div>
    </div>
  );
}

export default BottomSheet;
