import "./index.css";
import { NavBar } from "./components/Layout/NavBar";
import Router from "./routers/Router";
import { BrowserRouter } from "react-router-dom";
import { HeaderComponent } from "@/components/Layout/Header";

function App() {
  return (
    <div className=" w-[100vw] h-[100dvh] flex flex-col justify-between overflow-hidden">
      <BrowserRouter>
        <div className="h-[100%]">
          <HeaderComponent />
          <Router />
        </div>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
