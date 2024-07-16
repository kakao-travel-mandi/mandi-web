const ROUTE_PATH = {
  HOME: {
    path: "/",
    title: "홈",
  },
  CONQUERED_COURSE: {
    path: "/mypage/conq-course",
    title: "정복한 코스 목록",
  },
  MY_COMMENTS: {
    path: "/mypage/mycomments",
    title: "나의 코스 후기",
  },
  PROFILE_SETTING: {
    path: "/mypage/profile-setting",
    title: "프로필 변경",
  },
  MY_PAGE: {
    path: "/mypage",
    title: "내 정보",
  },
  RANKING: {
    path: "/ranking",
    title: "랭킹",
  },
  COURSE: {
    path: "/course",
    title: "코스",
  },
  SCRAP: {
    path: "/scrap",
    title: "스크랩",
  },
} as const;

export default ROUTE_PATH;
