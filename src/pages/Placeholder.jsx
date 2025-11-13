import { RiArrowGoBackLine } from "react-icons/ri";

export default function Placeholder() {
  return (
    <section className="placeholder">
      <div className="intro-container">
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <a
          href="/"
          rel="noopener noreferrer"
          className="social-button"
        >
          <RiArrowGoBackLine className="social-icon" size={32} />
          <span>Return to Homepage</span>
        </a>
      </div>
    </section>
  );
}