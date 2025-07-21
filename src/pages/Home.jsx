import React from "react";
import linkedinLogo from "../img/linkedin.png";
import githubLogo from "../img/github.png";
import pfp from "../img/pfp.png";

export default function Home() {
  return (
    <section className="home">
      <div className="intro-container">
        <img src={pfp} alt="Profile" className="profile-pic" />
        <div className="intro-text">
          <h2>Nick Parke</h2>
          <p>
            Software Developer and Motorsport Enthusiast
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/nick-parke34/" target="_blank" rel="noopener noreferrer" className="social-button">
              <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/nick-p-34" target="_blank" rel="noopener noreferrer" className="social-button">
              <img src={githubLogo} alt="GitHub" className="social-icon" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}