import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CustomCursor from './components/CustomCursor';
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./style.css";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
     document.documentElement.setAttribute("data-theme", theme);
     const cursor = document.querySelector('.custom-cursor');
     const interactive = Array.from(document.querySelectorAll('a, button'));

     interactive.forEach(el => {
       el.addEventListener('mouseover', () => cursor.classList.add('hover'));
       el.addEventListener('mouseout', () => cursor.classList.remove('hover'));
     });
     }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <CustomCursor />
      <Router>
        <div className="app">
          <NavBar theme={theme} onToggleTheme={toggleTheme} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer onToggleTheme={toggleTheme} theme={theme} />
        </div>
      </Router>
    </>
  );
}