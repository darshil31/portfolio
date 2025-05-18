import { useEffect, useState } from "react";
import "./styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Retrieve and increment visitor count from localStorage
    let count = parseInt(localStorage.getItem("visitorCount")) || 0;
    count += 1;
    localStorage.setItem("visitorCount", count);
    setVisitorCount(count);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">DG</a>
          </div>

          <div className="footer-social">
            <a
              href="https://linkedin.com/in/darshilgoti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/darshil31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://leetcode.com/darshil3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://codeforces.com/profile/darshil31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodeForces"
            >
              <i className="fas fa-laptop-code"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Darshil Goti. All Rights Reserved.</p>
          <p>Visitors: {visitorCount}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
