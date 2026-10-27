"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "system", // "light" | "dark" | "system"
  resolvedTheme: "dark", // "light" | "dark"
  setTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("system");
  const [resolvedTheme, setResolvedTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let saved = "system";
    try {
      saved = localStorage.getItem("theme") || "system";
    } catch {
      // storage unavailable
    }
    setThemeState(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (currentTheme) => {
      const isDark =
        currentTheme === "dark" ||
        (currentTheme === "system" && mediaQuery.matches);

      const root = document.documentElement;
      if (isDark) {
        root.classList.add("dark");
        root.classList.remove("light");
        setResolvedTheme("dark");
      } else {
        root.classList.add("light");
        root.classList.remove("dark");
        setResolvedTheme("light");
      }
    };

    applyTheme(theme);

    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted]);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch {
      // storage unavailable
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
