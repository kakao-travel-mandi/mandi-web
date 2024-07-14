import "./index.css";
import { NavBar } from "./components/Layout/NavBar";
import Router from "./routers/Router";

function App() {
  return (
    <div className=" w-[100vw] h-[100dvh] flex flex-col justify-between">
      <Router />
      <NavBar />
    </div>
  );
}

export default App;
