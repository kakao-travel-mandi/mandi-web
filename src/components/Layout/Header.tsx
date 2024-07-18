import { BellIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
import ROUTE_PATH from "@/routers/routePath.ts";

const getTitleFromPath = (pathname: string) => {
  const route = Object.values(ROUTE_PATH).find(
    (route) => route.path === pathname,
  );
  return route ? route.title : null;
};

export const Header = () => {
  const location = useLocation();
  const currentRouteTitle = getTitleFromPath(location.pathname);

  return (
    <div className="p-5 flex gap-3 justify-center items-center bg-white">
      <h1 className=" flex-grow text-center text-xl font-bold">
        {currentRouteTitle ? currentRouteTitle : "페이지를 찾을 수 없습니다"}
      </h1>
      <BellIcon
        className="cursor-pointer"
        fill="gray"
        color="gray"
        size={24}
        strokeWidth="2.5"
      />
    </div>
  );
};
