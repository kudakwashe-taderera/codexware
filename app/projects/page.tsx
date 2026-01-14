"use client";

import Section from "@/components/Section";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import { FiShoppingCart, FiBookOpen, FiBriefcase, FiHome, FiUsers, FiLayers, FiGlobe, FiMonitor, FiPackage, FiTruck, FiWifi, FiCode, FiDatabase, FiShield, FiCloud, FiSmartphone, FiBarChart, FiVideo, FiMusic } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const mainProducts = [
  {
    title: "Kart - Zimbabwean Super Marketplace",
    description: "A comprehensive marketplace offering everything for Zimbabweans. From products (clothes, electronics, groceries, vegetables) to services (electricians, plumbers, mechanics, builders, painters) and housing rentals. Sellers list products, buyers shop seamlessly, and delivery drivers manage logistics in real-time.",
    longDescription: "Kart is Zimbabwe's most comprehensive digital marketplace revolutionizing commerce. Our platform integrates sellers, buyers, and delivery drivers into one seamless ecosystem. Features include: AI-powered product recommendations, secure payment processing, real-time order tracking, seller analytics dashboard, delivery route optimization, housing rental system with virtual tours, service booking with ratings and reviews, and multi-vendor support.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Socket.io"],
    icon: <FiShoppingCart className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    category: "Marketplace Platform",
    preview: "/kart.png",
    features: [
      "Multi-vendor e-commerce system",
      "Service booking & scheduling",
      "Housing rental marketplace",
      "Real-time delivery tracking",
      "Secure payment integration",
      "Rating & review system",
      "AI-powered recommendations",
      "Mobile-responsive design"
    ],
    sectors: ["Retail", "Services", "Real Estate", "Logistics"]
  },
  {
    title: "NeXTStep - Education & Career Platform",
    description: "A revolutionary portal combining Canvas LMS, Career Guidance, and Indeed-like job platforms to transform Africa's education system. Full-featured learning management with integrated career pathways and job opportunities.",
    longDescription: "NeXTStep is our ambitious project to reshape education and career development in Africa. It combines three powerful platforms: 1) A comprehensive Learning Management System (Canvas-like features), 2) Intelligent Career Guidance with AI-powered recommendations, and 3) An integrated Job Marketplace. Students can learn, discover career paths, and find employment all in one ecosystem.",
    tech: ["React", "Python Django", "PostgreSQL", "Redis", "Docker", "GraphQL", "Machine Learning"],
    icon: <FiBookOpen className="w-8 h-8" />,
    color: "from-blue-500 to-purple-500",
    category: "Education Technology",
    preview: "/nextstep.png",
    features: [
      "Canvas-like LMS features",
      "AI Career Path Recommendations",
      "Job & Internship Marketplace",
      "Progress Tracking & Analytics",
      "Virtual Classrooms",
      "Assignment & Exam Systems",
      "Certificate Generation",
      "Employer Dashboard"
    ],
    sectors: ["Education", "Career Development", "Employment"]
  }
];

