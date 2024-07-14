export type ChipProps = {
  icon?: string;
  label: string;
};

/**
 * 연회색 Chip 컴포넌트입니다.
 * @param {string} icon 아이콘 이미지 url
 * @param {string} label 텍스트
 */
function Chip({ icon, label }: ChipProps) {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-1 space-x-1 rounded text-nowrap">
      {icon && <img src={icon} alt="icon" className="w-4 h-4" />}
      <p className="text-gray-700 text-xs">{label}</p>
    </div>
  );
}

export default Chip;
