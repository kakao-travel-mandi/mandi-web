import "./index.css";
import { NavBar } from "./components/Layout/NavBar";
import Router from "./routers/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className=" w-[100vw] h-[100dvh] flex flex-col justify-between">
      <BrowserRouter>
        <Router />
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
