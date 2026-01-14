"use client";

import Section from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { 
  FiFileText, 
  FiChevronLeft, 
  FiAlertCircle, 
  FiCheckCircle, 
  FiXCircle, 
  FiBriefcase,
  FiShield,
  FiGlobe,
  FiTrendingUp,
  FiLock,
  FiUsers,
  FiCode,
  FiDollarSign,
  FiClock,
  FiEdit,
  FiDownload,
  FiPrinter,
  FiSearch,
  FiChevronDown,
  FiChevronUp,
  FiMail,
  FiPhone,
  FiMapPin,
  FiExternalLink
} from "react-icons/fi";

const termsSections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: <FiAlertCircle className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    content: `By accessing and using CodeXware's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use immediately. This agreement constitutes a legally binding contract between you and CodeXware.`,
    highlights: ["Binding agreement", "Immediate effect", "User acknowledgment"]
  },
  {
    id: "license",
    title: "Use License & Intellectual Property",
    icon: <FiCheckCircle className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    content: `Permission is granted for temporary access to our website for personal, non-commercial viewing. All intellectual property rights remain with CodeXware unless otherwise transferred in writing. Clients own custom deliverables upon full payment.`,
    highlights: ["Non-transferable license", "IP protection", "Client ownership upon payment"]
  },
  {
    id: "services",
    title: "Services & Project Terms",
    icon: <FiBriefcase className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    content: `All services are governed by separate project agreements. We deliver enterprise-grade solutions with clear scope, timeline, and pricing. Regular communication and milestone reviews ensure project success.`,
    highlights: ["Project agreements", "Milestone payments", "Scope management"]
  },
  {
    id: "disclaimer",
    title: "Disclaimer & Limitations",
    icon: <FiXCircle className="w-6 h-6" />,
    color: "from-red-500 to-orange-500",
    content: `Services provided "as is" without warranties. Maximum liability limited to project fees. We're not liable for third-party services, data loss, or business interruption beyond our control.`,
    highlights: ["As-is basis", "Limited liability", "Third-party exclusion"]
  },
  {
    id: "payments",
    title: "Payment Terms",
    icon: <FiDollarSign className="w-6 h-6" />,
    color: "from-yellow-500 to-amber-500",
    content: `Standard payment terms: 50% deposit, 25% at milestone, 25% upon completion. Late payments incur 1.5% monthly interest. All fees exclude taxes unless specified.`,
    highlights: ["50% deposit", "Milestone payments", "Completion balance"]
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    icon: <FiLock className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    content: `Both parties agree to protect confidential information. We sign NDAs as needed. Project details remain confidential, though we may use anonymized work in portfolios.`,
    highlights: ["Mutual NDA", "Data protection", "Portfolio rights"]
  },
  {
    id: "termination",
    title: "Termination & Suspension",
    icon: <FiClock className="w-6 h-6" />,
    color: "from-gray-500 to-slate-500",
    content: `Either party may terminate with 30 days written notice. We may suspend services for unpaid invoices. Upon termination, clients receive all completed work.`,
    highlights: ["30-day notice", "Unpaid suspension", "Work delivery"]
  },
  {
    id: "governance",
    title: "Governing Law",
    icon: <FiGlobe className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500",
    content: `Governed by the laws of our operating jurisdiction. Disputes resolved through arbitration. International clients subject to jurisdiction of our headquarters.`,
    highlights: ["Jurisdiction", "Arbitration", "International compliance"]
  }
];

