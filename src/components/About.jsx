import { useEffect, useRef } from "react";
import "./styles/About.css";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content fade-in" ref={sectionRef}>
          <div className="about-text">
            <p>
              I'm a Software Engineer based in Ahmedabad, Gujarat, with a
              passion for building elegant, user-friendly applications. With a
              strong foundation in Computer Science from Nirma University, I
              specialize in full-stack development and AI-driven solutions.
            </p>
            <p>
              Currently working at Crest Data Systems, I focus on developing
              AI-driven tools that enhance security operations and streamline
              data analysis workflows. I'm particularly interested in creating
              solutions that make complex systems more accessible and efficient.
            </p>
            <p>
              When I'm not coding, you can find me solving algorithmic problems
              on platforms like LeetCode and Codeforces, where I've solved over
              1000 coding challenges.
            </p>
          </div>
          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Name</span>
              <span className="info-value">Darshil Goti</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">
                <a href="mailto:darshilgoti31@gmail.com">
                  darshilgoti31@gmail.com
                </a>
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">
                <a href="tel:+916356775766">+91 6356775766</a>
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Ahmedabad, Gujarat, India</span>
            </div>
            <div className="social-links">
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
        </div>
      </div>
    </section>
  );
};

export default About;
