import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/routes.tsx";
import "./locales/i18n.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>
);
