import { NavButtonComponent } from "./NavButton";
import {RouteSource} from "@/routers/routeSource.tsx";


export const NavBar = () => {
  return (
    <footer className="z-40 w-full overflow-hidden rounded-t-xl shadow-up shadow-border bg-white">
      <nav className="flex grow items-start justify-start h-full">
        {RouteSource.map((route) =>
          route.icon ? (
            <NavButtonComponent
              key={route.path}
              title={route.title}
              path={route.path}
              icon={route.icon}
            />
          ) : null,
        )}
      </nav>
    </footer>
  );
};
