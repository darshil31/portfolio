import { useEffect, useRef } from "react";
import "./styles/Experience.css";

const Experience = () => {
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

  const experiences = [
    {
      title: "Software Engineer (E2)",
      company: "Crest Data Systems",
      location: "Ahmedabad, Gujarat",
      period: "April 2025 – Present",
      description: "",
    },
    {
      title: "Software Engineer (E1)",
      company: "Crest Data Systems",
      location: "Ahmedabad, Gujarat",
      period: "July 2024 – March 2025",
      description:
        "Developed and deployed an AI-driven SOC Analyst to analyze alerts from tools like Splunk, Elastic, and Datadog. Automated alert classification, reduced false positives, and prioritized threats to enhance SOC team efficiency and response time.",
    },
    {
      title: "Software Engineer Intern (E0)",
      company: "Crest Data Systems",
      location: "Ahmedabad, Gujarat",
      period: "January 2024 – June 2024",
      description:
        "Developed and deployed an AI-driven SOC Analyst to analyze alerts from tools like Splunk, Elastic, and Datadog. Automated alert classification, reduced false positives, and prioritized threats to enhance SOC team efficiency and response time.",
    },
    {
      title: "Full-Stack Developer Intern",
      company: "MARQUEE SOLUTIONS",
      location: "Surat, Gujarat",
      period: "June 2023 – July 2023",
      description: "Wrote and reviewed code for POS Web App in JS.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline fade-in" ref={sectionRef}>
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-company">
                  {exp.company} | {exp.location}
                </div>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
