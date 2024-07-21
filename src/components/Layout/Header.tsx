import { useLocation } from "react-router-dom";
import { ROUTE_PATH } from "@/routers/routePath.ts";

const getTitleFromPath = (pathname: string) => {
  const route = Object.values(ROUTE_PATH).find(
    (route) => route.path === pathname
  );
  return route ? route.title : null;
};

interface HeaderProps {
  leftUI?: React.ReactNode;
  rightUI?: React.ReactNode;
  title?: string;
}

export const Header = ({ leftUI, rightUI, title }: HeaderProps) => {
  const location = useLocation();
  const currentRouteTitle = getTitleFromPath(location.pathname);

  return (
    <header className="w-full h-[46px] flex items-center justify-between">
      <div className="flex justify-center items-center min-w-[64px]">
        {leftUI}
      </div>
      <h1 className="text-hl font-bold">{title || currentRouteTitle}</h1>
      <div className="flex justify-center items-center min-w-[64px]">
        {rightUI}
      </div>
    </header>
  );
};
