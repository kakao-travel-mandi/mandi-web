import { NavButtonComponent } from "./NavButton";

export const NavBar = () => {
  return (
    <footer className="z-50 w-full overflow-hidden rounded-t-xl shadow-up shadow-border bg-slate-500">
      <nav className="flex grow items-start justify-start h-full">
        <NavButtonComponent title="홈" />
        <NavButtonComponent title="코스" />
        <NavButtonComponent title="내 코스" />
        <NavButtonComponent title="랭킹" />
        <NavButtonComponent title="내 정보" />
      </nav>
    </footer>
  );
};
