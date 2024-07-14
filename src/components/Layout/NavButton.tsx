import { Button } from "@/components/ui/button";

export const NavButtonComponent = ({ title }: { title: string }) => {
  return (
    <Button className="flex justify-center items-center h-full w-full py-6 font-bold text-white hover:bg-slate-200 hover:text-black rounded-none text-xl">
      {title}
    </Button>
  );
};
