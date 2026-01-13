"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`bg-white/60 backdrop-blur-sm border border-text/10 rounded-xl p-6 hover:border-primary/30 hover:shadow-soft-lg transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
