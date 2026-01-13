"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface CodeCapsuleProps {
  onSnapComplete?: () => void;
}

export default function CodeCapsule({ onSnapComplete }: CodeCapsuleProps) {
  const [isClosed, setIsClosed] = useState(false);
  const [hasParallax, setHasParallax] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsClosed(true);
      setTimeout(() => {
        onSnapComplete?.();
        setHasParallax(true);
      }, 400);
    }, 1000);
    return () => clearTimeout(timer1);
  }, [onSnapComplete]);

  useEffect(() => {
    if (!hasParallax || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / rect.width);
      mouseY.set((e.clientY - centerY) / rect.height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hasParallax, mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative w-full h-[500px] flex items-center justify-center">
      <motion.div
        style={{
          rotateX: hasParallax ? rotateX : 0,
          rotateY: hasParallax ? rotateY : 0,
          y: hasParallax ? translateY : 0,
        }}
        className="relative"
        animate={hasParallax ? {
          y: [0, -10, 0],
        } : {}}
        transition={hasParallax ? {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        } : {}}
      >
        <svg width="300" height="400" viewBox="0 0 300 400" className="w-[300px] h-[400px]">
          <defs>
            <linearGradient id="capsuleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#017EDE" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0064DA" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="capGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#02A5F7" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#017EDE" stopOpacity="0.98" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
              </feMerge>
            </filter>
          </defs>

          {hasParallax && (
            <motion.ellipse
              cx="150"
              cy="200"
              rx="100"
              ry="180"
              fill="#017EDE"
              opacity={0.05}
              filter="url(#softGlow)"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          <motion.g
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            <ellipse cx="150" cy="350" rx="80" ry="40" fill="url(#capsuleGrad)" filter="url(#glow)" />
            <rect x="70" y="50" width="160" height="300" rx="20" fill="url(#capsuleGrad)" filter="url(#glow)" />
          </motion.g>

          <motion.g
            initial={{ y: -200, opacity: 0 }}
            animate={{
              y: isClosed ? 0 : -200,
              opacity: isClosed ? 1 : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.6,
            }}
          >
            <ellipse cx="150" cy="50" rx="80" ry="40" fill="url(#capGrad)" filter="url(#glow)" />
            <rect x="70" y="10" width="160" height="80" rx="20" fill="url(#capGrad)" filter="url(#glow)" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}
