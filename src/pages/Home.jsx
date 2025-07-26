import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import pfp from "../ext_files/pfp.png";
import "../style.css";

export default function Home() {
  return (
    <section className="home">
      <div className="intro-container">
        <img src={pfp} alt="Profile" className="profile-pic" />
        <div className="intro-text">
          <h2 className="section-title">Nick Parke</h2>
          <p>Software Developer and Motorsport Enthusiast</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/nick-parke34/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <FaLinkedin className="social-icon" size={32} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/nick-p-34"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <FaGithub className="social-icon" size={32} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}