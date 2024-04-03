import { useState, useEffect } from "react";
import styled from "styled-components";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storageDark = localStorage.getItem("dark");
    return storageDark ? JSON.parse(storageDark) : prefersDarkMode;
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

const Toggle = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.6rem;
  color: var(--primary-font-color);
  opacity: 0.5;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`;
