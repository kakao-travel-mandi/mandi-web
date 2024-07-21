import Router from "./routers/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-100 w-[100vw] h-[100dvh] flex flex-col justify-between overflow-hidden">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
