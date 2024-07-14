import Home from "@/pages/Home";
import CoursePage from "@/pages/CoursePage";
import ScrapPage from "@/pages/ScrapPage";
import RankingPage from "@/pages/RankingPage";
import MyPage from "@/pages/MyPage";
import ConqCoursePage from "@/pages/ConqCoursePage";
import { Route, Routes } from "react-router-dom";
import {
  BookmarkIcon,
  HouseIcon,
  MapIcon,
  SparklesIcon,
  UserRoundIcon,
} from "lucide-react";
import { MyCommentsComponent } from "@/pages/MyComments";
import ProfileSettingPage from "@/pages/ProfileSetting";

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
    title: "정복한 코스 목록",
  },
  {
    path: "/mypage/profile-setting",
    element: <ProfileSettingPage />,
    title: "정복한 코스 목록",
  },
];

const Router = () => {
  return (
    <Routes>
      {RouteSource.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Router;
