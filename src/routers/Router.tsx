import ConqCoursePage from "@/pages/ConqCoursePage";
import Home from "@/pages/Home";
import MyPage from "@/pages/MyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/conq-course" element={<ConqCoursePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;