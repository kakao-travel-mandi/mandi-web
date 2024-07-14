import { RouteSource } from "@/routers/Router";
import { BellIcon } from "lucide-react";
import { useLocation } from "react-router-dom";

export const HeaderComponent = () => {
  const location = useLocation();
  const currentRoute = RouteSource.find(
    (route) => route.path === location.pathname,
  );

  return (
    <div className="p-5 flex gap-3 justify-center items-center bg-white">
      <h1 className=" flex-grow text-center text-xl font-bold">
        {currentRoute ? currentRoute.title : "페이지를 찾을 수 없습니다"}
      </h1>
      <BellIcon fill="gray" color="gray" size={24} strokeWidth="2.5" />
    </div>
  );
};
