"use client";

import Section from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { 
  FiShield, 
  FiChevronLeft, 
  FiLock, 
  FiEye, 
  FiDatabase, 
  FiUserCheck,
  FiGlobe,
  FiDownload,
  FiPrinter,
  FiSearch,
  FiChevronDown,
  FiChevronUp,
  FiMail,
  FiPhone,
  FiEdit,
  FiRefreshCw,
  FiBarChart,
  FiUsers,
  FiSettings,
  FiAlertCircle,
  FiCheck,
  FiX,
  FiExternalLink,
  FiHash,
  FiClock,
  FiKey,
  FiBell
} from "react-icons/fi";

const privacySections = [
  {
    id: "introduction",
    title: "Introduction & Scope",
    icon: <FiShield className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    summary: "CodeXware is committed to enterprise-grade privacy protection. This policy explains our data practices across all services and platforms.",
    details: `CodeXware ("we," "our," or "us") maintains the highest standards of data privacy and security. This comprehensive Privacy Policy governs our collection, use, disclosure, and protection of information across all our services, websites, and client engagements. By engaging with our services, you consent to these practices.`,
    keyPoints: ["Enterprise privacy standards", "Global compliance", "Transparent practices"]
  },
  {
    id: "collection",
    title: "Data Collection Practices",
    icon: <FiDatabase className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    summary: "We collect only essential data, clearly categorized as personal, technical, and usage information.",
    details: `We collect data through multiple channels: direct input, automated systems, and third-party integrations. Personal data includes contact information, project requirements, and communication history. Technical data covers device information, IP addresses, and system specifications. Usage data encompasses website interactions, feature utilization, and performance metrics.`,
    keyPoints: ["Minimal data collection", "Multi-channel sources", "Categorized data types"]
  },
  {
    id: "usage",
    title: "Data Usage & Processing",
    icon: <FiEye className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    summary: "Data is processed for service delivery, security, and continuous improvement.",
    details: `We process data under multiple legal bases: contract performance, legitimate business interests, and user consent. Primary purposes include service delivery, security monitoring, performance optimization, and regulatory compliance. We implement data minimization and purpose limitation principles throughout our operations.`,
    keyPoints: ["Legal basis processing", "Purpose limitation", "Data minimization"]
  },
  {
    id: "sharing",
    title: "Data Sharing & Third Parties",
    icon: <FiUsers className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    summary: "Strict controls govern third-party data sharing with comprehensive agreements.",
    details: `We share data only with vetted third parties under strict contractual obligations. Categories include cloud service providers, payment processors, analytics platforms, and development tools. All third parties undergo security assessments and sign comprehensive data processing agreements. We never sell personal data.`,
    keyPoints: ["Vetted third parties", "DPA requirements", "No data selling"]
  },
  {
    id: "security",
    title: "Security Measures",
    icon: <FiLock className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    summary: "Enterprise-grade security with encryption, access controls, and regular audits.",
    details: `We implement multi-layered security: AES-256 encryption at rest and in transit, strict access controls with role-based permissions, regular penetration testing, and continuous monitoring. Our security program includes incident response plans, employee training, and third-party security assessments.`,
    keyPoints: ["AES-256 encryption", "RBAC implementation", "Regular audits"]
  },
  {
    id: "rights",
    title: "Your Privacy Rights",
    icon: <FiUserCheck className="w-6 h-6" />,
    color: "from-yellow-500 to-amber-500",
    summary: "Comprehensive rights including access, correction, deletion, and portability.",
    details: `You have extensive rights under global privacy laws: access your data, correct inaccuracies, request deletion, object to processing, data portability, and restrict processing. We respond to all requests within 30 days and provide multiple channels for exercise. No fee is charged for standard requests.`,
    keyPoints: ["30-day response", "Multiple channels", "No request fees"]
  },
  {
    id: "retention",
    title: "Data Retention",
    icon: <FiClock className="w-6 h-6" />,
    color: "from-gray-500 to-slate-500",
    summary: "Clear retention periods with automated deletion schedules.",
    details: `We retain data only as long as necessary for its purpose. Standard retention periods: project data (7 years), client communications (5 years), website analytics (2 years), marketing data (3 years with consent). Automated deletion processes ensure compliance with retention schedules.`,
    keyPoints: ["Purpose-based retention", "Automated deletion", "7-year maximum"]
  },
  {
    id: "compliance",
    title: "Global Compliance",
    icon: <FiGlobe className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500",
    summary: "Comprehensive compliance with GDPR, CCPA, LGPD, and other regulations.",
    details: `Our privacy program complies with major global regulations: GDPR (EU), CCPA/CPRA (California), LGPD (Brazil), PIPEDA (Canada), and POPIA (South Africa). We maintain data processing records, conduct impact assessments, and appoint regional representatives as required.`,
    keyPoints: ["Multi-regulation compliance", "Impact assessments", "Regional representatives"]
  }
];

