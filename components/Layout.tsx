"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Add JSON-LD structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "CodeXware",
      "description": "Premium software development, web development, and mobile app development services in Harare, Zimbabwe",
      "url": typeof window !== 'undefined' ? window.location.origin : "",
      "telephone": "+1-447-902-5849",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Harare",
        "addressCountry": "ZW"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-17.8292",
        "longitude": "31.0522"
      },
      "areaServed": {
        "@type": "City",
        "name": "Harare"
      },
      "serviceType": [
        "Software Development",
        "Web Development",
        "Web Design",
        "Mobile App Development",
        "Full Stack Development"
      ],
      "priceRange": "$$"
    };

    // Remove existing script if present
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add structured data script
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
