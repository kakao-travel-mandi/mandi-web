import Home from "@/pages/Home.tsx";
import {BookmarkIcon, HouseIcon, MapIcon, SparklesIcon, UserRoundIcon} from "lucide-react";
import CoursePage from "@/pages/CoursePage.tsx";
import ScrapPage from "@/pages/ScrapPage.tsx";
import RankingPage from "@/pages/RankingPage.tsx";
import MyPage from "@/pages/MyPage.tsx";
import ConqCoursePage from "@/pages/ConqCoursePage.tsx";
import {MyCommentsComponent} from "@/pages/MyComments.tsx";
import ProfileSettingPage from "@/pages/ProfileSetting.tsx";

export const RouteSource = [
  {
    path: "/",
    element: <Home />,
    title: "홈",
    icon: <HouseIcon size={28} strokeWidth="2.5" />,
  },
  {
    path: "/course",
    element: <CoursePage />,
    title: "코스",
    icon: <MapIcon size={28} strokeWidth="2.5" />,
  },
  {
    path: "/scrap",
    element: <ScrapPage />,
    title: "스크랩",
    icon: <BookmarkIcon size={28} strokeWidth="2.5" />,
  },
  {
    path: "/ranking",
    element: <RankingPage />,
    title: "랭킹페이지",
    icon: <SparklesIcon size={28} strokeWidth="2.5" />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
    title: "내 정보",
    icon: <UserRoundIcon size={28} strokeWidth="2.5" />,
  },
  {
    path: "/mypage/conq-course",
    element: <ConqCoursePage />,
    title: "정복한 코스 목록",
  },
  {
    path: "/mypage/mycomments",
    element: <MyCommentsComponent />,
    title: "나의 코스 후기",
  },
  {
    path: "/mypage/profile-setting",
    element: <ProfileSettingPage />,
    title: "프로필 변경",
  },
];