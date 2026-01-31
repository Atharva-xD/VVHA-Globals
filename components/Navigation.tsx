"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Perspective", path: "/perspective" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "How We Build", path: "/how-we-build" },
    { name: "Work & Impact", path: "/work" },
    { name: "Start a Conversation", path: "/contact" },
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
            />
          </motion.div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.slice(1, -1).map((item) => (
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
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-sm font-medium cursor-pointer transition-colors ${
                pathname === "/contact"
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Contact
            </motion.div>
          </Link>
        </div>
        <div className="md:hidden">
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium cursor-pointer"
            >
              Contact
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
