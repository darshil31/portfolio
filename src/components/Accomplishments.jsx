"use client";

import { useEffect, useRef } from "react";
import "./styles/Accomplishments.css";

const Accomplishments = () => {
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

  const accomplishments = [
    {
      title: "Academic Excellence",
      description: "Achieved 8th rank in the state in S.S.C. Examination.",
      icon: "fas fa-award",
    },
    {
      title: "Coding Proficiency",
      description:
        "Solved 1000+ coding questions on platforms like LeetCode, CodeChef, and Codeforces.",
      icon: "fas fa-laptop-code",
    },
    {
      title: "Hackathon Success",
      description:
        "Runner-up at Mined Hackathon (National Level Competition), Track: D360 (Diamond Query ChatBot).",
      icon: "fas fa-trophy",
    },
  ];

  return (
    <section id="accomplishments" className="accomplishments">
      <div className="container">
        <h2 className="section-title">Accomplishments</h2>
        <div className="accomplishments-grid fade-in" ref={sectionRef}>
          {accomplishments.map((accomplishment, index) => (
            <div className="accomplishment-card card" key={index}>
              <div className="accomplishment-icon">
                <i className={accomplishment.icon}></i>
              </div>
              <h3 className="accomplishment-title">{accomplishment.title}</h3>
              <p className="accomplishment-description">
                {accomplishment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
