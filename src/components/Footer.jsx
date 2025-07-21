import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../style.css";

export default function Footer({ onToggleTheme, theme }) {
  return (
    <footer className="footer">
      <p className="footer-text">&copy; {new Date().getFullYear()} Nick Parke. All Rights Reserved</p>
      <button className="theme-toggle" onClick={onToggleTheme}>
        {theme === "dark" ? <FaMoon /> : <FaSun />}
      </button>
    </footer>
  );
}