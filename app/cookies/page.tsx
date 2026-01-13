"use client";

import Section from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FiChevronLeft, 
  FiSettings, 
  FiInfo, 
  FiShield, 
  FiPackage, 
  FiDatabase,
  FiUsers,
  FiTarget,
  FiCheck,
  FiX,
  FiEdit,
  FiRefreshCw,
  FiLock,
  FiGlobe,
  FiBell,
  FiActivity,
  FiUserCheck,
  FiTrendingUp,
  FiEye,
  FiEyeOff
} from "react-icons/fi";

interface CookieType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  essential: boolean;
  enabled: boolean;
  duration: string;
  purpose: string;
}

export default function Cookies() {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Always enabled
    analytics: false,
    functional: false,
    marketing: false,
    personalization: false
  });

  const [showConsentManager, setShowConsentManager] = useState(false);
  const [showDetails, setShowDetails] = useState<Record<string, boolean>>({});

  const cookieTypes: CookieType[] = [
    {
      id: "essential",
      name: "Essential Cookies",
      description: "Required for website functionality. Cannot be disabled.",
      icon: <FiShield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      essential: true,
      enabled: true,
      duration: "Session to 1 year",
      purpose: "Security, authentication, load balancing"
    },
    {
      id: "analytics",
      name: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website.",
      icon: <FiActivity className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      essential: false,
      enabled: cookieSettings.analytics,
      duration: "Up to 2 years",
      purpose: "Performance measurement, user behavior analysis"
    },
    {
      id: "functional",
      name: "Functional Cookies",
      description: "Remember your preferences for enhanced experience.",
      icon: <FiSettings className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      essential: false,
      enabled: cookieSettings.functional,
      duration: "Up to 1 year",
      purpose: "Language, theme, and feature preferences"
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements.",
      icon: <FiTarget className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      essential: false,
      enabled: cookieSettings.marketing,
      duration: "Up to 1 year",
      purpose: "Advertising optimization, campaign tracking"
    },
    {
      id: "personalization",
      name: "Personalization Cookies",
      description: "Customize content based on your interests.",
      icon: <FiUsers className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-500",
      essential: false,
      enabled: cookieSettings.personalization,
      duration: "Up to 1 year",
      purpose: "Content recommendations, user experience optimization"
    }
  ];

  const toggleCookie = (id: string) => {
    if (id === "essential") return; // Can't toggle essential cookies
    
    setCookieSettings(prev => ({
      ...prev,
      [id]: !prev[id as keyof typeof prev]
    }));
  };

  const acceptAll = () => {
    setCookieSettings({
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
      personalization: true
    });
  };

  const rejectAll = () => {
    setCookieSettings({
      essential: true, // Always enabled
      analytics: false,
      functional: false,
      marketing: false,
      personalization: false
    });
  };

  const savePreferences = () => {
    // In a real implementation, this would save to localStorage/backend
    console.log("Cookie preferences saved:", cookieSettings);
    setShowConsentManager(false);
  };

  const toggleDetails = (id: string) => {
    setShowDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    // Load saved preferences on mount
    const saved = localStorage.getItem("cookiePreferences");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCookieSettings(parsed);
      } catch (e) {
        console.error("Error loading cookie preferences:", e);
      }
    }
  }, []);

  useEffect(() => {
    // Save preferences when they change
    localStorage.setItem("cookiePreferences", JSON.stringify(cookieSettings));
  }, [cookieSettings]);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
        
        {/* Animated cookie particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: 40 + Math.random() * 80,
              height: 40 + Math.random() * 80,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(251,191,36,0.3), transparent)`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Tech grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 2px, transparent 2px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <Section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
              >
                <FiChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowConsentManager(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all"
                >
                  <FiSettings className="w-4 h-4" />
                  Cookie Settings
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800/10 to-gray-900/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all"
                >
                  Print Policy
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-16"
          >
            <div className="relative inline-block mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20"
              />
              <div className="relative inline-flex p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg">
                <FiDatabase className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Cookie <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Transparency</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 mb-6 max-w-3xl mx-auto">
              Our commitment to data privacy and user control
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-white/80">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {[
              { label: "Cookie Types", value: "5", icon: <FiPackage /> },
              { label: "GDPR Compliant", value: "Yes", icon: <FiGlobe /> },
              { label: "Auto-Expiry", value: "Enabled", icon: <FiRefreshCw /> },
              { label: "User Control", value: "Full", icon: <FiUserCheck /> }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Interactive Cookie Manager */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
              <div className="p-8 border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">
                    Cookie Management Dashboard
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <FiTrendingUp className="w-4 h-4" />
                    <span>Real-time Control</span>
                  </div>
                </div>
                <p className="text-white/60 mb-6">
                  Take control of your data. Customize your cookie preferences below.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={acceptAll}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium"
                  >
                    Accept All
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={rejectAll}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium"
                  >
                    Reject Non-Essential
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowConsentManager(true)}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 text-white/80 hover:text-white transition-colors"
                  >
                    Customize Settings
                  </motion.button>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  {cookieTypes.map((cookie) => (
                    <motion.div
                      key={cookie.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${cookie.color}/20`}>
                            {cookie.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-white">{cookie.name}</h3>
                              {cookie.essential && (
                                <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400">
                                  Required
                                </span>
                              )}
                            </div>
                            <p className="text-white/60 text-sm mb-2">{cookie.description}</p>
                            
                            <AnimatePresence>
                              {showDetails[cookie.id] && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-3 p-3 rounded-lg bg-white/5">
                                    <p className="text-white/80 text-sm mb-2">
                                      <strong>Purpose:</strong> {cookie.purpose}
                                    </p>
                                    <p className="text-white/80 text-sm">
                                      <strong>Duration:</strong> {cookie.duration}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => toggleDetails(cookie.id)}
                            className="text-white/40 hover:text-white/60 transition-colors"
                          >
                            {showDetails[cookie.id] ? <FiEyeOff /> : <FiEye />}
                          </button>
                          
                          {!cookie.essential && (
                            <div className="relative">
                              <input
                                type="checkbox"
                                id={`cookie-${cookie.id}`}
                                checked={cookie.enabled}
                                onChange={() => toggleCookie(cookie.id)}
                                className="sr-only"
                              />
                              <label
                                htmlFor={`cookie-${cookie.id}`}
                                className={`block w-12 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                                  cookie.enabled 
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                                    : 'bg-gray-700'
                                }`}
                              >
                                <span
                                  className={`block w-5 h-5 bg-white rounded-full transform transition-transform duration-300 ${
                                    cookie.enabled ? 'translate-x-7' : 'translate-x-1'
                                  }`}
                                />
                              </label>
                            </div>
                          )}
                          
                          {cookie.essential && (
                            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-white/10">
                              <span className="text-xs text-white/60">Always On</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Content Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {[
              {
                icon: <FiInfo className="w-8 h-8" />,
                title: "Understanding Cookies",
                content: "Cookies are small text files that websites place on your device to enhance functionality, analyze usage, and personalize content. They are essential tools for modern web experiences, balancing convenience with privacy.",
                color: "from-blue-500 to-cyan-500",
                features: [
                  "Text-based data storage",
                  "Browser-specific implementation",
                  "Session vs. persistent types",
                  "First-party vs. third-party"
                ]
              },
              {
                icon: <FiLock className="w-8 h-8" />,
                title: "Security & Privacy",
                content: "We implement enterprise-grade security measures to protect cookie data. All non-essential cookies are encrypted, and we follow strict data minimization principles to collect only what's necessary.",
                color: "from-green-500 to-emerald-500",
                features: [
                  "HTTPS encryption for all cookies",
                  "Regular security audits",
                  "Data retention policies",
                  "GDPR/CCPA compliance"
                ]
              },
              {
                icon: <FiGlobe className="w-8 h-8" />,
                title: "Global Compliance",
                content: "Our cookie practices comply with international privacy regulations including GDPR, CCPA, LGPD, and more. We provide region-specific notices and ensure lawful data processing.",
                color: "from-purple-500 to-pink-500",
                features: [
                  "GDPR (European Union)",
                  "CCPA (California)",
                  "LGPD (Brazil)",
                  "PIPEDA (Canada)"
                ]
              },
              {
                icon: <FiBell className="w-8 h-8" />,
                title: "User Rights & Controls",
                content: "You have comprehensive rights regarding your data. Access, modify, or delete your information at any time through our privacy dashboard or by contacting our Data Protection Officer.",
                color: "from-orange-500 to-red-500",
                features: [
                  "Right to access personal data",
                  "Right to rectification",
                  "Right to erasure",
                  "Right to data portability"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${section.color}/10 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all`}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${section.color}/20`}>
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-6">{section.content}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/80">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${section.color}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Cookie Consent Manager Modal */}
      <AnimatePresence>
        {showConsentManager && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowConsentManager(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl bg-gradient-to-b from-gray-900 to-black rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Cookie Preferences</h3>
                  <button
                    onClick={() => setShowConsentManager(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <FiX className="w-5 h-5 text-white/60" />
                  </button>
                </div>
                <p className="text-white/60">
                  Manage your cookie settings. Essential cookies cannot be disabled as they are required for basic functionality.
                </p>
              </div>

              <div className="p-8 max-h-[60vh] overflow-y-auto">
                <div className="space-y-4">
                  {cookieTypes.map((cookie) => (
                    <div key={cookie.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${cookie.color}/20`}>
                            {cookie.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-white">{cookie.name}</h4>
                              {cookie.essential && (
                                <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400">
                                  Required
                                </span>
                              )}
                            </div>
                            <p className="text-white/60 text-sm">{cookie.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          {!cookie.essential ? (
                            <div className="relative">
                              <input
                                type="checkbox"
                                id={`modal-cookie-${cookie.id}`}
                                checked={cookie.enabled}
                                onChange={() => toggleCookie(cookie.id)}
                                className="sr-only"
                              />
                              <label
                                htmlFor={`modal-cookie-${cookie.id}`}
                                className={`block w-12 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                                  cookie.enabled 
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                                    : 'bg-gray-700'
                                }`}
                              >
                                <span
                                  className={`block w-5 h-5 bg-white rounded-full transform transition-transform duration-300 ${
                                    cookie.enabled ? 'translate-x-7' : 'translate-x-1'
                                  }`}
                                />
                              </label>
                            </div>
                          ) : (
                            <FiLock className="w-5 h-5 text-green-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="text-sm text-white/60">
                    <FiEdit className="w-4 h-4 inline mr-2" />
                    Your preferences are saved automatically
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={rejectAll}
                      className="px-6 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-colors"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Cookie Indicator */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <button
            onClick={() => setShowConsentManager(true)}
            className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-white/10 hover:border-white/30 transition-all"
          >
            <FiDatabase className="w-5 h-5 text-white group-hover:animate-pulse" />
            <span className="text-sm text-white/80 group-hover:text-white">
              Cookie Settings
            </span>
          </button>
          
          {/* Active cookie indicator */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 border-2 border-black"
          />
        </motion.div>
      </div>
    </div>
  );
}