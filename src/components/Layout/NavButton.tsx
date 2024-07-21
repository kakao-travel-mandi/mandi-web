import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { cloneElement } from "react";

export const NavButton = ({
  title,
  path,
  icon,
}: {
  title?: string;
  path: string;
  icon: React.ReactElement;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive =
    path === "/"
      ? location.pathname === path
      : location.pathname.startsWith(path);

  const iconClone = cloneElement(icon, {
    color: isActive ? "black" : "#ADB1BA",
  });

  return (
    <Button
      className={clsx(
        "bg-white hover:bg-transparent flex flex-col gap-[2px] justify-center items-center h-full w-full text-[10px] py-6 font-bold rounded-none cursor-pointer",
        isActive ? "text-black" : "text-gray-500"
      )}
      title={title}
      onClick={() => {
        navigate(path);
      }}
      asChild
    >
      <div className="flex flex-col">
        {iconClone}
        <span>{title}</span>
      </div>
    </Button>
  );
};
