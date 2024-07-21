type Route = {
  path: string;
  title?: string;
};

const routePath = {
  HOME: {
    path: "/",
    title: "홈",
  },
  CONQUERED_COURSE: {
    path: "/profile/course-conquered",
    title: "정복한 코스 목록",
  },
  MY_COMMENTS: {
    path: "/profile/course-reviews",
    title: "나의 코스 후기",
  },
  PROFILE_SETTING: {
    path: "/profile/change",
  },
  MY_PAGE: {
    path: "/profile",
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
  LOGIN: {
    path: "/login",
  },
  SIGNUP: {
    path: "/signup",
  },
} as const;

type RouteKey = keyof typeof routePath;

export const ROUTE_PATH: Record<RouteKey, Route> = routePath;
