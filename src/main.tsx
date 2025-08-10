import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import AppProvider from "./providers/AppProvider";
import AppRouter from "./router/AppRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </StrictMode>
);
