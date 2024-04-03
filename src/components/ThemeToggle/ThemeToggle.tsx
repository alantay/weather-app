import { useState, useEffect } from "react";
import Toggle from "./ThemeToggle.styled";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)" // get user's browser preference
    ).matches;
    const storageDark = localStorage.getItem("dark");
    return storageDark ? JSON.parse(storageDark) : prefersDarkMode; // default to user's browser preference if localstorage has no theme record
  });

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.setAttribute("data-theme", "dark");
      localStorage.setItem("dark", "true");
    } else {
      body.removeAttribute("data-theme");
      localStorage.setItem("dark", "false");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <Toggle onClick={toggleDarkMode}>{isDark ? "Light" : "Dark"} Mode</Toggle>
  );
};

export default ThemeToggle;
