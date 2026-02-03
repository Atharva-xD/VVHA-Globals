"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PhilosophyHeadline } from "./HeadlineSystems";

const navigationLinks = [
  { name: "Perspective", path: "/perspective" },
  { name: "Capabilities", path: "/capabilities" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Conditions", path: "/terms" },
];

const rotatingWords = ["Build", "Scale", "Transform"];

function RotatingWord() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3500); // Slow, confident rhythm: 3.5 seconds per word

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block align-baseline leading-none">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block text-red-600 leading-none"
        >
          {rotatingWords[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white">
      {/* Primary Closing Message */}
      <section className="py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-12 md:mb-16 text-center"
          >
            <PhilosophyHeadline size="large" className="text-black leading-tight mb-4 md:mb-6">
              We&apos;re here when
              <br />
              <span className="text-red-600">
                you&apos;re ready to{" "}
                <br className="md:hidden" />
                <RotatingWord />
              </span>
            </PhilosophyHeadline>
            
            {/* Micro-Proof Line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base md:text-lg text-gray-500 font-light tracking-wide mt-4 md:mt-6"
            >
              Trusted by businesses across industries
            </motion.p>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-14 lg:gap-16">
            {/* Brand & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-6 w-full md:text-left text-center md:w-auto md:flex-shrink-0"
            >
              {/* Brand Name */}
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-4"
                >
                  VVHA Global
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base md:text-lg leading-relaxed text-gray-600 font-light max-w-md mx-auto md:mx-0"
                >
                  A technology-driven digital solutions provider helping businesses establish, scale, and optimize their digital presence.
                </motion.p>
              </div>

              {/* Contact Signal */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-2"
              >
                <a
                  href="mailto:info@vvhaglobal.com"
                  className="group inline-flex items-center gap-3 text-lg md:text-xl font-light text-gray-700 hover:text-black transition-colors duration-300"
                >
                  <span>info@vvhaglobal.com</span>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -4 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 2L13 9M13 9H9M13 9V5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>

            {/* Minimal Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full text-center md:text-left md:w-auto md:flex-shrink-0"
            >
              <nav className="flex flex-col gap-4 md:gap-5 items-center md:items-start">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Link href={link.path}>
                      <motion.span
                        className="text-xl md:text-2xl font-light text-gray-700 hover:text-black transition-colors duration-300 inline-block"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-px bg-black/5 origin-left"
          />
        </div>
      </div>

      {/* Legal & Meta */}
      <section className="py-8 md:py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-6"
          >
            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
              {legalLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <Link href={link.path}>
                    <motion.span
                      className="text-xs text-gray-400 hover:text-gray-600 font-light transition-colors duration-300"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xs text-gray-400 font-light"
            >
              © {currentYear} VVHA Global. All rights reserved.
            </motion.div>
          </motion.div>
        </div>
      </section>
    </footer>
  );
}
