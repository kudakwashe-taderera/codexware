"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiArrowRight, FiCheck, FiStar, FiCode, FiSmartphone, FiGlobe, FiChevronRight, FiUsers, FiShield, FiTrendingUp, FiCpu } from "react-icons/fi";
import Button from "@/components/Button";
import LaptopAnimation from "@/components/LaptopAnimation";

const FloatingElement = ({ delay = 0, className = "" }: { delay?: number; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ delay, duration: 1.5, ease: "easeOut" }}
      className={`absolute rounded-full blur-3xl ${className}`}
    />
  );
};

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gridSize = 6;
  const [gridPoints, setGridPoints] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
  }>>([]);

  useEffect(() => {
    if (!mounted) return;
    
    setGridPoints(Array.from({ length: gridSize * gridSize }, (_, i) => {
      const col = i % gridSize;
      const row = Math.floor(i / gridSize);
      return {
        id: i,
        x: (col * 20) + 10,
        y: (row * 20) + 10,
        size: 3 + Math.random() * 2,
      };
    }));
  }, [mounted]);

  const techNodes = [
    { label: "React", x: 15, y: 25, color: "text-cyan-400", size: "text-sm md:text-base" },
    { label: "Next.js", x: 35, y: 20, color: "text-white", size: "text-sm md:text-base" },
    { label: "TypeScript", x: 55, y: 25, color: "text-blue-400", size: "text-sm md:text-base" },
    { label: "Python", x: 75, y: 20, color: "text-yellow-400", size: "text-sm md:text-base" },
    { label: "Django", x: 15, y: 45, color: "text-green-500", size: "text-sm md:text-base" },
    { label: "PostgreSQL", x: 35, y: 50, color: "text-blue-300", size: "text-xs md:text-sm" },
    { label: "Node.js", x: 55, y: 45, color: "text-green-400", size: "text-sm md:text-base" },
    { label: "Tailwind", x: 75, y: 50, color: "text-teal-400", size: "text-sm md:text-base" },
    { label: "Framer", x: 95, y: 35, color: "text-purple-400", size: "text-sm md:text-base" },
    { label: "Git", x: 95, y: 55, color: "text-orange-400", size: "text-sm md:text-base" },
  ];

  const [floatingBubbles, setFloatingBubbles] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    delay: number;
    speed: number;
    color: string;
  }>>([]);

  const [dataParticles, setDataParticles] = useState<Array<{
    id: number;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    delay: number;
    speed: number;
    color: string;
  }>>([]);

  const [binaryStream, setBinaryStream] = useState<Array<{
    id: number;
    isOne: boolean;
    speed: number;
    delay: number;
    size: string;
    startY: number;
  }>>([]);

  useEffect(() => {
    if (!mounted) return;

    const techNodeZones = [
      { x: 15, y: 25, radius: 8 },
      { x: 35, y: 20, radius: 8 },
      { x: 55, y: 25, radius: 8 },
      { x: 75, y: 20, radius: 8 },
      { x: 15, y: 45, radius: 8 },
      { x: 35, y: 50, radius: 8 },
      { x: 55, y: 45, radius: 8 },
      { x: 75, y: 50, radius: 8 },
      { x: 95, y: 35, radius: 8 },
      { x: 95, y: 55, radius: 8 },
    ];

    const isInTechZone = (x: number, y: number) => {
      return techNodeZones.some(zone => {
        const distance = Math.sqrt(Math.pow(x - zone.x, 2) + Math.pow(y - zone.y, 2));
        return distance < zone.radius;
      });
    };

    const safeBubblePositions = [
      { x: 5, y: 10 }, { x: 5, y: 30 }, { x: 5, y: 70 }, { x: 5, y: 90 },
      { x: 25, y: 5 }, { x: 25, y: 65 }, { x: 25, y: 85 },
      { x: 45, y: 5 }, { x: 45, y: 75 }, { x: 45, y: 95 },
      { x: 65, y: 10 }, { x: 65, y: 80 }, { x: 65, y: 95 },
      { x: 85, y: 5 }, { x: 85, y: 25 }, { x: 85, y: 70 },
      { x: 10, y: 50 }, { x: 30, y: 90 }, { x: 50, y: 5 }
    ];

    setFloatingBubbles(Array.from({ length: 18 }, (_, i) => {
      let x, y;
      let attempts = 0;
      
      if (i < safeBubblePositions.length) {
        const pos = safeBubblePositions[i];
        x = pos.x + (Math.random() * 6 - 3);
        y = pos.y + (Math.random() * 6 - 3);
      } else {
        do {
          x = Math.random() * 100;
          y = Math.random() * 100;
          attempts++;
        } while (isInTechZone(x, y) && attempts < 50);
      }
      
      return {
        id: i,
        size: 80 + Math.random() * 140,
        x: Math.max(2, Math.min(98, x)),
        y: Math.max(2, Math.min(98, y)),
        delay: Math.random() * 5,
        speed: 0.5 + Math.random() * 1.5,
        color: i % 4 === 0 ? 'primary' : i % 4 === 1 ? 'secondary' : i % 4 === 2 ? 'accent' : 'cyan'
      };
    }));

    setDataParticles(Array.from({ length: 60 }, (_, i) => {
      const startNode = techNodes[Math.floor(Math.random() * techNodes.length)];
      const endNode = techNodes[Math.floor(Math.random() * techNodes.length)];
      
      const colorClass = startNode.color;
      let particleColor = 'rgba(1, 126, 222, 0.8)';
      
      if (colorClass.includes('cyan')) particleColor = 'rgba(34, 211, 238, 0.8)';
      else if (colorClass.includes('blue')) particleColor = 'rgba(59, 130, 246, 0.8)';
      else if (colorClass.includes('green')) particleColor = 'rgba(34, 197, 94, 0.8)';
      else if (colorClass.includes('yellow')) particleColor = 'rgba(250, 204, 21, 0.8)';
      else if (colorClass.includes('purple')) particleColor = 'rgba(168, 85, 247, 0.8)';
      else if (colorClass.includes('orange')) particleColor = 'rgba(249, 115, 22, 0.8)';
      else if (colorClass.includes('teal')) particleColor = 'rgba(20, 184, 166, 0.8)';
      
      const offsetDistance = 6;
      const startAngle = Math.random() * Math.PI * 2;
      const endAngle = Math.random() * Math.PI * 2;
      
      return {
        id: i,
        startX: startNode.x + Math.cos(startAngle) * offsetDistance,
        startY: startNode.y + Math.sin(startAngle) * offsetDistance,
        endX: endNode.x + Math.cos(endAngle) * offsetDistance,
        endY: endNode.y + Math.sin(endAngle) * offsetDistance,
        delay: Math.random() * 10,
        speed: 2 + Math.random() * 4,
        color: particleColor,
      };
    }));

    setBinaryStream(Array.from({ length: 25 }, (_, i) => ({
      id: i,
      isOne: Math.random() > 0.5,
      speed: 6 + Math.random() * 8,
      delay: Math.random() * 8,
      size: Math.random() > 0.7 ? 'text-sm' : 'text-xs',
      startY: -20 - Math.random() * 20,
    })));
  }, [mounted]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-950" />
      
      <div className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      <svg className="absolute inset-0 w-full h-full opacity-50">
        {gridPoints.length > 0 && gridPoints.map((point, i) => {
          const rightNeighbor = gridPoints[i + 1];
          const bottomNeighbor = gridPoints[i + gridSize];
          
          return (
            <g key={point.id}>
              {rightNeighbor && rightNeighbor.x < 100 && (
                <motion.line
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${rightNeighbor.x}%`}
                  y2={`${rightNeighbor.y}%`}
                  stroke="rgba(1, 126, 222, 0.5)"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.02,
                    ease: "easeOut"
                  }}
                />
              )}
              
              {bottomNeighbor && (
                <motion.line
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${bottomNeighbor.x}%`}
                  y2={`${bottomNeighbor.y}%`}
                  stroke="rgba(245, 146, 0, 0.5)"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.02 + 0.1,
                    ease: "easeOut"
                  }}
                />
              )}
              
              <motion.circle
                cx={`${point.x}%`}
                cy={`${point.y}%`}
                r={point.size}
                fill="rgba(255, 255, 255, 0.4)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
              />
            </g>
          );
        })}
        
        {[
          [0, 1],
          [0, 2],
          [1, 2],
          [0, 7],
          
          [3, 4],
          [4, 5],
          [3, 5],
          [6, 5],
          
          [8, 0],
          [9, 3],
          [9, 6],
          
          [2, 3],
          [7, 4],
        ].map(([startIdx, endIdx], i) => {
          const start = techNodes[startIdx];
          const end = techNodes[endIdx];
          
          return (
            <motion.line
              key={`tech-conn-${i}`}
              x1={`${start.x}%`}
              y1={`${start.y}%`}
              x2={`${end.x}%`}
              y2={`${end.y}%`}
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth="0.8"
              strokeDasharray="2,2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 2.5,
                delay: i * 0.15,
                ease: "easeOut"
              }}
            />
          );
        })}
      </svg>
      
      {floatingBubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute rounded-full blur-2xl ${
            bubble.color === 'primary' ? 'bg-primary/30' :
            bubble.color === 'secondary' ? 'bg-secondary/30' :
            bubble.color === 'accent' ? 'bg-purple-500/30' :
            'bg-cyan-500/30'
          }`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(bubble.id * 0.7) * 40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20 + bubble.speed * 5,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {techNodes.map((node, i) => (
        <motion.div
          key={node.label}
          className={`absolute ${node.color} ${node.size} font-mono font-semibold tracking-tight`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
            textShadow: `
              0 0 5px currentColor,
              0 0 10px currentColor
            `,
            filter: 'drop-shadow(0 0 3px currentColor)',
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 3 + (i * 0.3),
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        >
          {node.label}
        </motion.div>
      ))}
      
      {dataParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: particle.color,
            left: `${particle.startX}%`,
            top: `${particle.startY}%`,
            transform: 'translate(-50%, -50%)',
            boxShadow: `
              0 0 5px ${particle.color},
              0 0 10px ${particle.color}
            `,
          }}
          animate={{
            x: [`${particle.startX}%`, `${particle.endX}%`],
            y: [`${particle.startY}%`, `${particle.endY}%`],
            opacity: [0, 0.25, 0.25, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
            times: [0, 0.2, 0.8, 1],
          }}
        />
      ))}
      
      {binaryStream.map((binary) => (
        <motion.div
          key={`binary-${binary.id}`}
          className={`absolute font-mono ${binary.size} font-bold ${
            binary.isOne ? 'text-cyan-400/60' : 'text-blue-400/60'
          }`}
          style={{
            left: `${5 + (binary.id * 3.8)}%`,
            top: `${binary.startY}px`,
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor',
          }}
          animate={{
            y: [`${binary.startY}px`, '120%'],
            opacity: [0, 0.8, 0.8, 0],
            x: [0, Math.sin(binary.id) * 25, 0],
          }}
          transition={{
            duration: binary.speed,
            repeat: Infinity,
            delay: binary.delay,
            ease: "linear",
            times: [0, 0.2, 0.8, 1],
          }}
        >
          {binary.isOne ? '1' : '0'}
        </motion.div>
      ))}
      
      {[
        "npm run dev", "python manage.py", "git commit -m", "docker build -t",
        "SELECT * FROM", "useEffect(() => {", "async function", "const [state",
        "return (<div>", "from django.db", "import React", "export default"
      ].map((snippet, i) => (
        <motion.div
          key={`snippet-${i}`}
          className="absolute font-mono text-xs md:text-sm text-gray-300/50"
          style={{
            left: `${15 + (i * 8)}%`,
            top: `${65 + (i % 4) * 8}%`,
          }}
          animate={{
            x: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut",
          }}
        >
          {snippet}
        </motion.div>
      ))}
      
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`circuit-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          style={{
            width: '180px',
            left: `${5 + i * 8}%`,
            top: `${25 + (i % 5) * 15}%`,
            transform: `rotate(${i % 2 === 0 ? '35deg' : '-35deg'})`,
          }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {techNodes.filter((_, i) => i % 2 === 0).map((node, i) => (
        <motion.div
          key={`node-pulse-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-primary/25 to-secondary/25"
          style={{
            width: '120px',
            height: '120px',
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(20px)',
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {gridPoints.filter((_, i) => i % 4 === 0).map((point, i) => (
        <motion.div
          key={`grid-pulse-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-primary/15 to-cyan-500/15"
          style={{
            width: '90px',
            height: '90px',
            left: `${point.x}%`,
            top: `${point.y}%`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(15px)',
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        />
      ))}
      
      <div className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.15) 1px, rgba(255,255,255,0.15) 2px)',
          backgroundSize: '100% 3px',
        }}
      />
      
      <motion.div
        className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full blur-3xl"
        animate={{
          background: [
            'radial-gradient(circle, rgba(1,126,222,0.1) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(1,126,222,0.15) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(1,126,222,0.1) 0%, transparent 70%)',
          ],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full blur-3xl"
        animate={{
          background: [
            'radial-gradient(circle, rgba(245,146,0,0.08) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(245,146,0,0.12) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(245,146,0,0.08) 0%, transparent 70%)',
          ],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

const triangleStyles = `
  .triangle-clip-path {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`;

const TechMarquee = () => {
  const frontendTech = [
    "Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"
  ];
  
  const backendTech = [
    "Node.js", "Python", "Django", "GraphQL", "PostgreSQL", "Prisma", "TRPC"
  ];
  
  const devOpsTech = [
    "AWS", "Docker", "Kubernetes", "React Native", "Vercel", "GitHub Actions"
  ];

  return (
    <div className="relative overflow-hidden py-4 md:py-8">
      <div className="flex space-x-8 animate-marquee-fast whitespace-nowrap">
        {[...frontendTech, ...frontendTech, ...frontendTech].map((tech, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full glass hover:shadow-glow transition-all duration-300 flex-shrink-0"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm md:text-lg font-medium text-white">{tech}</span>
          </div>
        ))}
      </div>
      <div className="flex space-x-8 animate-marquee-fast-reverse whitespace-nowrap mt-4 md:mt-6">
        {[...backendTech, ...backendTech, ...backendTech].map((tech, idx) => (
          <div
            key={`reverse-${idx}`}
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full glass hover:shadow-glow transition-all duration-300 flex-shrink-0"
          >
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm md:text-lg font-medium text-white">{tech}</span>
          </div>
        ))}
      </div>
      <div className="flex space-x-8 animate-marquee-fast whitespace-nowrap mt-4 md:mt-6">
        {[...devOpsTech, ...devOpsTech, ...devOpsTech].map((tech, idx) => (
          <div
            key={`third-${idx}`}
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full glass hover:shadow-glow transition-all duration-300 flex-shrink-0"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm md:text-lg font-medium text-white">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClient]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <AnimatedBackground />
      
      <section className="relative flex items-center px-4 md:px-6 lg:px-8 pt-12 pb-8 z-10 min-h-[calc(90vh-4rem)]">
        <FloatingElement 
          delay={0.5} 
          className="w-64 h-64 bg-primary/15 -top-10 -left-10" 
        />
        <FloatingElement 
          delay={1} 
          className="w-48 h-48 bg-secondary/15 bottom-10 right-10" 
        />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              style={{ 
                x: mousePosition.x * 0.3,
                y: mousePosition.y * 0.3,
                opacity: opacity || 1,
                scale: scale || 1,
              }}
              className="space-y-6 relative z-20"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 backdrop-blur-sm border border-white/10"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-white/80 tracking-wide">
                  Premium Development Studio
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                <span className="block">Digital</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-primary-light bg-clip-text text-transparent">
                  Experiences
                </span>
                <span className="block">That Convert</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/70 max-w-lg leading-relaxed"
              >
                We craft high-performance web & mobile applications that don&apos;t just look 
                premium, they deliver measurable business results.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 pt-4"
              >
                <Button
                  href="/services"
                  variant="primary"
                  className="group px-5 py-3 text-base rounded-full"
                >
                  <span className="flex items-center gap-2">
                    View Services
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button
                  href="/projects"
                  variant="secondary"
                  className="px-5 py-3 text-base rounded-full border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                >
                  View Case Studies
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 pt-6 text-sm text-white/60"
              >
                <div className="flex items-center gap-2">
                  <FiCheck className="text-primary text-sm" />
                  <span>14-Day Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheck className="text-primary text-sm" />
                  <span>Pixel Perfect UI</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheck className="text-primary text-sm" />
                  <span>24/7 Support</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              style={{ 
                x: -mousePosition.x * 0.2,
                y: -mousePosition.y * 0.2,
              }}
              className="relative z-10 mt-4 md:mt-0"
            >
              <LaptopAnimation />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Built with Modern Technology
            </h2>
            <p className="text-white/60 text-base">
              We use cutting-edge tools to deliver exceptional results
            </p>
          </motion.div>
          <TechMarquee />
        </div>
      </section>
      
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FiShield,
                title: "Enterprise Security",
                desc: "Bank-level encryption, SOC 2 compliance, and GDPR-ready infrastructure"
              },
              {
                icon: FiTrendingUp,
                title: "Proven ROI",
                desc: "Average 3x return on technology investments with measurable business impact"
              },
              {
                icon: FiCpu,
                title: "Architecture Excellence",
                desc: "Cloud-native microservices, auto-scaling infrastructure, and 99.9% uptime"
              },
              {
                icon: FiUsers,
                title: "Senior Team",
                desc: "10+ years average experience, senior architects on every project, zero juniors"
              }
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="absolute inset-0 glass" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary-light bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a digital experience that sets you apart from competitors 
              and drives real business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button
                href="/contact"
                variant="primary"
                className="group px-8 py-4 text-lg rounded-full w-full sm:w-auto"
              >
                <span className="flex items-center gap-3 justify-center">
                  <FiStar />
                  Schedule Free Consultation
                  <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
              
              <Button
                href="/about"
                variant="secondary"
                className="group px-8 py-4 text-lg rounded-full w-full sm:w-auto"
              >
                <span className="flex items-center gap-3 justify-center">
                  <FiUsers />
                  Learn About Us
                  <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </div>
            
            <p className="text-white/50 text-sm mt-6">
              Typically respond within 2 hours
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}