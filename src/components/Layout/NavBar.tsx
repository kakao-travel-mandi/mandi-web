import { NavButton } from "@/components/Layout/NavButton.tsx";
import ROUTE_PATH from "@/routers/routePath.ts";
import { Bookmark, HomeIcon, Map, Ranking, UserMono } from "@/components/icons";

export const FooterNav = () => {
  return (
    <footer className="z-40 w-full overflow-hidden rounded-t-xl shadow-up shadow-border bg-white">
      <nav className="flex grow items-start justify-start h-full">
        <NavButton
          title={ROUTE_PATH.HOME.title}
          path={ROUTE_PATH.HOME.path}
          icon={<HomeIcon width={24} height={24} />}
        />
        <NavButton
          title={ROUTE_PATH.COURSE.title}
          path={ROUTE_PATH.COURSE.path}
          icon={<Map width={24} height={24} />}
        />
        <NavButton
          title={ROUTE_PATH.SCRAP.title}
          path={ROUTE_PATH.SCRAP.path}
          icon={<Bookmark width={24} height={24} />}
        />
        <NavButton
          title={ROUTE_PATH.RANKING.title}
          path={ROUTE_PATH.RANKING.path}
          icon={<Ranking width={24} height={24} />}
        />
        <NavButton
          title={ROUTE_PATH.MY_PAGE.title}
          path={ROUTE_PATH.MY_PAGE.path}
          icon={<UserMono width={24} height={24} />}
        />
      </nav>
    </footer>
  );
};
