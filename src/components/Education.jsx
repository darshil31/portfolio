import { useEffect, useRef } from "react";
import "./styles/Education.css";

const Education = () => {
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

  const education = [
    {
      institution: "Institute of Technology, Nirma University",
      degree: "Bachelor of Science in Computer Science",
      location: "Ahmedabad, Gujarat",
      period: "2020 - 2024",
      details: ["Cumulative GPA 8.42 / 10"],
      logo: "https://upload.wikimedia.org/wikipedia/en/8/83/Nirma_University_Logo.png",
    },
    {
      institution: "Ashadeep Vidhyalaya",
      degree: "High School",
      location: "Surat, Gujarat",
      period: "2018 - 2020",
      details: ["Percentage 96.83%"],
      logo: "https://cdn-icons-png.flaticon.com/512/2602/2602414.png",
    },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-container fade-in" ref={sectionRef}>
          {education.map((edu, index) => (
            <div className="education-card card" key={index}>
              <div className="education-header">
                <div className="education-logo">
                  <img
                    src={edu.logo || "/placeholder.svg"}
                    alt={edu.institution}
                  />
                </div>
                <div className="education-info">
                  <h3 className="education-institution">{edu.institution}</h3>
                  <div className="education-degree">
                    {edu.degree} | {edu.location}
                  </div>
                </div>
                <div className="education-period">
                  <span>{edu.period}</span>
                </div>
              </div>
              <div className="education-details">
                <ul>
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
