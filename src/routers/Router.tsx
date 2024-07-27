import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout/Layout.tsx";
import { ROUTE_PATH } from "@/routers/routePath.ts";
import ConqCoursePage from "@/pages/ConqCoursePage.tsx";
import { MyCommentsComponent } from "@/pages/MyComments.tsx";
import BackButton from "@/components/shared/BackButton.tsx";
import ProfileSettingPage from "@/pages/ProfileSetting.tsx";
import Home from "@/pages/Home.tsx";
import { Notification } from "@/components/icons";
import MyPage from "@/pages/MyPage.tsx";
import RankingPage from "@/pages/RankingPage.tsx";
import CoursePage from "@/pages/CoursePage.tsx";
import ScrapPage from "@/pages/ScrapPage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import {
  SignUpCompletePage,
  SignUpIntroducePage,
  SignUpNicknamePage,
  SignUpPage,
} from "@/pages/SignUp";
import Privates from "@/pages/Privates";
import Conditions from "@/pages/Conditions";
import MyBadge from "@/pages/MyBadge";
import LoginInfo from "@/pages/LoginInfo";
import ProfileLeave from "@/pages/ProfileLeave";

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTE_PATH.LOGIN.path,
        element: <LoginPage />,
      },
      {
        path: ROUTE_PATH.SIGNUP.path,
        element: <SignUpPage />,
      },
      {
        path: ROUTE_PATH.SIGNUP_COMPLETE.path,
        element: <SignUpCompletePage />,
      },
    ],
  },
  {
    element: <Layout withHeader />,
    children: [
      {
        path: ROUTE_PATH.CONQUERED_COURSE.path,
        element: <ConqCoursePage />,
      },
      {
        path: ROUTE_PATH.MY_COMMENTS.path,
        element: <MyCommentsComponent />,
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
      {
        path: ROUTE_PATH.SIGNUP_NICKNAME.path,
        element: <SignUpNicknamePage />,
      },
      {
        path: ROUTE_PATH.SIGNUP_INTRODUCE.path,
        element: <SignUpIntroducePage />,
      },
      {
        path: ROUTE_PATH.BADGE.path,
        element: <MyBadge />,
      },
      {
        path: ROUTE_PATH.SERVICE_POLICY.path,
        element: <Conditions />,
      },
      {
        path: ROUTE_PATH.PRIVACY_POLICY.path,
        element: <Privates />,
      },
      {
        path: ROUTE_PATH.LOGIN_INFO.path,
        element: <LoginInfo />,
      },
      {
        path: ROUTE_PATH.PROFILE_LEAVE.path,
        element: <ProfileLeave />,
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
]);

export default Router;
