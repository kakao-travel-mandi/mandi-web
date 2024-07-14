import MyPage from "./pages/MyPage";
import "./index.css";
import { NavBar } from "./components/Layout/NavBar";

function App() {
  return (
    <div className=" w-[100vw] h-[100dvh] flex flex-col justify-between">
      <MyPage />
      <NavBar />
    </div>
  );
}

export default App;
