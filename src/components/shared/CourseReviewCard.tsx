import CourseDetail, { CourseDataProps } from "./CourseDetail";
import ReviewItem, { ReviewItemProps } from "./ReviewItem";

type Props = {
  course: CourseDataProps;
  review: ReviewItemProps;
  type?: "short" | "default";
};

function CourseReviewCard({ course, review, type = "default" }: Props) {
  return (
    <div className="bg-white px-4 py-5 rounded-xl ">
      <CourseDetail course={course} />
      {/* 리뷰 없으면 후기 작성 버튼 나오는 구현 필요, divider도 없애기 */}
      <hr className="border-gray-100 dark:border-white mb-4"></hr>
      {type == "short" ? (
        <div className="text-xs flex flex-col gap-y-1">
          <div className="flex gap-x-6">
            <p className="text-gray-700">정복 일자</p>
            <p className="text-gray-600">2024.06.04 12:00</p>
          </div>
          <div className="flex gap-x-6">
            <p className="text-gray-700">현재 순위</p>
            <p className="text-gray-600">1</p>
          </div>
          <div className="flex gap-x-6">
            <p className="text-gray-700">작성 후기</p>
            <ReviewItem item={review} type={type} />
          </div>
        </div>
      ) : (
        <ReviewItem item={review} type={type} />
      )}
    </div>
  );
}

export default CourseReviewCard;
