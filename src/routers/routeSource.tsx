import CoursePage from "@/pages/CoursePage.tsx";
import ScrapPage from "@/pages/ScrapPage.tsx";
import RankingPage from "@/pages/RankingPage.tsx";
import MyPage from "@/pages/MyPage.tsx";
import ConqCoursePage from "@/pages/ConqCoursePage.tsx";
import { MyCommentsComponent } from "@/pages/MyComments.tsx";
import ProfileSettingPage from "@/pages/ProfileSetting.tsx";
import Home from "@/pages/Home.tsx";
import Layout from "@/components/Layout/Layout.tsx";

export const RouteSource = [
  {
    element: <Layout withHeader />,
    children: [
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
    ],
  },
  {
    element: <Layout withFooter />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <Layout withHeader withFooter />,
    children: [
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/ranking",
        element: <RankingPage />,
      },
      {
        path: "/course",
        element: <CoursePage />,
      },
      {
        path: "/scrap",
        element: <ScrapPage />,
      },
    ],
  },
];
