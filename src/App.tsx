import "./index.css";
import { NavBar } from "./components/Layout/NavBar";
import Router from "./routers/Router";

function App() {
  return (
    <>
      <Router />
      <NavBar />
    </>
  );
}

export default App;