export default function Terms() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showQuickSummary, setShowQuickSummary] = useState(true);

  const filteredSections = termsSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const downloadTerms = () => {
    const element = document.createElement("a");
    const text = termsSections.map(s => `${s.title}\n${s.content}\n\n`).join("");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "codexware-terms-of-service.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
        
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              width: 200 + Math.random() * 400,
              height: 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "linear-gradient(90deg, transparent, white, transparent)",
            }}
            animate={{
              x: [0, 100, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
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
                  onClick={downloadTerms}
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
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl opacity-20"
              />
              <div className="relative inline-flex p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg">
                <FiFileText className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Terms of <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">Service</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 mb-6 max-w-3xl mx-auto">
              Legal framework for our partnership and collaboration
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm text-white/80">
                Effective: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search terms (e.g., payment, liability, intellectual property)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-white/30 transition-all"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <button
              onClick={() => setShowQuickSummary(!showQuickSummary)}
              className="flex items-center justify-between w-full p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <FiTrendingUp className="w-5 h-5 text-purple-500" />
                <h2 className="text-xl font-bold text-white">Quick Summary</h2>
              </div>
              {showQuickSummary ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            
            <AnimatePresence>
              {showQuickSummary && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { icon: <FiCheckCircle />, text: "Clear scope definitions", color: "from-green-500 to-emerald-500" },
                        { icon: <FiShield />, text: "IP protection guaranteed", color: "from-blue-500 to-cyan-500" },
                        { icon: <FiUsers />, text: "Client-focused agreements", color: "from-purple-500 to-pink-500" },
                        { icon: <FiCode />, text: "Quality deliverables", color: "from-yellow-500 to-amber-500" },
                        { icon: <FiLock />, text: "Confidentiality assured", color: "from-indigo-500 to-purple-500" },
                        { icon: <FiGlobe />, text: "Global compliance", color: "from-cyan-500 to-blue-500" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color}/20`}>
                            <div className="text-white">{item.icon}</div>
                          </div>
                          <span className="text-white/80 text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
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
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{section.title}</h3>
                          <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10">
                            Section {index + 1}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {section.highlights.map((highlight, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs rounded bg-white/5 text-white/60">
                              {highlight}
                            </span>
                          ))}
                        </div>
                        
                        <AnimatePresence>
                          {expandedSection === section.id && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-white/70 leading-relaxed mt-3"
                            >
                              {section.content}
                            </motion.p>
                          )}
                        </AnimatePresence>
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
                
                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 border-t border-white/10 bg-gradient-to-b from-white/5 to-white/0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Key Points</h4>
                            <ul className="space-y-3">
                              {section.highlights.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-white/70">
                                  <div className={`w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-r ${section.color}`} />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Related Sections</h4>
                            <div className="space-y-2">
                              {termsSections
                                .filter(s => s.id !== section.id)
                                .slice(0, 3)
                                .map(related => (
                                  <button
                                    key={related.id}
                                    onClick={() => setExpandedSection(related.id)}
                                    className="block w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors"
                                  >
                                    <div className="flex items-center gap-2 text-white/60 hover:text-white/80">
                                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${related.color}`} />
                                      <span className="text-sm">{related.title}</span>
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Compliance & Standards
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "GDPR Compliant", icon: "🇪🇺", color: "from-blue-500 to-cyan-500" },
                { name: "CCPA Ready", icon: "🇺🇸", color: "from-red-500 to-orange-500" },
                { name: "ISO 27001", icon: "🛡️", color: "from-green-500 to-emerald-500" },
                { name: "SOC 2 Type II", icon: "📊", color: "from-purple-500 to-pink-500" }
              ].map((badge, index) => (
                <div key={index} className={`p-6 rounded-2xl bg-gradient-to-br ${badge.color}/10 backdrop-blur-sm border border-white/10 text-center`}>
                  <div className="text-2xl mb-2">{badge.icon}</div>
                  <div className="text-sm font-medium text-white">{badge.name}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need Legal Clarification?
                </h2>
                <p className="text-white/70 mb-6">
                  Our legal team is available to answer questions about these terms. 
                  Contact us for contract review or customized agreements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      <FiMail className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Email</div>
                      <a href="mailto:legal@codexware.com" className="text-white hover:text-blue-400 transition-colors">
                        legal@codexware.com
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
                      <FiEdit className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Response Time</div>
                      <div className="text-white">24-48 hours</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 mb-6">
                  <FiShield className="w-12 h-12 text-white/60" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Enterprise Agreements
                </h3>
                <p className="text-white/60 mb-6">
                  Custom terms available for enterprise clients, government contracts, 
                  and high-compliance industries.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Request Custom Terms
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <details className="group">
              <summary className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <FiClock className="w-5 h-5 text-white/60" />
                  <h3 className="text-lg font-bold text-white">Version History</h3>
                </div>
                <FiChevronDown className="w-5 h-5 text-white/60 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10">
                <div className="space-y-4">
                  {[
                    { date: "January 15, 2024", changes: "Updated payment terms and liability clauses" },
                    { date: "October 30, 2023", changes: "Added GDPR compliance language" },
                    { date: "July 12, 2023", changes: "Revised intellectual property transfer terms" },
                    { date: "March 1, 2023", changes: "Initial terms published" }
                  ].map((version, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10">
                        <span className="text-sm text-white/80">{version.date}</span>
                      </div>
                      <div className="text-white/70">{version.changes}</div>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}