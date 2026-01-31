"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="VVHA Global"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-600"
          >
            © {new Date().getFullYear()} VVHA Global. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
