import { Outlet } from "react-router-dom";
import { Header } from "@/components/Layout/Header.tsx";
import { FooterNav } from "@/components/Layout/NavBar.tsx";

interface LayoutProps {
  withHeader?: boolean;
  headerOptions?: {
    leftUI?: React.ReactNode;
    rightUI?: React.ReactNode;
    title?: string;
  };
  withFooter?: boolean;
}

const Layout = ({ withHeader, headerOptions, withFooter }: LayoutProps) => {
  return (
    <main className={"h-dvh w-[375px] mx-auto bg-white"}>
      {withHeader && <Header {...headerOptions} />}
      <Outlet />
      {withFooter && <FooterNav />}
    </main>
  );
};

export default Layout;
