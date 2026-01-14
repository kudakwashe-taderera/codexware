"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiGithub, 
  FiInstagram,
  FiMessageSquare,
  FiArrowUpRight,
  FiCode,
  FiGlobe,
  FiHeart
} from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import Button from "@/components/Button";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const currentYear = new Date().getFullYear();

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "E-commerce",
    "API Development",
    "Performance Optimization"
  ];

  const technologies = [
    "React & Next.js",
    "TypeScript",
    "Python & Django",
    "Node.js",
    "PostgreSQL",
    "AWS & Docker"
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61586527260424", label: "Facebook" },
    { icon: FiInstagram, href: "https://www.instagram.com/codexware_technologies/", label: "Instagram" },
    { icon: FiGithub, href: "#", label: "GitHub" },
    { icon: FiMessageSquare, href: "#", label: "Discord" },
  ];

  return (
    <motion.footer
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="absolute -top-32 left-1/4 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 right-1/4 w-64 h-64 bg-secondary/10 blur-3xl rounded-full" />
      </div>

      <motion.div 
        style={{ opacity, y }}
        className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24"
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex flex-col gap-3">
              <Link href="/" className="relative h-12 w-auto flex items-center">
                <Image
                  src="/logo.PNG"
                  alt="CodeXware"
                  width={200}
                  height={48}
                  className="h-12 w-auto object-contain brightness-110 contrast-110"
                  priority
                  unoptimized
                />
              </Link>
              <p className="text-sm text-white/60">Premium Development Studio</p>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed">
              We transform complex challenges into elegant digital solutions that drive business growth and deliver exceptional user experiences.
            </p>
            
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <FiGlobe className="w-5 h-5 text-primary" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link 
                    href="/services" 
                    className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                    {service}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <FiCode className="w-5 h-5 text-primary" />
              Technologies
            </h4>
            <ul className="space-y-3">
              {technologies.map((tech, index) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                    {tech}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FiMail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <a 
                    href="mailto:hello@codexware.com" 
                    className="text-white hover:text-primary transition-colors"
                  >
                    hello@codexware.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <FiPhone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <a 
                    href="tel:+14479025849" 
                    className="text-white hover:text-secondary transition-colors"
                  >
                    +1 447 902 5849
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <FiMapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Location</p>
                  <p className="text-white">Remote • Worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              <p>
                &copy; {currentYear} CodeXware. All rights reserved.
              </p>
              <p className="mt-1 text-xs">
                Transforming ideas into exceptional digital experiences.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <FiHeart className="w-4 h-4 text-red-400" />
              <span>Made with passion by</span>
              <a 
                href="https://kudakwashetaderera.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-primary transition-colors"
              >
                Kudash Twakkie
              </a>
            </div>
          </div>
          
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg flex items-center justify-center text-white z-50"
            aria-label="Back to top"
          >
            <FiArrowUpRight className="w-6 h-6 -rotate-45" />
          </motion.button>
        </motion.div>
      </motion.div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-[1px] bg-primary/30 rounded-full"
          animate={{
            y: [0, -100],
            x: [0, Math.sin(i) * 20],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.3,
            repeat: Infinity,
          }}
          style={{
            left: `${10 + i * 10}%`,
            top: '10%',
          }}
        />
      ))}
    </motion.footer>
  );
}