import { Outlet } from "react-router-dom";
import { Header } from "@/components/Layout/Header.tsx";
import { FooterNav } from "@/components/Layout/NavBar.tsx";

interface LayoutProps {
  withHeader?: boolean;
  withFooter?: boolean;
}

const Layout = ({ withHeader, withFooter }: LayoutProps) => {
  return (
    <main className={"h-dvh w-[375px] mx-auto bg-white"}>
      {withHeader && <Header />}
      <Outlet />
      {withFooter && <FooterNav />}
    </main>
  );
};

export default Layout;
