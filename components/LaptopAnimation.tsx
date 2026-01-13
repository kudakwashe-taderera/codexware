"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FiCpu, FiCode, FiZap, FiMonitor, FiUser, FiTerminal, FiRefreshCw } from "react-icons/fi";

interface CodeLine {
  text: string;
  type: 'function' | 'variable' | 'string' | 'keyword' | 'comment';
}

export default function LaptopAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollAnimationFrameRef = useRef<number | null>(null);
  const lastScrollTimeRef = useRef<number>(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const screenOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6],
    [1, 1, 1, 1]
  );

  const screenScale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [1, 1, 1, 1]);
  const screenY = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0, 0, 0, 0]);
  
  const ambientPulse = useTransform(scrollYProgress, [0, 0.3], [1, 1]);
  const glowIntensity = useTransform(scrollYProgress, [0, 0.3], [0.6, 0.6]);

  const [activeCodeLines, setActiveCodeLines] = useState<number[]>([]);
  const [cursorBlink, setCursorBlink] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCompilationComplete, setShowCompilationComplete] = useState(false);
  const [typingRestarted, setTypingRestarted] = useState(false);
  const [typingKey, setTypingKey] = useState(0);
  const [currentViewportStart, setCurrentViewportStart] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  const codeLines: CodeLine[] = [
    { text: "// CODEXWARE DEVELOPMENT STUDIO", type: 'comment' },
    { text: "// Premium Web & Mobile Applications", type: 'comment' },
    { text: "// Crafted with precision and innovation", type: 'comment' },
    { text: "", type: 'comment' },
    { text: "import { useState, useEffect } from 'react'", type: 'keyword' },
    { text: "import { motion } from 'framer-motion'", type: 'keyword' },
    { text: "import { createPremiumExperience } from '@codexware/sdk'", type: 'keyword' },
    { text: "", type: 'comment' },
    { text: "const CodeXwareMasterpiece = () => {", type: 'function' },
    { text: "  // State management for premium quality", type: 'comment' },
    { text: "  const [quality, setQuality] = useState('maximum')", type: 'variable' },
    { text: "  const [performance, setPerformance] = useState(100)", type: 'variable' },
    { text: "  const [clientSatisfaction, setClientSatisfaction] = useState('high')", type: 'variable' },
    { text: "", type: 'comment' },
    { text: "  // Animation configurations", type: 'comment' },
    { text: "  const animations = {", type: 'variable' },
    { text: "    smooth: '0.6s cubic-bezier(0.16, 1, 0.3, 1)',", type: 'string' },
    { text: "    premium: {", type: 'variable' },
    { text: "      opacity: 1,", type: 'variable' },
    { text: "      y: 0,", type: 'variable' },
    { text: "      scale: 1", type: 'variable' },
    { text: "    },", type: 'variable' },
    { text: "    micro: {", type: 'variable' },
    { text: "      duration: 0.3,", type: 'variable' },
    { text: "      ease: 'easeOut'", type: 'variable' },
    { text: "    }", type: 'variable' },
    { text: "  }", type: 'variable' },
    { text: "", type: 'comment' },
    { text: "  // Initialize all premium features", type: 'comment' },
    { text: "  useEffect(() => {", type: 'keyword' },
    { text: "    const initPremiumStack = async () => {", type: 'function' },
    { text: "      await loadThreeJSAnimations()", type: 'function' },
    { text: "      await initializeParallaxEffects()", type: 'function' },
    { text: "      await optimizeForMobile()", type: 'function' },
    { text: "      await setupAnalytics()", type: 'function' },
    { text: "      console.log('Premium stack initialized')", type: 'function' },
    { text: "    }", type: 'keyword' },
    { text: "    initPremiumStack()", type: 'function' },
    { text: "  }, [])", type: 'keyword' },
    { text: "", type: 'comment' },
    { text: "  // Main render with premium components", type: 'comment' },
    { text: "  return (", type: 'keyword' },
    { text: "    <motion.div", type: 'keyword' },
    { text: "      initial={{ opacity: 0 }}", type: 'variable' },
    { text: "      animate={animations.premium}", type: 'variable' },
    { text: "      transition={{ duration: 0.8 }}", type: 'variable' },
    { text: "      className='premium-experience'", type: 'string' },
    { text: "    >", type: 'keyword' },
    { text: "      <SmoothAnimations config={animations} />", type: 'function' },
    { text: "      <PixelPerfectUI />", type: 'function' },
    { text: "      <BlazingFastPerformance />", type: 'function' },
    { text: "      <ClientSatisfaction level={clientSatisfaction} />", type: 'function' },
    { text: "      <BusinessResults metrics='conversion' />", type: 'function' },
    { text: "      <CodeXwareSignature />", type: 'function' },
    { text: "    </motion.div>", type: 'keyword' },
    { text: "  )", type: 'keyword' },
    { text: "}", type: 'keyword' },
    { text: "", type: 'comment' },
    { text: "// Export the masterpiece", type: 'comment' },
    { text: "export default CodeXwareMasterpiece", type: 'keyword' },
    { text: "", type: 'comment' },
    { text: "// Crafted with precision by CodeXware Studio", type: 'comment' },
    { text: "// Delivering digital experiences that convert", type: 'comment' },
    { text: "// Transforming visions into reality since 2023", type: 'comment' },
  ];

  useEffect(() => {
    if (typingRestarted) {
      setTimeout(() => {
        setTypingRestarted(false);
      }, 800);
      return;
    }
    
    setActiveCodeLines([]);
    setIsTypingComplete(false);
    setShowCompilationComplete(false);
    setCurrentViewportStart(0);
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex >= codeLines.length) {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        
        setTimeout(() => {
          setShowCompilationComplete(true);
        }, 500);
        
        setTimeout(() => {
          setActiveCodeLines([]);
          setIsTypingComplete(false);
          setShowCompilationComplete(false);
          setCurrentViewportStart(0);
          setTypingKey(prev => prev + 1);
        }, 3000);
        
        return;
      }
      
      setActiveCodeLines(prev => [...prev, currentIndex]);
      currentIndex++;
    }, 80);

    return () => clearInterval(typingInterval);
  }, [typingKey, typingRestarted]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (codeContainerRef.current && autoScrollEnabled && activeCodeLines.length > 8) {
      const linesToShow = 12;
      const targetLine = Math.max(0, activeCodeLines.length - linesToShow);
      
      const lineHeight = 22;
      const scrollTop = targetLine * lineHeight;
      
      codeContainerRef.current.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
      
      setCurrentViewportStart(targetLine);
    }
  }, [activeCodeLines, autoScrollEnabled]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (autoScrollAnimationFrameRef.current) {
      cancelAnimationFrame(autoScrollAnimationFrameRef.current);
      autoScrollAnimationFrameRef.current = null;
    }

    if (!isTypingComplete || !autoScrollEnabled) {
      return;
    }

    const scrollSpeed = 0.5;
    const targetFPS = 60;
    const frameDelay = 1000 / targetFPS;
    let isRunning = true;
    let lastUpdateTime = performance.now();
    let currentScrollDirection = isScrollingDown;

    const autoScroll = (currentTime: number) => {
      if (!isRunning) {
        return;
      }

      const container = codeContainerRef.current;
      if (!container) {
        autoScrollAnimationFrameRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      const deltaTime = currentTime - lastUpdateTime;
      
      if (deltaTime >= frameDelay) {
        try {
          const currentScroll = container.scrollTop;
          const maxScroll = container.scrollHeight - container.clientHeight;
          
          if (currentScrollDirection) {
            if (currentScroll < maxScroll - 5) {
              container.scrollTop = currentScroll + scrollSpeed;
            } else {
              currentScrollDirection = false;
            }
          } else {
            if (currentScroll > 5) {
              container.scrollTop = currentScroll - scrollSpeed;
            } else {
              currentScrollDirection = true;
            }
          }
          
          lastUpdateTime = currentTime;
        } catch (e) {
          console.error('Auto-scroll error:', e);
        }
      }

      if (isRunning) {
        autoScrollAnimationFrameRef.current = requestAnimationFrame(autoScroll);
      }
    };

    const startAnimation = () => {
      if (codeContainerRef.current) {
        lastUpdateTime = performance.now();
        autoScrollAnimationFrameRef.current = requestAnimationFrame(autoScroll);
      }
    };

    startAnimation();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isRunning) {
        startAnimation();
      }
    };

    const keepAliveInterval = setInterval(() => {
      if (isRunning && !autoScrollAnimationFrameRef.current && codeContainerRef.current) {
        startAnimation();
      }
    }, 1000);

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isRunning = false;
      clearInterval(keepAliveInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (autoScrollAnimationFrameRef.current) {
        cancelAnimationFrame(autoScrollAnimationFrameRef.current);
        autoScrollAnimationFrameRef.current = null;
      }
    };
  }, [isTypingComplete, autoScrollEnabled]); // eslint-disable-line react-hooks/exhaustive-deps

  const getCodeColor = (type: CodeLine['type']) => {
    switch(type) {
      case 'keyword': return 'text-purple-400';
      case 'function': return 'text-blue-400';
      case 'variable': return 'text-cyan-300';
      case 'string': return 'text-green-400';
      case 'comment': return 'text-gray-500';
      default: return 'text-white';
    }
  };

  const restartAnimation = () => {
    setActiveCodeLines([]);
    setIsTypingComplete(false);
    setShowCompilationComplete(false);
    setTypingRestarted(true);
    setTypingKey(prev => prev + 1);
    
    setTimeout(() => {
      setTypingRestarted(false);
    }, 800);
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden"
      key={typingKey}
    >
      <AnimatePresence>
        {typingRestarted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-2 left-1/2 -translate-x-1/2 z-30"
          >
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
              <span className="text-xs text-white flex items-center gap-1">
                <FiRefreshCw className="w-3 h-3 animate-spin" />
                Restarting Development...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: ambientPulse }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/5 to-transparent blur-2xl rounded-full" />
      </motion.div>

      <motion.div
        className="relative w-full max-w-3xl md:max-w-4xl"
        style={{
          opacity: screenOpacity,
          scale: screenScale,
          y: screenY,
        }}
      >
        <div className="relative">
          <div className="w-full max-w-[650px] md:max-w-[750px] h-[320px] md:h-[380px] bg-gradient-to-b from-gray-900 to-black rounded-xl mx-auto shadow-2xl border-2 border-gray-800 overflow-hidden">
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                opacity: glowIntensity,
                background: `radial-gradient(ellipse at 50% 20%, rgba(1, 126, 222, 0.15) 0%, transparent 70%)`,
              }}
            />

            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                                 linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }} />
            </div>

            <div className="absolute inset-0 p-4 md:p-6 overflow-hidden">
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 font-mono">
                      codexware-masterpiece.tsx
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <FiCpu className="w-3 h-3" />
                      <span className="hidden md:inline">TypeScript 5.0</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <FiCode className="w-3 h-3" />
                      <span className="hidden md:inline">React 18</span>
                    </div>
                    <div className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">
                      CODEXWARE
                    </div>
                  </div>
                </div>

                <div className="relative flex-1 overflow-hidden">
                  <div 
                    ref={codeContainerRef}
                    className="h-full overflow-y-auto pr-2 no-scrollbar"
                    style={{ 
                      touchAction: 'none',
                      WebkitOverflowScrolling: 'auto',
                      overscrollBehavior: 'none',
                      pointerEvents: 'auto'
                    }}
                  >
                    <div className="font-mono text-xs md:text-sm leading-relaxed">
                      {codeLines.slice(currentViewportStart, currentViewportStart + 18).map((line, index) => {
                        const originalIndex = currentViewportStart + index;
                        return (
                          <motion.div
                            key={`${typingKey}-${originalIndex}`}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.02 }}
                            className={`flex items-start ${getCodeColor(line.type)} mb-0.5`}
                          >
                            <span className="w-8 text-right pr-2 text-gray-500 text-xs select-none">
                              {originalIndex + 1}
                            </span>
                            <span className="whitespace-pre flex-1">
                              {line.text || ' '}
                            </span>
                            {originalIndex === activeCodeLines.length - 1 && cursorBlink && (
                              <span className="ml-0.5 w-[6px] h-4 bg-primary/80 animate-pulse">
                                &nbsp;
                              </span>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {(isTypingComplete || showCompilationComplete) && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="mt-2 border-t border-gray-800 bg-black/60 backdrop-blur-sm rounded overflow-hidden"
                    >
                      <div className="px-3 py-1.5 bg-gray-900/50 border-b border-gray-800 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <FiTerminal className="w-3 h-3" />
                          <span className="font-mono">Terminal</span>
                        </div>
                        <button
                          onClick={restartAnimation}
                          className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                        >
                          <FiRefreshCw className="w-3 h-3" />
                          <span className="hidden md:inline">Restart</span>
                        </button>
                      </div>
                      
                      <div className="p-2 md:p-3">
                        <div className="flex items-center gap-1.5 text-xs text-green-400 mb-1.5">
                          <FiZap className="w-3 h-3" />
                          <span className="font-mono">$ codexware build --premium</span>
                        </div>
                        
                        <div className="space-y-1 text-xs">
                          <div className="text-gray-400 font-mono flex items-center gap-1.5">
                            <span className="text-green-500">✓</span>
                            <span>Initializing premium build...</span>
                          </div>
                          <div className="text-gray-400 font-mono flex items-center gap-1.5">
                            <span className="text-green-500">✓</span>
                            <span>Compiled {activeCodeLines.length} modules</span>
                          </div>
                          <div className="text-gray-400 font-mono flex items-center gap-1.5">
                            <span className="text-green-500">✓</span>
                            <span>Performance: 98/100</span>
                          </div>
                          <div className="text-gray-400 font-mono flex items-center gap-1.5">
                            <span className="text-green-500">✓</span>
                            <span>Deployed to global CDN</span>
                          </div>
                          
                          {showCompilationComplete && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="mt-1.5 pt-1.5 border-t border-gray-800"
                            >
                              <div className="text-primary font-mono flex items-center gap-1.5 text-xs mb-0.5">
                                <FiUser className="w-3 h-3" />
                                <span>✓ Masterpiece compiled by Kudash Twakkie</span>
                              </div>
                              <div className="text-gray-500 text-[10px] font-mono ml-5">
                                {/* Crafted with precision on CodeXware Pro Studio */}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none border border-gray-700/50 rounded-xl" />
          </div>

          <div className="w-[90%] max-w-[680px] h-1.5 bg-gradient-to-b from-gray-800 to-transparent mx-auto rounded-b-lg">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>Scroll to interact</span>
            </div>
            <div className="h-3 w-px bg-gray-700" />
            <div className="flex items-center gap-1.5">
              <FiMonitor className="w-3 h-3" />
              <span>Live Development</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
