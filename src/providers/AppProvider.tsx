import type { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";

export default function AppProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
