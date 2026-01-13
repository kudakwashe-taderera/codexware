"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiArrowRight, FiCode, FiSmartphone, FiLayers, FiCloud, FiCpu, FiUsers, FiChevronRight, FiZap, FiMonitor, FiGlobe, FiArrowUpRight } from "react-icons/fi";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  accentColor: string;
  floatSpeed: number;
  floatDelay: number;
  position: { x: number; y: number };
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const laptopScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const laptopOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]);

  // Simplified services with floating bubble positions
  const services: Service[] = [
    {
      id: 1,
      title: "API Development",
      description: "Robust RESTful APIs with Node-based, well-documented solutions. Secure and scalable backend services.",
      icon: <FiCpu className="w-full h-full" />,
      color: "from-orange-500 to-red-500",
      accentColor: "orange-500",
      floatSpeed: 3,
      floatDelay: 0,
      position: { x: -18, y: -12 }
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user experience at the forefront. Prototypes to production-ready designs.",
      icon: <FiLayers className="w-full h-full" />,
      color: "from-purple-500 to-pink-500",
      accentColor: "purple-500",
      floatSpeed: 4,
      floatDelay: 0.5,
      position: { x: 22, y: -18 }
    },
    {
      id: 3,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS & Android. Built for performance and user satisfaction.",
      icon: <FiSmartphone className="w-full h-full" />,
      color: "from-green-500 to-emerald-500",
      accentColor: "green-500",
      floatSpeed: 3.5,
      floatDelay: 1,
      position: { x: -22, y: 18 }
    },
    {
      id: 4,
      title: "DevOps & Kubernetes",
      description: "Docker, Kubernetes serverless deployments. Scalable cloud infrastructure with minimal errors.",
      icon: <FiCloud className="w-full h-full" />,
      color: "from-blue-500 to-cyan-500",
      accentColor: "blue-500",
      floatSpeed: 4.5,
      floatDelay: 1.5,
      position: { x: 18, y: 12 }
    },
    {
      id: 5,
      title: "Consulting Services",
      description: "Expert guidance on technology decisions, architecture design, and best practices for project success.",
      icon: <FiUsers className="w-full h-full" />,
      color: "from-yellow-500 to-amber-500",
      accentColor: "yellow-500",
      floatSpeed: 3.8,
      floatDelay: 2,
      position: { x: 0, y: -25 }
    },
    {
      id: 6,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies. From landing pages to complex platforms.",
      icon: <FiGlobe className="w-full h-full" />,
      color: "from-cyan-500 to-blue-500",
      accentColor: "cyan-500",
      floatSpeed: 4.2,
      floatDelay: 2.5,
      position: { x: 0, y: 25 }
    },
  ];

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-16 relative overflow-x-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Dynamic grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section - Enhanced */}
      <section className="relative pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-lg border border-white/10 mb-6 shadow-lg"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Premium Development Services
              </span>
              <FiZap className="w-3 h-3 text-cyan-500 animate-pulse" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
            >
              Comprehensive solutions <span className="text-transparent bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text font-semibold">orbiting around your success</span>. Each service is crafted with precision and backed by cutting-edge technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Orbital Services Section - Enhanced */}
      <section className="relative py-12 pb-32 md:pb-40 min-h-[700px] md:min-h-[1000px] flex items-center justify-center overflow-visible">
        <div className="relative w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 md:gap-12">
            {/* Left side - Laptop Display */}
            <motion.div
              style={{ 
                scale: laptopScale,
                opacity: laptopOpacity
              }}
              className="lg:w-2/5 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Laptop with enhanced styling */}
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl rounded-3xl opacity-50" />
                  
                  {/* Laptop Screen */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
                    {/* Screen gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-500/10 rounded-2xl" />
                    
                    {/* Screen Content */}
                    <div className="relative p-6">
                      {/* Screen Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500" />
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                          </div>
                          <div className="text-xs text-gray-400 font-mono bg-gray-900/50 px-3 py-1 rounded-lg">
                            services.tsx
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-gray-600" />
                          <div className="w-1 h-1 rounded-full bg-gray-600" />
                          <div className="w-1 h-1 rounded-full bg-gray-600" />
                        </div>
                      </div>
                      
                      {/* Active Service Display */}
                      <div className="min-h-[280px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          {hoveredService ? (
                            <motion.div
                              key={`service-${hoveredService}`}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="text-center p-4"
                            >
                              <motion.div
                                initial={{ rotate: -10, scale: 0 }}
                                animate={{ rotate: 0, scale: 1 }}
                                className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 mb-6 backdrop-blur-sm"
                              >
                                {services.find(s => s.id === hoveredService)?.icon}
                              </motion.div>
                              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {services.find(s => s.id === hoveredService)?.title}
                              </h3>
                              <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-sm mx-auto">
                                {services.find(s => s.id === hoveredService)?.description}
                              </p>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="default"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="text-center p-6"
                            >
                              <div className="flex justify-center gap-4 mb-6">
                                <FiCode className="w-10 h-10 text-orange-500/50 animate-pulse" />
                                <FiLayers className="w-10 h-10 text-purple-500/50 animate-pulse delay-150" />
                                <FiCloud className="w-10 h-10 text-cyan-500/50 animate-pulse delay-300" />
                              </div>
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                Interactive Services Hub
                              </h3>
                              <p className="text-sm text-gray-400 max-w-xs mx-auto">
                                Hover over any orbiting service to explore details
                              </p>
                              <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="mt-4 inline-flex items-center gap-2 text-xs text-cyan-400"
                              >
                                <FiArrowUpRight className="w-3 h-3" />
                                <span>Try hovering a service card</span>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  
                  {/* Laptop Base */}
                  <div className="w-11/12 h-4 bg-gradient-to-b from-gray-900 to-black mx-auto -mt-1 rounded-b-xl border border-t-0 border-gray-800">
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 via-50% to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Floating Services (Desktop) / Grid (Mobile) */}
            {/* Mobile: Grid Layout */}
            <div className="lg:hidden w-full">
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="cursor-pointer"
                    onClick={() => setHoveredService(service.id)}
                  >
                    <div className={`relative p-4 rounded-xl backdrop-blur-xl border ${hoveredService === service.id ? 'border-white/30' : 'border-white/10'} shadow-xl transition-all duration-300 group`}>
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color}/5 opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className="relative">
                        <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${service.color}/20 backdrop-blur-sm mb-3`}>
                          <div className="w-6 h-6">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-xs text-gray-300 line-clamp-2 leading-tight">
                          {service.description.split('.')[0]}.
                        </p>
                      </div>
                      <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-${service.accentColor} blur-sm animate-pulse`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop: Floating Bubbles */}
            <motion.div
              className="hidden lg:block lg:w-3/5 relative h-[600px] w-full flex items-center justify-center mx-auto overflow-visible"
            >
              {services.map((service) => {
                const baseX = service.position.x;
                const baseY = service.position.y;
                
                return (
                  <motion.div
                    key={service.id}
                    className="absolute cursor-pointer w-64 z-10"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      x: [`${baseX}%`, `${baseX + 2}%`, `${baseX - 2}%`, `${baseX}%`],
                      y: [`${baseY}%`, `${baseY + 3}%`, `${baseY - 3}%`, `${baseY}%`],
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      x: {
                        duration: service.floatSpeed,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: service.floatDelay,
                      },
                      y: {
                        duration: service.floatSpeed * 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: service.floatDelay,
                      },
                      opacity: { duration: 0.6 },
                      scale: { duration: 0.6 },
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      zIndex: 20,
                      transition: { duration: 0.3 }
                    }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    style={{
                      left: `calc(50% + ${baseX}%)`,
                      top: `calc(50% + ${baseY}%)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Service Card with enhanced styling */}
                    <div className={`relative p-6 rounded-2xl backdrop-blur-xl border ${hoveredService === service.id ? 'border-white/30' : 'border-white/10'} shadow-2xl transition-all duration-500 group`}>
                      {/* Card background gradient */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color}/5 opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Card border gradient */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                      
                      {/* Card content */}
                      <div className="relative">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color}/20 backdrop-blur-sm`}>
                            <div className="w-8 h-8">
                              {service.icon}
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <FiArrowUpRight className="w-6 h-6 text-white/60" />
                          </motion.div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-300 line-clamp-2 mb-4">
                          {service.description.split('.')[0]}.
                        </p>
                        
                        {/* Progress indicator */}
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${service.color} rounded-full`}
                              initial={{ width: "0%" }}
                              animate={{ width: hoveredService === service.id ? "100%" : "60%" }}
                              transition={{ duration: 1 }}
                            />
                          </div>
                          <span>Interactive</span>
                        </div>
                      </div>
                      
                      {/* Glowing orb indicator */}
                      <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-${service.accentColor} blur-sm animate-pulse`} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid - Enhanced */}
      <section className="pt-40 pb-32 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20 relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              <span className="text-white/90">Comprehensive </span>
              <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                Service Details
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Each service is meticulously crafted to deliver exceptional results, combining cutting-edge technology with expert craftsmanship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card background effects */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color}/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm group-hover:border-white/30 transition-all duration-500 overflow-hidden">
                  {/* Corner accents */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${service.color}/20 rounded-tr-3xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${service.color}/20 rounded-bl-3xl rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color}/20 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/70 mb-8 text-base leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {getServiceFeatures(service.id).map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + idx * 0.05 }}
                          className="flex items-center gap-4 text-white/80 group-hover:text-white transition-colors"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="pt-6 border-t border-white/10 group-hover:border-white/30 transition-colors duration-500">
                      <button
                        onClick={() => setHoveredService(service.id)}
                        className="inline-flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group/button"
                      >
                        <span className="relative">
                          <span className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg blur opacity-0 group-hover/button:opacity-30 transition-opacity" />
                          View in orbit
                        </span>
                        <FiChevronRight className="w-4 h-4 group-hover/button:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center relative"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-cyan-500/10 rounded-4xl blur-3xl" />
          <div className="absolute inset-0 backdrop-blur-xl border border-white/10 rounded-4xl" />
          
          <div className="relative z-10 p-12 md:p-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can build the perfect digital solution tailored to your unique needs and goals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
                className="group relative px-10 py-4 text-lg rounded-full bg-gradient-to-r from-orange-500 to-purple-500 text-white font-semibold overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center justify-center gap-3">
                  Start Your Project
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/schedule'}
                className="px-10 py-4 text-lg rounded-full border-2 border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold transition-all duration-300 hover:border-white/40"
              >
                Schedule a Consultation
              </motion.button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-white/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse" />
                <span>24/7 Priority Support</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
                <span>Free Strategy Session</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
                <span>30-Day Implementation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Enhanced helper function for service features