const clientProjects = [
  {
    title: "Gamue Wenyu - Artist Platform",
    description: "Professional portfolio and fan engagement platform for Zimbabwean actress and artist Gamue Wenyu.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    icon: <FiMusic className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    category: "Portfolio Website",
    url: "https://gamuewenyu.com",
    year: "2026"
  },
  {
    title: "Zitheka - Law Firm Platform",
    description: "Legal services platform for US-based Malawian law firm offering international legal expertise.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: <FiBriefcase className="w-6 h-6" />,
    color: "from-red-500 to-orange-500",
    category: "Professional Services",
    url: "https://zitheka.com",
    year: "2025"
  },
  {
    title: "Shomang Zenda Projects",
    description: "Website for one of South Africa's largest construction companies showcasing mega-projects and services.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    icon: <FiHome className="w-6 h-6" />,
    color: "from-yellow-500 to-amber-500",
    category: "Construction",
    url: "https://shomang-zendaprojects.vercel.app",
    year: "2024"
  },
  {
    title: "Party Fantasy ZW",
    description: "E-commerce platform for Zimbabwe's premier party supplies and decorations retailer.",
    tech: ["Shopify", "React", "Stripe"],
    icon: <FiPackage className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    category: "E-commerce",
    url: "https://partyfantasyzw.com",
    year: "2025"
  },
  {
    title: "Career Guidance System",
    description: "AI-powered career assessment and recommendation system for high school students.",
    tech: ["Python", "React", "PostgreSQL"],
    icon: <FiUsers className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500",
    category: "Education",
    year: "2023"
  },
  {
    title: "Hospital Management System",
    description: "Comprehensive hospital management solution with patient records and appointment scheduling.",
    tech: ["React", "Node.js", "MySQL"],
    icon: <FiMonitor className="w-6 h-6" />,
    color: "from-green-500 to-teal-500",
    category: "Healthcare",
    year: "2023"
  },
  {
    title: "Real Estate CRM",
    description: "Customer relationship management system for real estate agencies with property tracking.",
    tech: ["Vue.js", "Laravel", "PostgreSQL"],
    icon: <FiHome className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    category: "Real Estate",
    year: "2023"
  },
  {
    title: "Delivery Logistics Platform",
    description: "Real-time delivery tracking and management system for logistics companies.",
    tech: ["React Native", "Node.js", "MongoDB"],
    icon: <FiTruck className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    category: "Logistics",
    year: "2024"
  },
  {
    title: "Video Streaming Service",
    description: "Custom video streaming platform with content management and user subscriptions.",
    tech: ["React", "Node.js", "AWS S3"],
    icon: <FiVideo className="w-6 h-6" />,
    color: "from-red-500 to-pink-500",
    category: "Entertainment",
    year: "2023"
  },
  {
    title: "Financial Analytics Dashboard",
    description: "Real-time financial data visualization and predictive analytics platform.",
    tech: ["React", "Python", "D3.js"],
    icon: <FiBarChart className="w-6 h-6" />,
    color: "from-emerald-500 to-green-500",
    category: "Finance",
    year: "2024"
  },
  {
    title: "Smart Home IoT Platform",
    description: "Internet of Things platform for smart home device management and automation.",
    tech: ["React Native", "Python", "MQTT"],
    icon: <FiWifi className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    category: "IoT",
    year: "2023"
  },
  {
    title: "Inventory Management System",
    description: "Enterprise-grade inventory tracking and supply chain management solution.",
    tech: ["Angular", "Java", "Oracle"],
    icon: <FiDatabase className="w-6 h-6" />,
    color: "from-amber-500 to-yellow-500",
    category: "Enterprise",
    year: "2024"
  },
  {
    title: "Cybersecurity Monitoring",
    description: "Real-time threat detection and security monitoring system for enterprises.",
    tech: ["React", "Python", "Elasticsearch"],
    icon: <FiShield className="w-6 h-6" />,
    color: "from-gray-500 to-slate-500",
    category: "Security",
    year: "2024"
  },
  {
    title: "Cloud Migration Platform",
    description: "Automated cloud migration and infrastructure management solution.",
    tech: ["Vue.js", "Go", "AWS"],
    icon: <FiCloud className="w-6 h-6" />,
    color: "from-sky-500 to-blue-500",
    category: "Cloud",
    year: "2023"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    icon: <FiSmartphone className="w-6 h-6" />,
    color: "from-green-600 to-emerald-600",
    category: "Fintech",
    year: "2023"
  }
];

const companies = {
  zimbabwe: [
    { name: "Econet", industry: "Telecommunications", logo: "/econet.png" },
    { name: "Nashua", industry: "Business Solutions", logo: "/nashua.webp" },
    { name: "Paragon", industry: "Technology Services", logo: "/paragon.png" },
    { name: "ZimworX", industry: "Software Development", logo: "/Zimworx.webp" }
  ],
  southAfrica: [
    { name: "MultiChoice", industry: "Media & Entertainment", logo: "/MultiChoice.svg" },
    { name: "Standard Bank", industry: "Banking", logo: "/standardbank.png" },
    { name: "Sasol", industry: "Energy & Chemicals", logo: "/sasol.png" },
    { name: "MTN Group", industry: "Telecommunications", logo: null }
  ],
  australia: [
    { name: "Telstra", industry: "Telecommunications", logo: null },
    { name: "Commonwealth Bank", industry: "Banking", logo: null }
  ],
  usa: [
    { name: "Carle Health", industry: "Healthcare", logo: "/carle-health.webp" },
    { name: "LRS", industry: "Technology Services", logo: "/lrs logo.webp" }
  ]
};

