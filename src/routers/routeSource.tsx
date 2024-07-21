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
import Conditions from "@/pages/Conditions";
import Privates from "@/pages/Privates";
import MyBadge from "@/pages/MyBadge";
import LoginInfo from "@/pages/LoginInfo";

export const RouteSource = [
  {
    element: <Layout withHeader />,
    children: [
      {
        path: "/mypage/conq-course",
        element: <ConqCoursePage />,
        title: "정복 코스 목록",
      },
      {
        path: "/mypage/mycomments",
        element: <MyCommentsComponent />,
        title: "나의 코스 후기",
      },
    ],
  },
  {
    element: <Layout withHeader headerOptions={{ leftUI: <BackButton /> }} />,
    children: [
      {
        path: "/mypage/profile-setting",
        element: <ProfileSettingPage />,
      },
      {
        path: "/mypage/badge",
        element: <MyBadge />,
        title: "나의 배지",
      },
      {
        path: "/mypage/service-policy",
        element: <Conditions />,
        title: "이용 약관",
      },
      {
        path: "/mypage/privacy-policy",
        element: <Privates />,
        title: "개인정보 처리방침",
      },
      {
        path: "/mypage/login-info",
        element: <LoginInfo />,
        title: "로그인 정보",
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
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
  {
    element: <Layout withHeader withFooter />,
    children: [
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