function getServiceFeatures(serviceId: number): string[] {
  switch(serviceId) {
    case 1: // API Development
      return [
        "Node.js & Express Framework",
        "REST & GraphQL API Design",
        "Authentication & Security Systems",
        "Comprehensive API Documentation",
        "Performance & Scalability Optimization"
      ];
    case 2: // UI/UX Design
      return [
        "User Research & Usability Testing",
        "Wireframing & Interactive Prototyping",
        "Design Systems & Component Libraries",
        "Animation & Micro-interactions",
        "Accessibility & WCAG Compliance"
      ];
    case 3: // Mobile Apps
      return [
        "React Native & Flutter Development",
        "iOS & Android Native Applications",
        "App Store Deployment & Optimization",
        "Push Notifications & Analytics",
        "Offline Support & Data Sync"
      ];
    case 4: // DevOps & Kubernetes
      return [
        "Docker & Container Orchestration",
        "Kubernetes Cluster Management",
        "CI/CD Pipeline Automation",
        "Cloud Infrastructure as Code",
        "Monitoring, Logging & Alerting"
      ];
    case 5: // Consulting Services
      return [
        "Technical Architecture Design",
        "Code Reviews & Security Audits",
        "Performance Optimization Strategies",
        "Team Training & Mentoring",
        "Project Roadmap & Strategy"
      ];
    case 6: // Web Development
      return [
        "React, Next.js & TypeScript",
        "Modern Frontend Architecture",
        "Responsive & Adaptive Design",
        "SEO Optimization & Analytics",
        "Performance Tuning & Optimization"
      ];
    default:
      return [];
  }
}