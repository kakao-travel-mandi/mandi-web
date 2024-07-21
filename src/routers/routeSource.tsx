import CoursePage from "@/pages/CoursePage.tsx";
import ScrapPage from "@/pages/ScrapPage.tsx";
import RankingPage from "@/pages/RankingPage.tsx";
import MyPage from "@/pages/MyPage.tsx";
import ConqCoursePage from "@/pages/ConqCoursePage.tsx";
import { MyCommentsComponent } from "@/pages/MyComments.tsx";
import Home from "@/pages/Home.tsx";
import Layout from "@/components/Layout/Layout.tsx";
import ProfileSettingPage from "@/pages/ProfileSetting.tsx";
import BackButton from "@/components/shared/BackButton.tsx";
import { Notification } from "@/components/icons";
import { ROUTE_PATH } from "@/routers/routePath.ts";

export const RouteSource = [
  {
    element: <Layout withHeader />,
    children: [
      {
        path: ROUTE_PATH.CONQUERED_COURSE.path,
        element: <ConqCoursePage />,
        title: "정복한 코스 목록",
      },
      {
        path: ROUTE_PATH.MY_COMMENTS.path,
        element: <MyCommentsComponent />,
        title: "나의 코스 후기",
      },
    ],
  },
  {
    element: <Layout withHeader headerOptions={{ leftUI: <BackButton /> }} />,
    children: [
      {
        path: ROUTE_PATH.PROFILE_SETTING.path,
        element: <ProfileSettingPage />,
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
    element: (
      <Layout
        withHeader
        headerOptions={{
          rightUI: <Notification width={16} height={18} />,
        }}
        withFooter
      />
    ),
    children: [
      {
        path: ROUTE_PATH.MY_PAGE.path,
        element: <MyPage />,
      },
    ],
  },
  {
    element: <Layout withHeader withFooter />,
    children: [
      {
        path: ROUTE_PATH.RANKING.path,
        element: <RankingPage />,
      },
      {
        path: ROUTE_PATH.COURSE.path,
        element: <CoursePage />,
      },
      {
        path: ROUTE_PATH.SCRAP.path,
        element: <ScrapPage />,
      },
    ],
  },
];
