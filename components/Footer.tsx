"use client";

import { motion } from "framer-motion";
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50">
      {/* Primary Closing Message */}
      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16 md:mb-20 text-center"
          >
            <PhilosophyHeadline size="large" className="text-black leading-tight">
              Building digital solutions
              <br />
              <span className="text-red-600">with intention.</span>
            </PhilosophyHeadline>
          </motion.div>

          {/* Content Grid */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16 lg:gap-20">
            {/* Brand & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 w-full md:text-left text-center md:w-auto px-4 md:px-6"
            >
              {/* Brand Name */}
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-6"
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
                className="pt-4"
              >
                <a
                  href="mailto:info@vvhaglobal.com"
                  className="group inline-flex items-center gap-3 text-lg md:text-xl font-light text-gray-700 hover:text-black transition-colors"
                >
                  <span>info@vvhaglobal.com</span>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -4 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.2 }}
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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full text-center md:w-auto px-4 md:px-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <span className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-[0.15em] letter-spacing-wider text-center">
                  Navigation
                </span>
              </motion.div>
              <nav className="flex flex-col gap-4 md:gap-5 items-center">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Link href={link.path}>
                      <motion.span
                        className="text-xl md:text-2xl lg:text-2xl font-light text-gray-700 hover:text-black transition-colors inline-block"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
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
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-px bg-black/10 origin-left"
          />
        </div>
      </div>

      {/* Legal & Meta */}
      <section className="py-8 md:py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-center gap-6 md:gap-8"
          >
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              {legalLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <Link href={link.path}>
                    <motion.span
                      className="text-xs md:text-sm text-gray-500 hover:text-gray-700 font-light transition-colors"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
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
              className="text-xs md:text-sm text-gray-400 font-light"
            >
              © {currentYear} VVHA Global. All rights reserved.
            </motion.div>
          </motion.div>
        </div>
      </section>
    </footer>
  );
}
