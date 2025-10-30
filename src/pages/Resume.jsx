import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import pfp from "../ext_files/pfp.png";
import "../style.css";

export default function Resume() {
  const [cvBlobUrl, setCvBlobUrl] = useState(null);
    const [fileName, setFileName] = useState("NickParke_CV.pdf");

    useEffect(() => {
      const fetchPdf = async () => {
        try {
          const response = await fetch("/NickParke_CV.pdf");

          if (!response.ok) {
            throw new Error("Failed to fetch the PDF file.");
          }

          let lastModified = response.headers.get("Last-Modified");
          let date;

          if (lastModified) {
            date = new Date(lastModified);
          }

          else {
            date = new Date();
          }

          const month = date.toLocaleString("default", { month: "short" });
          const year = date.getFullYear();
          const formattedName = `NickParke_CV_${month}${year}.pdf`;

          const blob = await response.blob();
          const file = new File([blob], formattedName, { type: blob.type });

          const url = URL.createObjectURL(file);
          setCvBlobUrl(url);
          setFileName(formattedName);
        }

        catch (err) {
          console.error("Failed to load CV file:", err);
        }
      };

      fetchPdf();
    }, []);

  return (
    <section className="resume">
      <div className="resume-header">
        <img src={pfp} alt="Profile" className="resume-pic-overlay" />
        <div className="header-left">
          <h2 className="section-title">Nick Parke</h2>
          <p className="subtitle">Software Developer</p>
        </div>
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="/contact" target="_self">contact@nickparke.co.uk</a></p>
          <p><strong>Phone:</strong> <a href="tel:+447709105737">(+44) 07709 105737</a></p>
          <p><strong>Location:</strong> Ballyclare, Co. Antrim</p>
          <p><strong>References:</strong> Available on request</p>
        </div>
      </div>

      <div className="resume-section">
        <h3 className="section-title">Professional Summary</h3>
        <p>
           I am a dedicated and adaptable software developer with a strong academic foundation, holding a BSc in
           Computer Science from Queen’s University Belfast, and a proven track record of delivering high-quality,
           production-ready software. My experience spans frontend and backend development, microservices architecture,
           automated testing, and cloud-deployed systems, gained through both academic projects and a year-long
           placement as an Intern Software Engineer at Liberty IT. Skilled in languages such as Java, TypeScript,
           Python, and SQL, I have built and maintained responsive web applications, reusable component libraries, and
           distributed systems, applying Agile principles to ensure efficient, collaborative delivery. I am highly
           proficient in modern frameworks and tools including React, Angular, Spring Boot, Docker, Kubernetes, AWS
           Lambda, and CI/CD pipelines, and I place a strong emphasis on code quality, maintainability, and performance
           monitoring. My work is underpinned by a methodical, detail-oriented approach, whether improving test
           coverage, refactoring legacy code, or diagnosing system issues. Beyond technical expertise, I bring
           excellent communication skills, leadership experience, and a passion for learning, enabling me to work
           effectively within multidisciplinary and global teams. I am continually seeking opportunities to combine
           technical problem-solving with creativity, building solutions that are robust, efficient, and user-focused.
         </p>
      </div>

      <div className="resume-section">
        <h3 className="section-title">Professional Experience</h3>
        <div className="experience-item">
          <p className="job-title">Intern Software Engineer | Jun 2023 – Jun 2024</p>
          <p className="job-company">Liberty IT, Belfast</p>
          <ul className="resume-list">
            <li>Developed and documented a frontend component library using TypeScript & Angular, producing 30+ reusable UI components to standardise front-end delivery and reduce development duplicated work.</li>
            <li>Refactored and extended the automated Jasmine test suite, adding 100+ unit tests and raising coverage by ~35%, improving release confidence and reducing regression incidents.</li>
            <li>Performed code reviews and implemented refactoring tasks to improve maintainability and adherence to engineering standards.</li>
            <li>Architected and deployed serverless Product Definition microservices using AWS Lambda, ensuring a fault-tolerant, low-latency distributed system for component hosting.</li>
            <li>Configured and optimised CI/CD pipelines in Atlassian Bamboo, reducing build times by 30%, and automating test suites to emphasise robust solutions</li>
            <li>Participated in Agile meetings, such as daily stand-ups, sprint planning and PI summaries, and presented to Product Owners and stakeholders to align delivery with business objectives.</li>
            <li>Implemented application performance monitoring with Datadog APM to speed up incident diagnosis and feed performance data into engineering improvements.</li>
            <li>Completed a 12‑week professional development course, strengthening proficiency in teamwork, leadership, networking and problem solving skills.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3 className="section-title">Education</h3>
        <div className="education-item">
          <p className="edu-degree">BSc in Computer Science (2:1) | Sep 2021 – Jul 2025</p>
          <p className="edu-school">Queen’s University Belfast</p>
          <ul className="resume-list">
            <li><strong>Final Year Project:</strong> Built a Python application to crawl and analyse financial news using BeautifulSoup, Pandas and Alpha Vantage; researched optimal keyword strategies and integrated time‑series data visualiations.</li>
            <li><strong>Software Engineering & Systems Development:</strong> Collaborated in an Agile team of 5 to manage sprints and build a Java-based sustainability simulation; shortlisted as Team Finalists for Engineers Without Borders 2023.</li>
            <li><strong>Cloud Computing:</strong> Implemented and deployed six microservices in different languages on a Kubernetes cluster, integrating them with a provided web front end.</li>
            <li><strong>AI & Machine Learning:</strong> Developed an image‑classification model in R for automated image recognition and categorisation.</li>
            <li><strong>Software Testing:</strong> Designed comprehensive black‑box and white‑box test plans and suites for an existing system.</li>
            <li><strong>Web Technologies:</strong> Created interactive and responsive web applications in a five‑person Agile team.</li>
            <li><strong>Database Systems:</strong> Designed database schemas using mySQL to query large-scale existing systems, and build new systems with provided datasets.</li>
            <li><strong>Fundamentals of Maths:</strong> Applied mathematical skills and reasoning to design, build and debug complex algorithms.</li>
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
            <li>Built with React, HTML, CSS, and JavaScript, managed via NPM.</li>
            <li>Multi-page personal portfolio website featuring a landing page, web and downloadable versions of my CV, a Contact page connected to my EmailJS inbox, and links to LinkedIn and GitHub profiles.</li>
            <li>Focused on responsive web design with distinct mobile-only behaviour and custom desktop styling, and showcasing performance focus through content caching in Cloudflare.</li>
          </ul>
        </div>

        <div className="project-item">
          <p className="project-title">Telemetrix, Telemetry Streaming System</p>
          <p className="project-link">
            <a href="https://github.com/nick-p-34/telemetrix" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </p>
          <ul className="resume-list">
            <li>Built with Java, REST, Spring Boot and Kafka, managed via Maven.</li>
            <li>Simulation of a racing telemetry system, creating an event with sample car data, publishing it to Kafka, and exposing a REST /recent endpoint to retrieve previous events.</li>
            <li>Focused on simplicity for practice, with a basic producer -> Kafka -> consumer structure, and local storage and containerisation for demonstration purposes.</li>
          </ul>
        </div>

        <div className="project-item">
          <p className="project-title">Telemetrix Sim, Racing Simulation</p>
          <p className="project-link">
            <a href="https://github.com/nick-p-34/telemetrix-sim" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </p>
          <ul className="resume-list">
            <li>Built with Python and requests, managed via pip.</li>
            <li>Mathematical simulation of a race car, using vehicle parameters to simulate realistic telemetry at 20Hz, emitting the results for ingestion by external streaming pipelines.</li>
            <li>Focused on real-world accuracy, using regulations to determine vehicle parameters and deriving performance mathematically, and showcasing cross-compatibility by connecting to Telemetrix externally.</li>
          </ul>
        </div>

        <div className="project-item">
          <p className="project-title">Mini Parcel FastAPI</p>
          <p className="project-link">
            <a href="https://github.com/nick-p-34/mini-parcel-api" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </p>
          <ul className="resume-list">
            <li>Built with C# and .NET</li>
            <li>Small personal development project to learn and experiment with C#, takes user inputs for parcel details, and uses them to calculate a shipping cost.</li>
            <li>Focused on learning and simplicity, using simple CLI interactivity and basic mathematical logic to gain exposure to the basics of #C.</li>
          </ul>
        </div>

        <div className="project-item">
          <p className="project-title">Assetto Campionato, Racing Companion App</p>
          <p className="project-link">
            <a href="https://github.com/nick-p-34/Assetto-Campionato" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </p>
          <ul className="resume-list">
            <li>Built with Python, FastAPI, HTML and JavaScript.</li>
            <li>An Assetto Corsa companion app to expand the championship mode through the creation of custom rulesets, applying new data to existing game files.</li>
            <li>Focused on accessibility and automation, using simple HTML entry fields to build JSON files of new rules, calling FastAPI endpoints to apply new positions and points to the most recently modified results files.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h3 className="section-title">Skills</h3>
        <ul className="resume-list">
          <li><strong>Languages:</strong> TypeScript, JavaScript, Python, Java, HTML5, CSS, SQL, R, C#</li>
          <li><strong>Frameworks:</strong> REST APIs, React, Angular, Spring Boot, Kafka, Node.js, NPM, Maven, Jasmine, Pandas, FastAPI</li>
          <li><strong>DevOps & Tools:</strong> GitHub/GitLab, CI/CD, Atlassian Bamboo, JIRA, Docker, Kubernetes, AWS Lambda, Rancher, Datadog, Office 365</li>
          <li><strong>Soft Skills:</strong> Agile, Scrum, Collaboration, Teamwork, Team Leadership, Stakeholder Engagement, Presentation Delivery, Innovation, Incident Response</li>
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
          <p className="award-title">Boys’ Brigade Queen’s Badge</p>
          <p className="award-date">Youth Leadership, 2019</p>
          <ul className="resume-list">
            <li>Achieved the highest youth leadership award, leading team activities and organising community service projects, becoming a Non-Commissioned Officer in the largest company in the Battalion.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
              <h3 className="section-title">Hobbies & Interests</h3>

              <div className="hobby-item">
                <p className="hobby-title">Programming</p>
                <ul className="resume-list">
                  <li>I enjoy building apps and programmes to help keep on top of my coding skills, and to learn new technologies. I like to integrate my other interests into these apps, so I know they have real-world applications.</li>
                </ul>
              </div>

              <div className="hobby-item">
                <p className="hobby-title">Travel</p>
                <ul className="resume-list">
                  <li>I love to travel, visit new places and experience new cultures. I also enjoy learning languages so I can get around more easily when I travel, and am currently learning Italian.</li>
                </ul>
              </div>

              <div className="hobby-item">
                <p className="hobby-title">Racing</p>
                <ul className="resume-list">
                  <li>I have a great interest in motorsports of all kinds, and am aiming to compete in the near future. I also like reading up on the technical side of racing to improve my engineering and practical skills.</li>
                </ul>
              </div>
            </div>

      {cvBlobUrl && (
        <a href={cvBlobUrl} download={fileName} className="social-button">
          <FaDownload className="social-icon" size={20} />
          <span>Download CV</span>
        </a>
      )}
    </section>
  );
}
