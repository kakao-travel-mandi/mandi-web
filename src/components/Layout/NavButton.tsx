import { Button } from "@/components/ui/button";

export const NavButtonComponent = ({ title }: { title: string }) => {
  return (
    <Button className="flex justify-center items-center h-full w-full">
      {title}
    </Button>
  );
};
