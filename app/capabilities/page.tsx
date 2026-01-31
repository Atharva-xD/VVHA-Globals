"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import { AuthorityHeadline, PhilosophyHeadline } from "@/components/HeadlineSystems";

const capabilities = [
  {
    title: "Mobile Applications",
    tagline: "Native performance, cross-platform reach",
    description:
      "We build mobile applications that feel native because they are. Fast, intuitive, and designed for how people actually use their devices. From iOS to Android, we create experiences that users love and businesses rely on.",
    details: [
      "Custom iOS and Android development",
      "Cross-platform solutions with React Native",
      "Performance optimization and testing",
      "App store optimization and deployment",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Web Design & Development",
    tagline: "Responsive, dynamic, enterprise-grade",
    description:
      "Websites that work beautifully on every device and scale with your business. We build web portals, cloud-based systems, and dynamic platforms that handle complexity without feeling complex.",
    details: [
      "Responsive web design and development",
      "Web portals and cloud-based systems",
      "POS and inventory management systems",
      "E-commerce platforms",
    ],
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
    title: "UI / UX Design",
    tagline: "Modern interfaces that feel intuitive",
    description:
      "We design user interfaces that people understand immediately. Every interaction is intentional, every visual element serves a purpose. Modern, interactive, and built for both web and mobile products.",
    details: [
      "User interface design for web and mobile",
      "User experience research and strategy",
      "Interactive prototypes and testing",
      "Design systems and component libraries",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Technology Consulting",
    tagline: "Strategic guidance for digital transformation",
    description:
      "Our experts help you navigate technology decisions with clarity. We guide you on how to best use technology and software to benefit your business, avoiding costly mistakes and focusing on what matters.",
    details: [
      "Technology strategy and roadmap",
      "Architecture and system design",
      "Digital transformation planning",
      "Technology stack selection",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    tagline: "Experience strategy that builds brands",
    description:
      "Our marketing services start and end with a best-in-class experience strategy. We don't just promote your brand—we build it through thoughtful campaigns that resonate with your audience.",
    details: [
      "Brand strategy and positioning",
      "Digital campaign development",
      "Content strategy and creation",
      "Performance analytics and optimization",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
  },
  {
    title: "Help & Support",
    tagline: "Round-the-clock support for all clients",
    description:
      "We provide continuous support to ensure your digital solutions run smoothly. From technical troubleshooting to strategic guidance, we're here when you need us.",
    details: [
      "24/7 technical support",
      "Maintenance and updates",
      "Performance monitoring",
      "Strategic consultation",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M13 8a3 3 0 1 0 0 6" />
        <path d="M13 11h.01" />
      </svg>
    ),
  },
];

function CapabilityBlock({
  capability,
  index,
}: {
  capability: (typeof capabilities)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="border-b border-black/10 last:border-0"
      >
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ x: 10 }}
          className="w-full py-8 md:py-12 lg:py-16 flex flex-row items-center justify-between gap-4 md:gap-6 text-left group"
        >
          <div className="flex-1 w-full md:w-auto flex items-start gap-4 md:gap-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-red-600 w-10 h-10 md:w-16 md:h-16 flex-shrink-0 mt-1"
            >
              {capability.icon}
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2 tracking-tight leading-tight">
                {capability.title}
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 font-light leading-relaxed">
                {capability.tagline}
              </p>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                }}
                className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 font-light mt-3 md:mt-4 overflow-hidden"
              >
                {capability.description}
              </motion.p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 md:w-12 md:h-12 border-2 border-black rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors"
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-light">+</span>
          </motion.div>
        </motion.button>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="pb-8 md:pb-12 lg:pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pl-[56px] md:pl-24">
              {capability.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    x: isExpanded ? 0 : -20,
                  }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-2 md:gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                    {detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Capabilities() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Opening section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20 md:pt-0">
        <div className="max-w-6xl mx-auto w-full">
          <ScrollReveal>
            <AuthorityHeadline className="mb-8">
              Capabilities
            </AuthorityHeadline>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-600 font-light max-w-3xl"
            >
              Six disciplines. One approach: understanding your business deeply,
              then building exactly what you need.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities list */}
      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <CapabilityBlock
              key={capability.title}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Closing section */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light"
            >
              These aren&apos;t services we offer.
              <br />
              <span className="text-red-600">They&apos;re disciplines we master.</span>
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
