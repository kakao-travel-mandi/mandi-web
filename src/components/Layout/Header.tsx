import { RouteSource } from "@/routers/Router";
import { BellIcon, ChevronLeftIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const HeaderComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute = RouteSource.find(
    (route) => route.path === location.pathname,
  );

  return (
    <div className="p-5 flex gap-3 justify-center items-center bg-white">
      {currentRoute?.icon ? null : (
        <ChevronLeftIcon
          color="gray"
          size={24}
          strokeWidth="2.5"
          onClick={() => {
            navigate(-1);
          }}
          className="cursor-pointer"
        />
      )}
      <h1 className=" flex-grow text-center text-xl font-bold">
        {currentRoute ? currentRoute.title : "페이지를 찾을 수 없습니다"}
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
