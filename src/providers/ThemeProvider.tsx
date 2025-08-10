import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ThemeContext,
  type Theme,
  type ResolvedTheme,
} from "../contexts/ThemeContext";

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "system"
  );
  const effectiveTheme = useMemo<ResolvedTheme>(
    () => (theme === "system" ? getSystemTheme() : theme),
    [theme]
  );

  useEffect(() => {
    const root = document.documentElement;
    if (effectiveTheme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme, effectiveTheme]);

  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme("system");
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      effectiveTheme,
      setTheme,
      toggle: () =>
        setTheme((prev) =>
          prev === "system"
            ? getSystemTheme() === "dark"
              ? "light"
              : "dark"
            : prev === "dark"
            ? "light"
            : "dark"
        ),
    }),
    [theme, effectiveTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
