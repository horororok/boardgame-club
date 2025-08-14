import type { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
import ModalProvider from "./ModalProvider";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
}
