import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import "../style.css";

export default function NavBar({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const closeButtonRef = useRef(null);

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

  useEffect(() => {
    let prevFocused = null;

    function keyHandler(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        handleMobileToggle();
      }

      if (e.key === "Tab" && (mobileOpen || mobileClosing)) {
        const container = mobileMenuRef.current;

        if (!container) return;
        const focusable = Array.from(
          container.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null);

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }

        else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    if (mobileOpen) {
      prevFocused = document.activeElement;
      setTimeout(() => closeButtonRef.current?.focus?.(), 0);
      document.addEventListener("keydown", keyHandler);
    }

    return () => {
      document.removeEventListener("keydown", keyHandler);

      if (!mobileOpen && !mobileClosing && prevFocused) {
        prevFocused.focus?.();
      }
    };
  // eslint-disable-next-line
  }, [mobileOpen, mobileClosing]);

  const onDesktopDropdownKeyDown = (e) => {
    const key = e.key;

    if (key === "Enter" || key === " ") {
      e.preventDefault();
      clearTimeout(timeoutRef.current);
      setOpen((v) => !v);
    }

    else if (key === "ArrowDown") {
      e.preventDefault();
      clearTimeout(timeoutRef.current);
      setOpen(true);

      setTimeout(() => {
        const firstLink = dropdownRef.current?.querySelector("ul.dropdown-menu a");
        firstLink?.focus?.();
      }, 0);
    }
  };

  return (
    <>
      <nav className="navbar" aria-label="Primary navigation">
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
            <button
              className="dropdown-label icon-transition"
              aria-expanded={open}
              aria-controls="desktop-more-sites-list"
              aria-haspopup="true"
              onKeyDown={onDesktopDropdownKeyDown}
              onClick={() => { clearTimeout(timeoutRef.current); setOpen((v) => !v); }}
            >
              <span>More Sites</span>
              {open ? <IoIosArrowDown size={16} aria-hidden="true" /> : <IoIosArrowForward size={16} aria-hidden="true" />}
            </button>

            {open && (
              <ul
                id="desktop-more-sites-list"
                className="dropdown-menu animated-dropdown"
                role="menu"
              >
                <li><a role="menuitem" href="/404">TBD 1</a></li>
                <li><a role="menuitem" href="/404">TBD 2</a></li>
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
          ref={hamburgerRef}
          className={`hamburger mobile-only icon-transition ${mobileOpen || mobileClosing ? 'hide' : 'show'}`}
          onClick={handleMobileToggle}
          aria-expanded={mobileOpen || mobileClosing}
          aria-controls="mobile-nav"
          aria-label={mobileOpen || mobileClosing ? "Close navigation menu" : "Open navigation menu"}
        >
          <FaBars size={24} aria-hidden="true" />
        </button>
      </nav>

      {(mobileOpen || mobileClosing) && (
        <div
          id="mobile-nav"
          ref={mobileMenuRef}
          className={`mobile-menu ${mobileClosing ? 'animated-menu-close' : 'animated-menu'}`}
          onAnimationEnd={handleMenuAnimationEnd}
          aria-hidden={!(mobileOpen || mobileClosing)}
        >
          <button
            ref={closeButtonRef}
            className="close-button icon-transition"
            onClick={handleMobileToggle}
            aria-label="Close navigation menu"
          >
            <FaTimes size={24} aria-hidden="true" />
          </button>

          <ul className="mobile-links">
            <li><Link to="/" onClick={handleMobileToggle}>Home</Link></li>
            <li><Link to="/resume" onClick={handleMobileToggle}>Resume</Link></li>
            <li><Link to="/contact" onClick={handleMobileToggle}>Contact</Link></li>
            <li>
              <button
                className="mobile-dropdown-label icon-transition"
                onClick={handleMobileDropdown}
                aria-expanded={mobileDropdownOpen}
                aria-controls="more-sites-list"
                aria-haspopup="true"
              >
                <span>More Sites</span>{" "}
                {mobileDropdownOpen
                  ? <IoIosArrowDown size={16} aria-hidden="true" />
                  : <IoIosArrowForward size={16} aria-hidden="true" />
                }
              </button>

              {(mobileDropdownOpen || mobileDropdownClosing) && (
                <ul
                  id="more-sites-list"
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

          <button
            className="mobile-theme icon-transition"
            onClick={onToggleTheme}
            aria-pressed={theme === "dark"}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <FaMoon size={20} aria-hidden="true" /> : <FaSun size={20} aria-hidden="true" />}
          </button>

          <p className="mobile-copyright">
            © {new Date().getFullYear()} Nick Parke. All Rights Reserved
          </p>
        </div>
      )}
    </>
  );
}