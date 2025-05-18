import { useEffect, useRef } from "react";
import "./styles/Skills.css";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "JavaScript", "Java", "C", "SQL", "HTML/CSS"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "FastAPI", "Express.js", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL", "PostgreSQL"],
    },
    {
      title: "Developer Tools",
      skills: ["VS Code", "Git", "GitHub", "Docker", "Jira", "Keycloak"],
    },
    {
      title: "Operating Systems",
      skills: ["Windows", "Linux"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container fade-in" ref={sectionRef}>
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
