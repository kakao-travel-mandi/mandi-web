
import CoursePage from "@/pages/CoursePage.tsx";
import ScrapPage from "@/pages/ScrapPage.tsx";
import RankingPage from "@/pages/RankingPage.tsx";
import MyPage from "@/pages/MyPage.tsx";
import ConqCoursePage from "@/pages/ConqCoursePage.tsx";
import {MyCommentsComponent} from "@/pages/MyComments.tsx";
import ProfileSettingPage from "@/pages/ProfileSetting.tsx";
import Home from "@/pages/Home.tsx";
import {Bookmark, Ranking, UserMono, Map, HomeIcon} from "@/components/icons";

export const RouteSource = [
  {
    path: "/",
    element: <Home />,
    title: "홈",
    icon: <HomeIcon width={24} height={24} />
  },
  {
    path: "/course",
    element: <CoursePage />,
    title: "코스",
    icon: <Map width={24} height={24} />,
  },
  {
    path: "/scrap",
    element: <ScrapPage />,
    title: "스크랩",
    icon: <Bookmark width={24} height={24} />,
  },
  {
    path: "/ranking",
    element: <RankingPage />,
    title: "랭킹",
    icon: <Ranking width={24} height={24} />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
    title: "내 정보",
    icon: <UserMono width={24} height={24} />,
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