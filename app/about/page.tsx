"use client";

import Section from "@/components/Section";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import { FiAward, FiGlobe, FiShield, FiCode, FiLinkedin, FiGithub, FiExternalLink, FiMapPin, FiCalendar, FiBriefcase } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Excellence",
    description: "We strive for perfection in every project, ensuring the highest standards of quality and performance.",
    icon: <FiAward className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Innovation",
    description: "We stay ahead of the curve, leveraging the latest technologies and best practices to deliver cutting-edge solutions.",
    icon: <FiGlobe className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Transparency",
    description: "Clear communication and honest feedback throughout the development process. You&apos;re always in the loop.",
    icon: <FiShield className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Partnership",
    description: "We&apos;re not just vendors, we&apos;re your technology partners, invested in your long-term success.",
    icon: <FiCode className="w-6 h-6" />,
    color: "from-orange-500 to-red-500"
  },
];

const stats = [
  { label: "Years Experience", value: "10+", suffix: "" },
  { label: "Projects Delivered", value: "150+", suffix: "" },
  { label: "Client Satisfaction", value: "98", suffix: "%" },
  { label: "Team Members", value: "25+", suffix: "" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
        <Section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 mb-6"
              >
                <FiCode className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-text/80">
                  Engineering Excellence Since 2014
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text">
                Building <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">First World</span> Software Systems
              </h1>
              <p className="text-xl md:text-2xl text-text/70 max-w-4xl mx-auto mb-8">
                A premier software development company founded on decades of expertise in Software Engineering and Cybersecurity.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center px-6 py-4"
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      {stat.value}<span className="text-text">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-text/60 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* Founder Section */}
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
              Meet Our Visionary Founder
            </h2>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              The mastermind behind CodeXware&apos;s commitment to excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Image Container */}
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10" />
                  <Image
                    src="/pic.jpeg"
                    alt="Kudakwashe Taderera - Founder & CEO"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl blur-xl opacity-30" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-text mb-2">
                    Kudakwashe Taderera
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    Founder & Chief Executive Officer
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-text/70">
                    <FiBriefcase className="w-5 h-5 text-blue-500" />
                    <span>10+ Years in Software Engineering & Cybersecurity</span>
                  </div>
                  <div className="flex items-center gap-3 text-text/70">
                    <FiMapPin className="w-5 h-5 text-purple-500" />
                    <span>Extensive experience from the United States tech industry</span>
                  </div>
                  <div className="flex items-center gap-3 text-text/70">
                    <FiAward className="w-5 h-5 text-green-500" />
                    <span>Creator of enterprise-grade software systems</span>
                  </div>
                </div>

                <p className="text-text/80 leading-relaxed">
                  Kudakwashe is the visionary behind CodeXware. With over a decade of hands-on experience 
                  in software engineering and cybersecurity gained from working in the United States, 
                  he founded CodeXware with a mission to bring <span className="font-semibold text-primary">First World software engineering standards </span> 
                  to businesses worldwide.
                </p>

                <p className="text-text/80 leading-relaxed">
                  His deep expertise spans across full-stack development, cloud architecture, and security 
                  infrastructure. Under his leadership, CodeXware has grown into a powerhouse of innovation, 
                  delivering robust, scalable, and secure solutions that drive digital transformation.
                </p>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-text/70 mb-4">
                    Connect with Kudakwashe:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="https://kudakwashetaderera.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all group"
                    >
                      <FiExternalLink className="w-4 h-4 text-blue-500" />
                      <span className="text-text/80 group-hover:text-text">Personal Website</span>
                    </Link>
                    <Link
                      href="https://linkedin.com/in/kudakwashe-taderera"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/10 to-blue-700/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all group"
                    >
                      <FiLinkedin className="w-4 h-4 text-blue-600" />
                      <span className="text-text/80 group-hover:text-text">LinkedIn</span>
                    </Link>
                    <Link
                      href="https://github.com/kudakwashe-taderera"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800/10 to-gray-900/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all group"
                    >
                      <FiGithub className="w-4 h-4 text-text/80" />
                      <span className="text-text/80 group-hover:text-text">GitHub</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Our Story & Approach */}
      <Section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Origin Story</span>
              </h2>
              <p className="text-text/70 leading-relaxed">
                CodeXware is the <span className="font-semibold text-primary">brainchild of Kudakwashe Taderera</span>, born from his 
                extensive experience in the United States software industry. After witnessing firsthand the power 
                of cutting-edge technology and robust engineering practices, he envisioned a platform that would 
                bring these same standards to businesses globally.
              </p>
              <p className="text-text/70 leading-relaxed">
                What started as a vision to bridge the gap between ambitious ideas and exceptional execution 
                has grown into a full-service software development powerhouse. We combine decades of expertise 
                with innovative thinking to create solutions that not only meet but exceed expectations.
              </p>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-text/80 italic">
                  &quot;We believe that great software isn&apos;t just about writing code, it&apos;s about understanding your 
                  business, your users, and building solutions that propel you forward.&quot;
                </p>
                <p className="text-text/60 mt-3">- Kudakwashe Taderera</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                The <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">CodeXware Edge</span>
              </h2>
              <p className="text-text/70 leading-relaxed">
                Leveraging <span className="font-semibold text-primary">10+ years of United States software engineering expertise</span>, 
                we&apos;ve developed a unique approach that combines technical excellence with business acumen. 
                Every project benefits from our founder&apos;s extensive experience in building scalable, secure, 
                and high-performance systems.
              </p>
              <p className="text-text/70 leading-relaxed">
                Our process emphasizes continuous feedback, rapid iteration, and transparent communication. 
                We don&apos;t just build software, we engineer solutions that drive growth, enhance efficiency, 
                and provide sustainable competitive advantages.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-4 rounded-xl">
                  <div className="text-lg font-bold text-text mb-1">Enterprise-Grade</div>
                  <div className="text-sm text-text/60">First World standards</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4 rounded-xl">
                  <div className="text-lg font-bold text-text mb-1">Security-First</div>
                  <div className="text-sm text-text/60">Cybersecurity expertise</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-4 rounded-xl">
                  <div className="text-lg font-bold text-text mb-1">Scalable</div>
                  <div className="text-sm text-text/60">Future-proof architecture</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-4 rounded-xl">
                  <div className="text-lg font-bold text-text mb-1">Innovative</div>
                  <div className="text-sm text-text/60">Cutting-edge technology</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-text">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm group-hover:border-white/30 transition-all duration-500">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color}/20 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500">
                      {value.title}
                    </h3>
                    <p className="text-text/70 group-hover:text-text/80 transition-colors duration-500">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 text-center"
          >
            <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm rounded-3xl p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-text mb-6">
                Our Mission
              </h3>
              <p className="text-xl text-text/70 max-w-4xl mx-auto leading-relaxed">
                To empower businesses worldwide with <span className="font-semibold text-primary">First World software engineering standards</span>, 
                delivering secure, scalable, and innovative solutions that drive growth and create lasting competitive advantages.
              </p>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 mt-8 text-primary"
              >
                <FiCode className="w-5 h-5" />
                <span className="font-medium">Engineering the Future, Today</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}