export default function Privacy() {
  const [expandedSection, setExpandedSection] = useState<string | null>("introduction");
  const [searchQuery, setSearchQuery] = useState("");
  const [privacySettings, setPrivacySettings] = useState({
    analytics: true,
    marketing: false,
    personalization: false,
    cookies: false
  });
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestType, setRequestType] = useState("access");

  const filteredSections = privacySections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.details.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const downloadPolicy = () => {
    const element = document.createElement("a");
    const text = privacySections.map(s => `${s.title}\n${s.details}\n\n`).join("");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "codexware-privacy-policy.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handlePrivacySetting = (setting: keyof typeof privacySettings) => {
    setPrivacySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const privacyRights = [
    { id: "access", label: "Data Access", icon: <FiEye />, description: "Receive a copy of your data" },
    { id: "correction", label: "Correction", icon: <FiEdit />, description: "Correct inaccurate data" },
    { id: "deletion", label: "Deletion", icon: <FiX />, description: "Request data deletion" },
    { id: "portability", label: "Portability", icon: <FiDownload />, description: "Transfer your data" },
    { id: "objection", label: "Objection", icon: <FiAlertCircle />, description: "Object to processing" },
    { id: "restriction", label: "Restriction", icon: <FiLock />, description: "Restrict processing" }
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
        
        {/* Animated security patterns */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: 300,
              height: 300,
              left: `${(i * 25) % 100}%`,
              top: `${(i * 15) % 100}%`,
              background: `radial-gradient(circle, rgba(59,130,246,0.05), transparent)`,
              filter: 'blur(40px)',
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Security grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
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
                  onClick={downloadPolicy}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all"
                >
                  <FiDownload className="w-4 h-4" />
                  Download PDF
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800/10 to-gray-900/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all"
                >
                  <FiPrinter className="w-4 h-4" />
                  Print
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
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-xl opacity-20"
              />
              <div className="relative inline-flex p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg">
                <FiShield className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Privacy <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 mb-6 max-w-3xl mx-auto">
              Enterprise-grade data protection with complete transparency
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-white/80">
                Effective: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </motion.div>

          {/* Quick Privacy Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Quick Privacy Settings</h2>
                <FiSettings className="w-5 h-5 text-white/60" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(privacySettings).map(([key, value]) => (
                  <div key={key} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-white/80 capitalize">{key}</div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          id={key}
                          checked={value}
                          onChange={() => handlePrivacySetting(key as keyof typeof privacySettings)}
                          className="sr-only"
                        />
                        <label
                          htmlFor={key}
                          className={`block w-10 h-5 rounded-full cursor-pointer transition-all duration-300 ${
                            value 
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                              : 'bg-gray-700'
                          }`}
                        >
                          <span
                            className={`block w-3 h-3 bg-white rounded-full transform transition-transform duration-300 ${
                              value ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="text-xs text-white/40">
                      {key === 'analytics' ? 'Website analytics' :
                       key === 'marketing' ? 'Marketing emails' :
                       key === 'personalization' ? 'Content personalization' :
                       'Non-essential cookies'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search privacy policy (e.g., GDPR, data retention, rights)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-white/30 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>

          {/* Privacy Rights Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Your Privacy Rights</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowRequestForm(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
              >
                <FiEdit className="w-4 h-4" />
                Exercise Rights
              </motion.button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {privacyRights.map((right, index) => (
                <motion.button
                  key={right.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setRequestType(right.id);
                    setShowRequestForm(true);
                  }}
                  className="p-4 rounded-xl bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all text-left"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-3 inline-block">
                    {right.icon}
                  </div>
                  <div className="text-sm font-medium text-white mb-1">{right.label}</div>
                  <div className="text-xs text-white/60">{right.description}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Main Policy Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6 mb-16"
          >
            {filteredSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`rounded-2xl overflow-hidden border ${expandedSection === section.id ? 'border-white/30' : 'border-white/10'} transition-all duration-300`}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-8 text-left bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm hover:from-white/10 transition-all"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${section.color}/20`}>
                        {section.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{section.title}</h3>
                          <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10">
                            Section {index + 1}
                          </span>
                        </div>
                        
                        <p className="text-white/60 text-sm mb-3">{section.summary}</p>
                        
                        <AnimatePresence>
                          {expandedSection === section.id && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-white/70 leading-relaxed mt-3"
                            >
                              {section.details}
                            </motion.p>
                          )}
                        </AnimatePresence>
                        
                        {/* Key Points */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {section.keyPoints.map((point, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs rounded bg-white/5 text-white/60">
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      {expandedSection === section.id ? (
                        <FiChevronUp className="w-6 h-6 text-white/60" />
                      ) : (
                        <FiChevronDown className="w-6 h-6 text-white/60" />
                      )}
                    </div>
                  </div>
                </button>
                
                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 border-t border-white/10 bg-gradient-to-b from-white/5 to-white/0">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Key Principles</h4>
                            <ul className="space-y-3">
                              {section.keyPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-white/70">
                                  <div className={`w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-r ${section.color}`} />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Implementation</h4>
                            <div className="space-y-3 text-white/70 text-sm">
                              <p>Automated compliance monitoring</p>
                              <p>Regular policy reviews</p>
                              <p>Employee training programs</p>
                              <p>Third-party assessments</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Related Rights</h4>
                            <div className="space-y-2">
                              {privacyRights.slice(0, 3).map(right => (
                                <button
                                  key={right.id}
                                  onClick={() => {
                                    setRequestType(right.id);
                                    setShowRequestForm(true);
                                  }}
                                  className="block w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors"
                                >
                                  <div className="flex items-center gap-2 text-white/60 hover:text-white/80">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                                    <span className="text-sm">{right.label}</span>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Compliance Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Global Compliance Standards
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  name: "GDPR", 
                  region: "European Union", 
                  icon: "🇪🇺",
                  status: "Fully Compliant",
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  name: "CCPA/CPRA", 
                  region: "California", 
                  icon: "🇺🇸",
                  status: "Fully Compliant",
                  color: "from-red-500 to-orange-500"
                },
                { 
                  name: "LGPD", 
                  region: "Brazil", 
                  icon: "🇧🇷",
                  status: "Fully Compliant", 
                  color: "from-green-500 to-emerald-500"
                },
                { 
                  name: "PIPEDA", 
                  region: "Canada", 
                  icon: "🇨🇦",
                  status: "Fully Compliant",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((regulation, index) => (
                <div key={index} className={`p-6 rounded-2xl bg-gradient-to-br ${regulation.color}/10 backdrop-blur-sm border border-white/10`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl">{regulation.icon}</div>
                    <div className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400">
                      {regulation.status}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{regulation.name}</h3>
                  <div className="text-sm text-white/60 mb-3">{regulation.region}</div>
                  <div className="text-xs text-white/40">Data protection regulation</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact & DPO Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Data Protection Officer
                </h2>
                <p className="text-white/70 mb-6">
                  Our Data Protection Officer ensures compliance with global privacy regulations and serves as your point of contact for all privacy matters.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      <FiMail className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">DPO Email</div>
                      <a href="mailto:dpo@codexware.com" className="text-white hover:text-blue-400 transition-colors">
                        dpo@codexware.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      <FiPhone className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Phone</div>
                      <a href="tel:+14479025849" className="text-white hover:text-purple-400 transition-colors">
                        +1 (447) 902-5849
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                      <FiClock className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Response Time</div>
                      <div className="text-white">24 hours for urgent matters</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 mb-6">
                  <div className="text-center">
                    <FiKey className="w-12 h-12 text-white/60 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2">
                      Security Incident Reporting
                    </h3>
                    <p className="text-white/60 text-sm mb-4">
                      Report security incidents or data breaches immediately
                    </p>
                    <a
                      href="mailto:security@codexware.com"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-lg hover:shadow-red-500/25 transition-all text-sm"
                    >
                      <FiAlertCircle className="w-4 h-4" />
                      Report Incident
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>24/7 Security Monitoring</span>
                  <FiBell className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Privacy Request Form Modal */}
      <AnimatePresence>
        {showRequestForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowRequestForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-md bg-gradient-to-b from-gray-900 to-black rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Privacy Rights Request</h3>
                  <button
                    onClick={() => setShowRequestForm(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <FiX className="w-5 h-5 text-white/60" />
                  </button>
                </div>
                <p className="text-white/60 text-sm">
                  Submit your privacy rights request. We&apos;ll respond within 30 days.
                </p>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm text-white/80 mb-2">Request Type</label>
                    <select
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-white"
                    >
                      {privacyRights.map(right => (
                        <option key={right.id} value={right.id} className="bg-gray-900">
                          {right.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-white/80 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-white/30"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-white/80 mb-2">Additional Details</label>
                    <textarea
                      rows={3}
                      placeholder="Provide any additional context or details..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-white/30 resize-none"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowRequestForm(false)}
                    className="flex-1 px-6 py-3 rounded-lg border border-white/20 bg-white/5 text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // Handle submission
                      setShowRequestForm(false);
                    }}
                    className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}