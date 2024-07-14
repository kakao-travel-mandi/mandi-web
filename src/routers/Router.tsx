import ConqCoursePage from "@/pages/ConqCoursePage";
import CoursePage from "@/pages/CoursePage";
import Home from "@/pages/Home";
import MyPage from "@/pages/MyPage";
import RankingPage from "@/pages/RankingPage";
import { Route, Routes } from "react-router-dom";

export const RouteSource = [
  {
    path: "/",
    element: <Home />,
    title: "홈",
  },
  {
    path: "/course",
    element: <CoursePage />,
    title: "코스",
  },
  {
    path: "/conq-course",
    element: <ConqCoursePage />,
    title: "내 코스",
  },
  {
    path: "/ranking",
    element: <RankingPage />,
    title: "랭킹페이지",
  },
  {
    path: "/mypage",
    element: <MyPage />,
    title: "내 정보",
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
