"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./theme-provider";

export default function ToastProvider() {
  const { resolvedTheme } = useTheme();

  return (
    <ToastContainer
      position="bottom-right"
      theme={resolvedTheme === "light" ? "light" : "dark"}
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
