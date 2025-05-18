import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./styles/Hero.css";

const Hero = () => {
  const globeContainerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(null);
  const globeRef = useRef(null);
  const pointsRef = useRef(null);
  const linesRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!globeContainerRef.current) return;

    // Clear any existing canvas to prevent duplicates
    while (globeContainerRef.current.firstChild) {
      globeContainerRef.current.removeChild(
        globeContainerRef.current.firstChild
      );
    }

    // Initialize camera
    cameraRef.current = new THREE.PerspectiveCamera(75, 1, 0.1, 2000);
    cameraRef.current.position.z = 3;

    // Initialize renderer
    rendererRef.current = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    rendererRef.current.setSize(500, 500);
    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    globeContainerRef.current.appendChild(rendererRef.current.domElement);

    // Create globe
    const globeGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: 0x9d4edd,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      shininess: 100,
    });
    globeRef.current = new THREE.Mesh(globeGeometry, globeMaterial);
    sceneRef.current.add(globeRef.current);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);

    // Add point light
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    sceneRef.current.add(pointLight);

    // Create points on globe
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsCount = 300;
    const positions = new Float32Array(pointsCount * 3);
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xc77dff,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });

    for (let i = 0; i < pointsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / pointsCount);
      const theta = Math.sqrt(pointsCount * Math.PI) * phi;

      positions[i * 3] = Math.cos(theta) * Math.sin(phi) * 1.5;
      positions[i * 3 + 1] = Math.sin(theta) * Math.sin(phi) * 1.5;
      positions[i * 3 + 2] = Math.cos(phi) * 1.5;
    }

    pointsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    pointsRef.current = new THREE.Points(pointsGeometry, pointsMaterial);
    sceneRef.current.add(pointsRef.current);

    // Create connections between points
    const linesGeometry = new THREE.BufferGeometry();
    const linesCount = 100;
    const linesPositions = new Float32Array(linesCount * 6);

    for (let i = 0; i < linesCount; i++) {
      const idx1 = Math.floor(Math.random() * pointsCount);
      const idx2 = Math.floor(Math.random() * pointsCount);

      linesPositions[i * 6] = positions[idx1 * 3];
      linesPositions[i * 6 + 1] = positions[idx1 * 3 + 1];
      linesPositions[i * 6 + 2] = positions[idx1 * 3 + 2];

      linesPositions[i * 6 + 3] = positions[idx2 * 3];
      linesPositions[i * 6 + 4] = positions[idx2 * 3 + 1];
      linesPositions[i * 6 + 5] = positions[idx2 * 3 + 2];
    }

    linesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linesPositions, 3)
    );
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0xc77dff,
      transparent: true,
      opacity: 0.2,
    });
    linesRef.current = new THREE.LineSegments(linesGeometry, linesMaterial);
    sceneRef.current.add(linesRef.current);

    // Animation
    const animate = () => {
      if (globeRef.current && pointsRef.current && linesRef.current) {
        globeRef.current.rotation.y += 0.003;
        pointsRef.current.rotation.y += 0.003;
        linesRef.current.rotation.y += 0.003;
      }
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const size = Math.min(window.innerWidth * 0.4, 500);
      rendererRef.current.setSize(size, size);
      cameraRef.current.aspect = 1;
      cameraRef.current.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      sceneRef.current.clear();
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Darshil <span className="gradient-text">Goti</span>
          </h1>
          <h2 className="hero-subtitle">Software Engineer</h2>
          <p className="hero-description">
            Crafting elegant and innovative solutions to complex challenges
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary glow-effect">
              Get in Touch
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>
        </div>
        <div className="hero-globe" ref={globeContainerRef}></div>
      </div>
    </section>
  );
};

export default Hero;
