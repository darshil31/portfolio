"use client";

import { useEffect, useRef } from "react";
import "./styles/Coursework.css";

const Coursework = () => {
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

  const coursework = [
    {
      name: "Data Structure & Algorithms",
      icon: "fas fa-code-branch",
      description:
        "Study of fundamental data structures and algorithm design techniques",
    },
    {
      name: "Object Oriented Programming",
      icon: "fas fa-cubes",
      description:
        "Programming paradigm based on the concept of objects and classes",
    },
    {
      name: "Operating Systems",
      icon: "fas fa-desktop",
      description:
        "Study of OS concepts, process management, memory management, and file systems",
    },
    {
      name: "Database Management System",
      icon: "fas fa-database",
      description:
        "Design and implementation of database systems and query languages",
    },
    {
      name: "Computer Networks",
      icon: "fas fa-network-wired",
      description:
        "Study of network protocols, architecture, and communication systems",
    },
    {
      name: "Machine Learning",
      icon: "fas fa-brain",
      description:
        "Algorithms and statistical models for computer systems to perform tasks without explicit instructions",
    },
    {
      name: "Cloud Computing",
      icon: "fas fa-cloud",
      description:
        "Study of cloud services, deployment models, and virtualization technologies",
    },
  ];

  return (
    <section id="coursework" className="coursework">
      <div className="container">
        <h2 className="section-title">Relevant Coursework</h2>
        <div className="coursework-grid fade-in" ref={sectionRef}>
          {coursework.map((course, index) => (
            <div className="coursework-card card" key={index}>
              <div className="coursework-icon">
                <i className={course.icon}></i>
              </div>
              <h3 className="coursework-name">{course.name}</h3>
              <p className="coursework-description">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coursework;
