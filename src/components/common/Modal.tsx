// src/components/common/Modal.tsx
import type { ReactNode } from "react";
import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  closeOnBackdrop?: boolean;
  ariaLabel?: string;
};

export default function Modal({
  open,
  onClose,
  children,
  closeOnBackdrop = true,
  ariaLabel = "Modal dialog",
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  const styles = useMemo(() => {
    return {
      backdrop: {
        position: "fixed" as const,
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "16px",
      },
      container: {
        backgroundColor: "white",
        color: "#111827",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        maxWidth: "640px",
        width: "100%",
        maxHeight: "90vh",
        overflow: "auto" as const,
        padding: "20px",
      },
    };
  }, []);

  if (!open) return null;

  const content = (
    <div
      style={styles.backdrop}
      onClick={() => {
        if (closeOnBackdrop) onClose();
      }}
      aria-hidden="true"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        style={styles.container}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
