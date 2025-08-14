// src/hooks/useModal.ts
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export default function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error(
      "useModal은 반드시 ModalProvider 내부에서 사용해야 합니다."
    );
  }
  return ctx;
}