export default function Projects() {
  return (
    <div className="min-h-screen pt-20">
      <Section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Flagship Products</span>
            </h2>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              Revolutionary platforms born from our vision to transform industries
            </p>
          </motion.div>

          {mainProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`mb-20 ${index === mainProducts.length - 1 ? 'mb-0' : ''}`}
            >
              <div className={`rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm`}>
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="lg:w-2/5">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.color}/20 mb-6`}>
                        {product.icon}
                      </div>
                      <h3 className="text-2xl md:text-4xl font-bold text-text mb-4">
                        {product.title}
                      </h3>
                      <div className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mb-6">
                        <span className="text-sm font-medium text-text/80">{product.category}</span>
                      </div>
                      <p className="text-text/80 leading-relaxed mb-6">
                        {product.longDescription}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-text mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-text/70">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`} />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-text mb-3">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.tech.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-white/10 text-text/80">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-text mb-3">Sectors Impacted</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.sectors.map((sector, idx) => (
                            <span key={idx} className="px-3 py-1 text-sm bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-white/10 text-text/80">
                              {sector}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-3/5">
                      <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-white/10">
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-800 to-black overflow-hidden relative group">
                          {product.preview ? (
                            <>
                              <div className="absolute inset-0">
                                <Image
                                  src={product.preview}
                                  alt={product.title}
                                  fill
                                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                  unoptimized
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${product.color}/5 via-transparent to-black/20`} />
                                <div className={`absolute inset-0 rounded-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]`} />
                              </div>
                              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm p-3 z-10">
                                <div className="flex justify-between items-center">
                                  <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60 shadow-lg shadow-red-500/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 shadow-lg shadow-yellow-500/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60 shadow-lg shadow-green-500/20" />
                                  </div>
                                  <div className="text-xs text-white/40 font-mono">demo.codexware.com</div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                  <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${product.color}/20 mb-4`}>
                                    {product.icon}
                                  </div>
                                  <h4 className="text-xl font-bold text-text mb-2">{product.title}</h4>
                                  <p className="text-text/60">Platform Preview</p>
                                </div>
                              </div>
                              <div className="absolute top-4 left-4 right-4 flex justify-between">
                                <div className="flex gap-2">
                                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                                <div className="text-xs text-text/40">demo.codexware.com</div>
                              </div>
                            </>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 rounded-xl">
                            <div className="text-lg font-bold text-text mb-1">Scalable</div>
                            <div className="text-sm text-text/60">Enterprise Architecture</div>
                          </div>
                          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-4 rounded-xl">
                            <div className="text-lg font-bold text-text mb-1">Secure</div>
                            <div className="text-sm text-text/60">Bank-level Security</div>
                          </div>
                          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-4 rounded-xl">
                            <div className="text-lg font-bold text-text mb-1">Innovative</div>
                            <div className="text-sm text-text/60">Cutting-edge Tech</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="py-20 px-6 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text">
              Client <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              Transformative solutions delivered for businesses across industries and continents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {clientProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm group-hover:border-white/30 transition-all duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color}/20`}>
                      {project.icon}
                    </div>
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FiGlobe className="w-5 h-5 text-text/60 hover:text-text/80 transition-colors" />
                      </Link>
                    )}
                  </div>
                  
                  <div className="mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${project.color}/10 border border-white/10`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500">
                    {project.title}
                  </h3>
                  
                  <p className="text-text/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="pt-4 border-t border-text/10">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10 text-text/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.year && (
                      <div className="mt-3 text-xs text-text/40">
                        Completed {project.year}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
              <FiShield className="w-16 h-16 text-text/40 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-text mb-4">
                Confidential Projects
              </h3>
              <p className="text-xl text-text/70 max-w-2xl mx-auto mb-6">
                We&apos;ve delivered numerous enterprise solutions under strict NDAs for global corporations, 
                government agencies, and innovative startups. While we can&apos;t showcase these publicly, 
                they represent our deepest expertise in secure, scalable, and transformative technology.
              </p>
              <div className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
                <span className="text-sm font-medium text-text/80">Protected by Non-Disclosure Agreements</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text">
              Trusted by <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Global Leaders</span>
            </h2>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              We&apos;ve partnered with industry leaders across multiple continents
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-text flex items-center gap-2">
                <span className="text-3xl leading-none md:hidden" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>🇿🇼</span>
                Zimbabwe
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {companies.zimbabwe.map((company, index) => (
                  <div key={index} className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
                    <div className="h-16 mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center p-3">
                      {company.logo ? (
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={120}
                          height={48}
                          className="h-full w-auto object-contain"
                          unoptimized
                        />
                      ) : (
                        <div className="text-lg font-bold text-text">{company.name}</div>
                      )}
                    </div>
                    <div className="text-sm text-text/60 text-center">{company.industry}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-text flex items-center gap-2">
                <span className="text-3xl leading-none md:hidden" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>🇿🇦</span>
                South Africa
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {companies.southAfrica.map((company, index) => (
                  <div key={index} className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
                    <div className="h-16 mb-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg flex items-center justify-center p-3">
                      {company.logo ? (
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={120}
                          height={48}
                          className="h-full w-auto object-contain"
                          unoptimized
                        />
                      ) : (
                        <div className="text-lg font-bold text-text">{company.name}</div>
                      )}
                    </div>
                    <div className="text-sm text-text/60 text-center">{company.industry}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-text flex items-center gap-2">
                <span className="text-3xl leading-none md:hidden" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>🇦🇺</span>
                Australia
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {companies.australia.map((company, index) => (
                  <div key={index} className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
                    <div className="h-16 mb-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-lg flex items-center justify-center p-3">
                      {company.logo ? (
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={120}
                          height={48}
                          className="h-full w-auto object-contain"
                          unoptimized
                        />
                      ) : (
                        <div className="text-lg font-bold text-text">{company.name}</div>
                      )}
                    </div>
                    <div className="text-sm text-text/60 text-center">{company.industry}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-text flex items-center gap-2">
                <span className="text-3xl leading-none md:hidden" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>🇺🇸</span>
                United States
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {companies.usa.map((company, index) => (
                  <div key={index} className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
                    <div className="h-16 mb-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg flex items-center justify-center p-3">
                      {company.logo ? (
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={120}
                          height={48}
                          className="h-full w-auto object-contain"
                          unoptimized
                        />
                      ) : (
                        <div className="text-lg font-bold text-text">{company.name}</div>
                      )}
                    </div>
                    <div className="text-sm text-text/60 text-center">{company.industry}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10 border border-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h3 className="text-2xl md:text-4xl font-bold text-text mb-6">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl text-text/70 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your vision to life with our extensive experience and innovative approach.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Start Your Project
              <FiCode className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}