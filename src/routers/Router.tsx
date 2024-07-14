import CoursePage from "@/pages/CoursePage";
import Home from "@/pages/Home";
import MyCoursePage from "@/pages/MyCoursePage";
import MyPage from "@/pages/MyPage";
import RankingPage from "@/pages/RankingPage";
import ConqCoursePage from "@/pages/ConqCoursePage";
import { Route, Routes } from "react-router-dom";

export const RouteSource = [
  {
    path: "/",
    element: <Home />,
    title: "홈",
    isMain: true,
  },
  {
    path: "/course",
    element: <CoursePage />,
    title: "코스",
    isMain: true,
  },
  {
    path: "/mycourse",
    element: <MyCoursePage />,
    title: "내 코스",
    isMain: true,
  },
  {
    path: "/ranking",
    element: <RankingPage />,
    title: "랭킹페이지",
    isMain: true,
  },
  {
    path: "/mypage",
    element: <MyPage />,
    title: "내 정보",
    isMain: true,
  },
  {
    path: "/mypage/conq-course",
    element: <ConqCoursePage />,
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
