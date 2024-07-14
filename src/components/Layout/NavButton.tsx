import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export const NavButtonComponent = ({
  title,
  path,
}: {
  title: string;
  path: string;
}) => {
  const navigate = useNavigate();
  return (
    <Button
      className="flex justify-center items-center h-full w-full py-6 font-bold text-white hover:bg-slate-200 hover:text-black rounded-none text-xl"
      title={title}
      onClick={() => {
        console.log(path);
        navigate(path);
      }}>
      {title}
    </Button>
  );
};
