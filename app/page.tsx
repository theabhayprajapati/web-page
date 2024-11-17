"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import React, { useRef, useEffect, useState } from "react";
export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#181C25]">
      <MatrixEffect />

      <div className="max-w-[700px] mx-auto py-8 px-4 text-gray-100">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

const MatrixEffect = () => {
  const [matrix, setMatrix] = useState<any[]>([]);
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const rows = 11;
    const cols = 15;
    const characters = "0123456789";

    const initializeMatrix = () => {
      const newMatrix = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () =>
          characters.charAt(Math.floor(Math.random() * characters.length))
        )
      );
      setMatrix(newMatrix);
    };

    const interval = setInterval(() => {
      initializeMatrix();
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  console.log(matrix);
  return (
    <div
      className="relative matrix-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="matrix-grid">
        {matrix.map((row, rowIndex) =>
          row.map((char: string, colIndex: number) => (
            <span key={`${rowIndex}-${colIndex}`} className="matrix-char">
              {getRandomText()}
            </span>
          ))
        )}
      </div>

      <div
        className={`custom-cursor ${isHovering ? "hovering" : ""}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      ></div>

      <div className="relative flex flex-col items-center justify-center h-full bg-transparent">
        <h1 className="text-5xl font-extrabold text-white">Abhay Prajapati</h1>
        <p className="text-lg text-gray-300 mt-4">Full Stack</p>
      </div>
    </div>
  );
};

function getRandomText() {
  const texts = [
    "docker",
    "react",
    "java",
    "golang",
    "node",
    "typescript",
    "kubernetes",
    "aws",
    "azure",
    "spring",
    "python",
    "javascript",
    "mongodb",
    "postgresql",
    "mysql",
    "redis",
    "graphql",
    "kakfa",
    "rabbitmq",
    "nginx",
    "git",
    "jenkins",
    "github",
    "gitlab",
    "code.deskera.com",
  ];

  return texts[Math.floor(Math.random() * texts.length)];
}
