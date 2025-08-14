// src/providers/ModalProvider.tsx
import { useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ModalContext } from "../contexts/ModalContext";
import Modal from "../components/common/Modal";

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((node: ReactNode) => {
    setContent(node);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    // Optional delay for exit animations if added later
    setTimeout(() => setContent(null), 0);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      open,
      close,
    }),
    [isOpen, open, close]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <Modal open={isOpen} onClose={close}>
        {content}
      </Modal>
    </ModalContext.Provider>
  );
}
