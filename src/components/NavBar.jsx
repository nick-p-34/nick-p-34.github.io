import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MySite</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="#future1">Future Site 1</a></li>
        <li><a href="#future2">Future Site 2</a></li>
      </ul>
    </nav>
  );
}
