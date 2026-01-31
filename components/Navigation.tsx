"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Perspective", path: "/perspective" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "How We Build", path: "/how-we-build" },
    { name: "Work & Impact", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer flex items-center"
          >
            <Image
              src="/images/logo.png"
              alt="VVHA Global"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
              fetchPriority="high"
            />
          </motion.div>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.slice(1).map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`text-sm font-medium cursor-pointer transition-colors ${
                  pathname === item.path
                    ? "text-black font-semibold"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                className="h-0.5 bg-black w-full origin-center"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className="h-0.5 bg-black w-full"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                className="h-0.5 bg-black w-full origin-center"
              />
            </div>
          </motion.button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 bg-white border-b border-black/5 shadow-lg"
              >
                <div className="px-6 py-4 space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        className={`text-base font-medium py-2 transition-colors ${
                          pathname === item.path
                            ? "text-black font-semibold"
                            : "text-gray-600"
                        }`}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
