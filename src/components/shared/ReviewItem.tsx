import Chip, { ChipProps } from "./Chip";

export type ReviewItemProps = {
  rate: number;
  content: string;
  chips: ChipProps[];
};

type Props = {
  item: ReviewItemProps;
  type?: "default" | "short";
};

/**
 * 작성된 리뷰를 보여주는 컴포넌트입니다.
 * @param {string} type 별점만 사용하는 경우 short 입력
 */
function ReviewItem({ item, type = "default" }: Props) {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass =
        i <= item.rate ? "text-yellow-300" : "text-gray-100 dark:text-gray-500";

      stars.push(
        <svg
          className={`w-4 h-4 ${starClass}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
          key={i}
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-0.5">{renderStars()}</div>
      {type == "default" && (
        <>
          <p className="text-gray-700 text-sm line-clamp-2">{item.content}</p>
          <div className="flex space-x-1">
            {item.chips.slice(0, 2).map((chip, idx) => (
              <Chip icon={chip.icon} label={chip.label} key={idx} />
            ))}
            {item.chips.length > 2 && (
              <Chip label={`+${item.chips.length - 2}`} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ReviewItem;
