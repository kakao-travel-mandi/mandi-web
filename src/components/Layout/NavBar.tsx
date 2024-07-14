import { NavButtonComponent } from "./NavButton";
import { RouteSource } from "@/routers/Router";

export const NavBar = () => {
  return (
    <footer className="z-50 w-full overflow-hidden rounded-t-xl shadow-up shadow-border bg-white">
      <nav className="flex grow items-start justify-start h-full">
        {RouteSource.map((route) =>
          route.isMain ? (
            <NavButtonComponent
              key={route.path}
              title={route.title}
              path={route.path}
            />
          ) : null,
        )}
      </nav>
    </footer>
  );
};
