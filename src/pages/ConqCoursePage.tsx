import ConqCourseInfo from "@/components/shared/ConqCourseInfo";
// import SelectChip from "@/components/shared/SelectChip";
import mountainImg from "/assets/pngs/mountain.png";
import CourseReviewCard from "@/components/shared/CourseReviewCard";
import ThumbImg from "/assets/pngs/Rectangle.png";
// import { useEffect, useState } from "react";

const dummyCourse = {
  name: "신선대 둘레길",
  start: "신선대",
  end: "봉오리산",
  time: "0:20",
  length: "0.875",
  thumb: ThumbImg,
};

const dummyReview = {
  rate: 3,
  content:
    "부산 용호동에 있는 신선대 산책로가 잘되어 있어서 전망대까지 산책하기 좋은 곳이에요. 가는길에 벚꽃나무도 많고 봄에 가면 정말 좋기때문에 추천합니다.",
  chips: [
    {
      icon: mountainImg,
      label: "산책로가 잘 되어있어요",
    },
    {
      icon: mountainImg,
      label: "붐비지 않아요",
    },
    {
      icon: mountainImg,
      label: "숨겨져 있어요",
    },
  ],
};

const dummyList = [
  {
    id: 0,
    created: "1",
    course: dummyCourse,
    review: dummyReview,
  },
  {
    id: 1,
    created: "2",
    course: dummyCourse,
    review: dummyReview,
  },
  {
    id: 2,
    created: "3",
    course: dummyCourse,
    review: dummyReview,
  },
];

function ConqCoursePage() {
  // const [sortBy, setSortBy] = useState<number>(1);
  // const [showDataList, setShowDataList] = useState(dummyList);

  // useEffect(() => {
  //   let sortedList = [...dummyList];

  //   switch (sortBy) {
  //     case 1:
  //       // sort 기준과 데이터 형식에 따른 변경 필요
  //       sortedList.sort((a, b) => parseInt(a.created) - parseInt(b.created));
  //       break;
  //     default:
  //       sortedList = dummyList;
  //   }

  //   setShowDataList(sortedList);
  // }, [sortBy]);

  // const selectItems = {
  //   DEFAULT: 1,
  //   1: "정복 일자 순",
  //   2: "코스 거리 순",
  //   3: "순위 높은 순",
  //   4: "가나다 순",
  // };

  return (
    <div>
      <ConqCourseInfo />
      <div className="px-5 py-3 bg-gray-100">
        {/* <SelectChip items={selectItems} setItem={setSortBy} /> */}
        <div className="mt-3 space-y-5">
          {dummyList.map((item) => (
            <CourseReviewCard
              key={item.id}
              course={item.course}
              review={item.review}
              type="short"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConqCoursePage;
