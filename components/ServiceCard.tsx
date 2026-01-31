"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative bg-white border border-black/5 rounded-none p-8 md:p-12 h-full flex flex-col transition-all duration-300 hover:border-black/20 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="mb-6 text-red-600 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
          {description}
        </p>
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 h-0.5 bg-black origin-left"
        />
      </motion.div>
    </motion.div>
  );
}
