import React from "react";
import { FaDownload } from "react-icons/fa";
import cv from "../img/NickParke_CV_Jul2025.pdf";
import pfp from "../img/pfp.png";
import "../style.css";

export default function Resume() {
  return (
    <section className="resume">
      <div className="resume-header">
        <img src={pfp} alt="Profile" className="resume-pic-overlay" />
        <div className="header-left">
          <h2>Nick Parke</h2>
          <p className="subtitle">Software Developer</p>
        </div>
        <div className="contact-info">
          <p>Email: <a href="mailto:nick.parke34@gmail.com">nick.parke34@gmail.com</a></p>
          <p>Phone: <a href="tel:+447709105737">(+44) 07709 105737</a></p>
          <p>Location: Ballyclare, Co. Antrim</p>
          <p>References: Available on request</p>
        </div>
      </div>

      <div className="resume-section">
        <h3 className="section-title">Professional Summary</h3>
        <p>Detail-oriented software engineer and recent Computer Science graduate from Queen’s University Belfast, with a year’s experience building and maintaining a TypeScript/Angular component library and CI/CD pipelines at Liberty IT. Proven ability to improve code quality through automated testing, and to streamline deployments using Bamboo and GitHub. Strong collaborator skilled in Agile methodologies, leading meetings, and delivering stakeholder presentations.</p>
      </div>

      <div className="resume-section">
        <h3 className="section-title">Professional Experience</h3>
        <div className="experience-item">
          <p className="job-title">Intern Software Engineer | Jun 2023 – Jun 2024</p>
          <p className="job-company">Liberty IT, Belfast</p>
          <ul className="resume-list">
            <li>Developed and documented the Atom Component Library using Angular & TypeScript, creating 30+ reusable UI components to standardise front‑end development.</li>
            <li>Refactored and expanded the Jasmine test suite, adding 100+ unit tests and boosting code coverage by ~35%.</li>
            <li>Configured and optimised CI/CD pipelines in Bamboo, reducing build times by 30%.</li>
            <li>Collaborated within a 10‑member Agile team, using Jira for sprint planning, daily stand‑ups, reviews, and retrospectives.</li>
            <li>Provided PI summary and implementation presentations, delivering feature demonstrations to stakeholders each Program Increment.</li>
            <li>Researched and implemented Datadog APM, enabling end‑to‑end application monitoring and faster incident diagnosis.</li>
            <li>Completed a 12‑week professional development course in teamwork, leadership, and communication skills.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3 className="section-title">Education</h3>
        <div className="education-item">
          <p className="edu-degree">BSc in Computer Science (2:1) | Sep 2021 – Jul 2025</p>
          <p className="edu-school">Queen’s University Belfast</p>
          <ul className="resume-list">
            <li><strong>Final Year Project:</strong> Built a Python application to crawl and analyse financial news using BeautifulSoup, Pandas and Alpha Vantage; researched optimal keyword strategies and integrated time‑series data visualisations.</li>
            <li><strong>Software Engineering & Systems Development:</strong> Collaborated in an Agile team of 5 to manage sprints and build a Java-based sustainability simulation; shortlisted as Team Finalists for Engineers Without Borders 2023.</li>
            <li><strong>AI & Machine Learning:</strong> Developed an image‑classification model in R for automated image recognition and categorisation.</li>
            <li><strong>Software Testing:</strong> Designed comprehensive black‑box and white‑box test plans and suites for an existing system.</li>
            <li><strong>Cloud Computing:</strong> Implemented and deployed six microservices in different languages on a Kubernetes cluster, integrating them with a provided web front end.</li>
            <li><strong>Web Technologies:</strong> Created interactive and responsive web applications in a five‑person Agile team.</li>
            <li><strong>Database Systems:</strong> Designed database schemas using mySQL to query large-scale existing systems, and build new systems with provided datasets.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3 className="section-title">Projects</h3>

        <div className="project-item">
          <p className="project-title">Personal Website</p>
          <p className="project-link">
            <a href="https://www.nickparke.co.uk" target="_blank" rel="noopener noreferrer">www.nickparke.co.uk</a>
          </p>
          <ul className="resume-list">
            <li>Built with React, HTML, CSS, JavaScript and managed via NPM, featuring a Landing page, CV/Resume page, and Contact page with direct links to LinkedIn and GitHub.</li>
            <li>Fully responsive design with a mobile‑specific navbar that seamlessly switches to a desktop layout, ensuring intuitive navigation across all devices.</li>
            <li>Custom theming and animations, including a dark/light mode toggle with smooth transitions and animated navbar entries.</li>
          </ul>
        </div>

        <div className="project-item">
          <p className="project-title">Assetto Campionato, Racing Companion App</p>
          <p className="project-link">
            <a href="https://github.com/nick-p-34/Assetto-Campionato" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </p>
          <ul className="resume-list">
            <li>Python/JavaScript FastAPI application that generates custom championship rule files to extend Assetto Corsa’s default mode, adding multiclass points and round-specific rules.</li>
            <li>Applies rules immediately after each race session, processes session data, and presents updated standings and championship statistics through a responsive web interface.</li>
            <li>Built with a flexible rule‑engine architecture, with future plans to directly overwrite official Assetto Corsa result files to support multi‑class functionality natively.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3 className="section-title">Skills</h3>
        <ul className="skills-grid">
          <li><strong>Languages:</strong> Python, Java, SQL, JavaScript, TypeScript, HTML5, CSS, R</li>
          <li><strong>Frameworks:</strong> Node.js, NPM, Angular, React, Jasmine, Pandas</li>
          <li><strong>DevOps:</strong> GitHub/GitLab, Bamboo CI/CD, JIRA, Docker, Kubernetes, Rancher, Datadog</li>
          <li><strong>Soft:</strong> Agile, Scrum, Team Leadership, Presentation Delivery</li>
        </ul>
      </div>

      <div className="resume-section">
        <h3 className="section-title">Awards & Achievements</h3>

        <div className="award-item">
          <p className="award-title">Motorsport UK Circuit Racing Licence</p>
          <p className="award-date">National C Licence, 2024</p>
          <ul className="resume-list">
            <li>Accredited by the Motorsport UK governing body, underscoring commitment to discipline, rules‑based performance, and attention to detail under competitive conditions.</li>
          </ul>
        </div>

        <div className="award-item">
          <p className="award-title">Engineers Without Borders</p>
          <p className="award-date">Team Finalist, 2023</p>
          <ul className="resume-list">
            <li>Selected among top student teams nationwide to develop a sustainable engineering solution, presenting our Java-based e-bike network simulation concept at the UK finals.</li>
          </ul>
        </div>

        <div className="award-item">
          <p className="award-title">Duke of Edinburgh’s Award</p>
          <p className="award-date">Silver Award, 2019</p>
          <ul className="resume-list">
            <li>Volunteered at Blythswood Ireland, learned Italian, maintained fitness through regular swimming, and completed a 3‑day expedition, demonstrating commitment, teamwork and leadership.</li>
          </ul>
        </div>

        <div className="award-item">
          <p className="award-title">Boys’ Brigade President’s Badge</p>
          <p className="award-date">Youth Leadership, 2019</p>
          <ul className="resume-list">
            <li>Achieved the highest youth leadership award, leading team activities and organising community service projects, becoming a Non-Commissioned Officer in the largest company in the Battalion.</li>
          </ul>
        </div>
      </div>


      <a href={cv} download className="social-button">
        <FaDownload className="social-icon" size={20} />
        <span>Download CV</span>
      </a>
    </section>
  );
}