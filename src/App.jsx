import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./style.css";

const Home = lazy(() => import("./pages/Home"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));
const Placeholder = lazy(() => import("./pages/Placeholder"));

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handler = (e) => {
      const cursorEl = document.querySelector(".custom-cursor");
      if (!cursorEl) return;

      const interactive = e.target.closest(
        'a, button, [role="button"], .social-button, .dropdown-label, .profile-pic, .resume-pic-overlay'
      );

      cursorEl.classList.toggle("hover", !!interactive);
    };

    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Router>
        <div className="app">
          <NavBar theme={theme} onToggleTheme={toggleTheme} />
          <main>
            <Suspense fallback={<div />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/404" element={<Placeholder />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer onToggleTheme={toggleTheme} theme={theme} />
        </div>
      </Router>
    </>
  );
}