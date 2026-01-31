"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import KineticText from "@/components/KineticText";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Mobile Applications",
    description:
      "Fast & User friendly applications with swift UI. We develop Customized mobile applications based on your requirements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Web Design & Development",
    description:
      "Responsive, Professional & Dynamic websites. Web-portals, Cloud-based POS, Inventory Systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8h10M7 12h10" />
      </svg>
    ),
  },
  {
    title: "UI / UX",
    description:
      "We design modern & interactive User-Interfaces for web & mobile products.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Technology Consulting",
    description:
      "Our Experts guide you on how to best use technology and software to benefit your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Our design services starts and ends with a best-in-class experience strategy that builds brands.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
  },
  {
    title: "Help & Support",
    description: "We provide round the clock support to all our clients.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M13 8a3 3 0 1 0 0 6" />
        <path d="M13 11h.01" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Split Screen Opening Section */}
      <section className="min-h-screen flex flex-col md:flex-row relative pt-20 md:pt-0">
        {/* Left Side - Large Typography */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-white border-r-0 md:border-r border-black/5">
          <ScrollReveal delay={0.2}>
            <div className="space-y-6 md:space-y-8 max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.02em] leading-[0.95] text-black"
              >
                We help you
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-red-600"
                >
                  to go online
                </motion.span>
                <br />
                and scale your
                <br />
                business.
              </motion.h1>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side - Descriptive Text */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-black text-white">
          <ScrollReveal delay={0.4} direction="left">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-lg"
            >
              At VVHA Global, we design and develop solutions that are
              best-in-class and tailor-made digital solutions.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Asymmetric Services Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* No obvious heading - just spatial design */}
          <div className="mb-20 md:mb-32">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {services.slice(0, 3).map((service, index) => (
                  <ServiceCard key={service.title} {...service} index={index} />
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Second row with offset */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:mt-24">
              {services.slice(3, 6).map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  index={index + 3}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Large Kinetic Text Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
        <div className="text-center w-full">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black/5 select-none mb-8"
          >
            INNOVATION
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-0.5 bg-red-600 mx-auto max-w-md"
          />
        </div>
      </section>

      {/* Progressive Reveal Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          <ScrollReveal>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Enterprise-grade solutions
              <br />
              <span className="text-red-600">without the corporate feel.</span>
            </motion.h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80 font-light"
            >
              We believe in the power of thoughtful design and strategic
              technology. Every project is an opportunity to push boundaries,
              challenge conventions, and deliver experiences that resonate.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
