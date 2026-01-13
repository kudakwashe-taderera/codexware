"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ children, href, onClick, variant = "primary", className = "", type }: ButtonProps) {
  const baseClasses = "px-8 py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden";
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-soft hover:shadow-glow",
    secondary: "bg-transparent text-white border-2 border-white/30 hover:border-white/50 hover:bg-white/10 shadow-soft backdrop-blur-sm",
  };

  const buttonContent = (
    <>
      <motion.span
        className="relative z-10"
        whileHover={{ x: 2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${baseClasses} ${variantClasses[variant]} ${className} inline-block`}
        >
          {buttonContent}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      type={type || (onClick ? "button" : "submit")}
    >
      {buttonContent}
    </motion.button>
  );
}
