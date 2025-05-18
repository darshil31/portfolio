import { useEffect, useRef } from "react";
import "./styles/Projects.css";

const Projects = () => {
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

  const projects = [
    {
      title: "POS Web App",
      description:
        "Implemented all major features of a POS system, including product management, inventory tracking, and customer checkout.",
      technologies: [
        "HTML",
        "CSS",
        "React.js",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
      period: "Winter 2022",
      link: "#",
    },
    {
      title: "Image Editing Tool",
      description:
        "Implemented an image editing tool using Python and OpenCV. The tool provides functionalities like image cropping, resizing, color adjustment, and applying various filters.",
      technologies: ["Python", "OpenCV", "Tkinter"],
      period: "Summer 2023",
      link: "#",
    },
    {
      title: "Sorting Visualizer",
      description:
        "Developed a web app using HTML, CSS, and JavaScript to visualize classic sorting algorithms.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      period: "Summer 2023",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid fade-in" ref={sectionRef}>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-period">{project.period}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
