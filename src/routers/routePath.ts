type Route = {
  path: string;
  title?: string;
};

const routePath = {
  HOME: {
    path: "/",
    title: "홈",
  },
  MY_PAGE: {
    path: "/profile",
    title: "내 정보",
  },
  CONQUERED_COURSE: {
    path: "/profile/course-conquered",
    title: "정복한 코스 목록",
  },
  MY_COMMENTS: {
    path: "/profile/course-reviews",
    title: "나의 코스 후기",
  },
  BADGE: {
    path: "/profile/badge",
    title: "나의 배지",
  },
  LOGIN_INFO: {
    path: "/profile/login-info",
    title: "로그인 정보",
  },
  PROFILE_LEAVE: {
    path: "/profile/leave",
    title: "회원탈퇴",
  },
  SERVICE_POLICY: {
    path: "/profile/service-policy",
    title: "이용 약관",
  },
  PRIVACY_POLICY: {
    path: "/profile/privacy-policy",
    title: "개인정보 처리방침",
  },
  PROFILE_SETTING: {
    path: "/profile/change",
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
  LOGIN: {
    path: "/login",
  },
  SIGNUP: {
    path: "/signup",
  },
  SIGNUP_NICKNAME: {
    path: "/signup/nickname",
  },
  SIGNUP_INTRODUCE: {
    path: "/signup/introduce",
  },
  SIGNUP_COMPLETE: {
    path: "/signup/complete",
  },
} as const;

export type RouteKey = keyof typeof routePath;

export const ROUTE_PATH: Record<RouteKey, Route> = routePath;
