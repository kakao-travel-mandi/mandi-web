import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export const NavButtonComponent = ({
  title,
  path,
}: {
  title: string;
  path: string;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive =
    path === "/"
      ? location.pathname === path
      : location.pathname.startsWith(path);

  return (
    <Button
      className={cn(
        "flex justify-center items-center h-full w-full py-6 font-bold hover:bg-slate-200 hover:text-black rounded-none text-xl",
        isActive ? "text-black" : "text-gray-500",
      )}
      title={title}
      onClick={() => {
        console.log(path);
        navigate(path);
      }}>
      {title}
    </Button>
  );
};
