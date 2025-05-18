"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./styles/BackgroundAnimation.css";

const BackgroundAnimation = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    sceneRef.current = new THREE.Scene();

    // Initialize camera
    const aspectRatio = window.innerWidth / window.innerHeight;
    cameraRef.current = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    cameraRef.current.position.z = 30;

    // Initialize renderer
    rendererRef.current = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Create material based on theme
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    particlesMaterial.color = new THREE.Color("#9d4edd");

    // Create points
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    sceneRef.current.add(particlesMesh);

    // Create lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: "#9d4edd",
      transparent: true,
      opacity: 0.2,
    });

    const linesCount = 50;
    const lines = [];

    for (let i = 0; i < linesCount; i++) {
      const lineGeometry = new THREE.BufferGeometry();
      const points = [];
      const startPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      const endPoint = new THREE.Vector3(
        startPoint.x + (Math.random() - 0.5) * 20,
        startPoint.y + (Math.random() - 0.5) * 20,
        startPoint.z + (Math.random() - 0.5) * 20
      );
      points.push(startPoint, endPoint);
      lineGeometry.setFromPoints(points);
      const line = new THREE.Line(lineGeometry, linesMaterial);
      sceneRef.current.add(line);
      lines.push({ line, velocity: Math.random() * 0.01 + 0.005 });
    }

    // Animation
    const animate = () => {
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;

      // Animate lines
      lines.forEach((lineObj) => {
        lineObj.line.rotation.x += lineObj.velocity * 0.1;
        lineObj.line.rotation.y += lineObj.velocity * 0.15;
      });

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      rendererRef.current.setSize(width, height);
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="background-animation"></div>;
};

export default BackgroundAnimation;
