import CourseDetail, { CourseDataProps } from "./CourseDetail";
import ReviewItem, { ReviewItemProps } from "./ReviewItem";

type Props = {
  course: CourseDataProps;
  review: ReviewItemProps;
  type?: "short" | "default";
};

function CourseReviewItem({ course, review, type = "default" }: Props) {
  return (
    <div className="bg-white px-4 py-5 rounded-xl ">
      <CourseDetail course={course} />
      {/* 리뷰 없으면 후기 작성 버튼 나오는 구현 필요, divider도 없애기 */}
      <hr className="border-gray-100 dark:border-white mb-4"></hr>
      <ReviewItem item={review} type={type} />
    </div>
  );
}

export default CourseReviewItem;
