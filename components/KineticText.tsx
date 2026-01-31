"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface KineticTextProps {
  children: string;
  className?: string;
}

export default function KineticText({ children, className = "" }: KineticTextProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.h1
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none"
      >
        {children}
      </motion.h1>
    </div>
  );
}
