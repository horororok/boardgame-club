// src/contexts/ModalContext.ts
import { createContext } from "react";
import type { ReactNode } from "react";

export type ModalContextValue = {
  isOpen: boolean;
  open: (node: ReactNode) => void;
  close: () => void;
};

export const ModalContext = createContext<ModalContextValue | undefined>(
  undefined
);
