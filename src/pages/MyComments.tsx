import CourseReviewCard from "@/components/shared/CourseReviewCard";
import mountainImg from "/assets/pngs/mountain.png";
import ThumbImg from "/assets/pngs/Rectangle.png";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabButtonComponent } from "@/components/Layout/TabButton";

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
    course: dummyCourse,
    review: dummyReview,
  },
  {
    id: 1,
    course: dummyCourse,
    review: dummyReview,
  },
  {
    id: 2,
    course: dummyCourse,
    review: dummyReview,
  },
];

export const MyCommentsComponent = () => {
  return (
    <Tabs defaultValue="nonComment" className="w-full">
      <TabsList className="grid w-full h-full grid-cols-2 bg-white p-0">
        <TabButtonComponent value="nonComment">후기 작성(0)</TabButtonComponent>
        <TabButtonComponent value="comment">작성한 후기(3)</TabButtonComponent>
      </TabsList>
      <TabsContent className="flex flex-col gap-3 p-3 bg-gray-100" value="nonComment">
        {dummyList.map((item) =>
          dummyList.length > 0 ? (
            <CourseReviewCard
              key={item.id}
              course={item.course}
              review={item.review}
              type="default"
            />
          ) : null,
        )}
      </TabsContent>
      <TabsContent className="flex flex-col gap-3 p-3 bg-gray-100" value="comment">
        {dummyList.map((item) =>
          dummyList.length > 0 ? (
            <CourseReviewCard
              key={item.id}
              course={item.course}
              review={item.review}
              type="default"
            />
          ) : null,
        )}
      </TabsContent>
    </Tabs>
  );
};
