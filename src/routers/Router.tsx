
import { Route, Routes } from "react-router-dom";
import {RouteSource} from "@/routers/routeSource.tsx";


const Router = () => {
  return (
    <Routes>
      {RouteSource.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Router;
