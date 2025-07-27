import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import "../style.css";

export default function NavBar({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileClosing, setMobileClosing] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileDropdownClosing, setMobileDropdownClosing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
        setMobileClosing(false);
        setMobileDropdownOpen(false);
        setMobileDropdownClosing(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  const handleMobileToggle = () => {
    if (mobileOpen) {
      setMobileClosing(true);
    }

    else {
      setMobileOpen(true);
    }
  };

  const handleMenuAnimationEnd = () => {
    if (mobileClosing) {
      setMobileOpen(false);
      setMobileClosing(false);
      setMobileDropdownOpen(false);
      setMobileDropdownClosing(false);
    }
  };

  const handleMobileDropdown = () => {
    if (mobileDropdownOpen) {
      setMobileDropdownClosing(true);
    }

    else {
      setMobileDropdownOpen(true);
    }
  };

  const handleDropdownAnimationEnd = () => {
    if (mobileDropdownClosing) {
      setMobileDropdownOpen(false);
      setMobileDropdownClosing(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-links desktop-only">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li
            className="dropdown"
            ref={dropdownRef}
            onMouseEnter={() => { clearTimeout(timeoutRef.current); setOpen(true); }}
            onMouseLeave={() => { timeoutRef.current = setTimeout(() => setOpen(false), 150); }}
          >
            <span className="dropdown-label icon-transition">
              More Sites {open ? <IoIosArrowDown size={16} /> : <IoIosArrowForward size={16} />}
            </span>
            {open && (
              <ul className="dropdown-menu animated-dropdown">
                <li><a href="/404">TBD 1</a></li>
                <li><a href="/404">TBD 2</a></li>
              </ul>
            )}
          </li>
          <li>
            <a href="https://github.com/nick-p-34" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nick-parke34/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>

        <button
          className={`hamburger mobile-only icon-transition ${mobileOpen || mobileClosing ? 'hide' : 'show'}`}
          onClick={handleMobileToggle}
        >
          <FaBars size={24} />
        </button>
      </nav>

      {(mobileOpen || mobileClosing) && (
        <div
          className={`mobile-menu ${mobileClosing ? 'animated-menu-close' : 'animated-menu'}`}
          onAnimationEnd={handleMenuAnimationEnd}
        >
          <button
            className="close-button icon-transition"
            onClick={handleMobileToggle}
          >
            <FaTimes size={24} />
          </button>

          <ul className="mobile-links">
            <li><Link to="/" onClick={handleMobileToggle}>Home</Link></li>
            <li><Link to="/resume" onClick={handleMobileToggle}>Resume</Link></li>
            <li><Link to="/contact" onClick={handleMobileToggle}>Contact</Link></li>
            <li>
              <button
                className="mobile-dropdown-label icon-transition"
                onClick={handleMobileDropdown}
              >
                More Sites {mobileDropdownOpen
                  ? <IoIosArrowDown size={16} />
                  : <IoIosArrowForward size={16} />
                }
              </button>
              {(mobileDropdownOpen || mobileDropdownClosing) && (
                <ul
                  className={`mobile-inline-dropdown ${
                    mobileDropdownClosing ? 'animated-dropdown-close' : 'animated-dropdown'
                  }`}
                  onAnimationEnd={handleDropdownAnimationEnd}
                >
                  <li><Link to="/404" onClick={handleMobileToggle}>TBD 1</Link></li>
                  <li><Link to="/404" onClick={handleMobileToggle}>TBD 2</Link></li>
                </ul>
              )}
            </li>
            <li>
              <a href="https://github.com/nick-p-34" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nick-parke34/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>

          <button className="mobile-theme icon-transition" onClick={onToggleTheme}>
            {theme === "dark" ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>

          <p className="mobile-copyright">
            © {new Date().getFullYear()} Nick Parke. All Rights Reserved
          </p>
        </div>
      )}
    </>
  );
}