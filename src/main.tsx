import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./components/lib/shadcn/index.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={true}
      closeOnClick={true}
      theme="dark"
      newestOnTop={true}
    />
  </React.StrictMode>
);
