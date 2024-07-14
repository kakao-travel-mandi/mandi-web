import { cn } from "../lib/utils";
import { TabsTrigger } from "../ui/tabs";

export const TabButtonComponent = ({
  children,
  value,
  className,
}: {
  children: string;
  value: string;
  className?: string;
}) => {
  return (
    <TabsTrigger
      className={cn(
        "text-lg font-semibold text-gray-600 p-4 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 transition-none",
        className,
      )}
      value={value}>
      {children}
    </TabsTrigger>
  );
};
