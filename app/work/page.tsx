"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    title: "Enterprise Platform Transformation",
    problem:
      "A growing enterprise needed to modernize their legacy systems while maintaining business continuity and supporting rapid expansion.",
    thinking:
      "We approached this as a strategic transformation, not just a technical upgrade. We mapped their entire business process, identified critical dependencies, and designed a phased migration that minimized risk while maximizing future flexibility.",
    outcome:
      "A scalable, modern platform that reduced operational costs by 40% and enabled the business to enter new markets without technical constraints. The solution supports 3x growth without requiring infrastructure changes.",
    category: "Technology Consulting • Web Development",
  },
  {
    title: "Mobile-First Business Application",
    problem:
      "A service-based business needed to digitize their operations and provide their field teams with tools that worked seamlessly across devices.",
    thinking:
      "We focused on understanding how their teams actually work—not how we assumed they should work. We built a mobile-first solution that integrated with their existing workflows, reducing training time and adoption friction.",
    outcome:
      "A custom mobile application that increased field team productivity by 60% and reduced administrative overhead. Client satisfaction scores improved significantly as response times decreased.",
    category: "Mobile Applications • UI/UX Design",
  },
  {
    title: "Digital Brand Transformation",
    problem:
      "An established company needed to reposition their brand for a new generation of customers while maintaining trust with their existing base.",
    thinking:
      "We didn't just redesign their website—we reimagined their entire digital presence. We conducted extensive research to understand both audiences, then created a cohesive experience that spoke to both without alienating either.",
    outcome:
      "A complete digital transformation that increased online engagement by 200% and attracted a younger demographic while maintaining 95% retention of existing customers. The new brand identity became a competitive advantage.",
    category: "Web Design & Development • Digital Marketing",
  },
];

function CaseStudyCard({
  caseStudy,
  index,
}: {
  caseStudy: (typeof caseStudies)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="border border-black/10 bg-white hover:border-black/20 transition-colors"
      >
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-8 md:p-12 text-left"
        >
          <div className="flex items-start justify-between gap-6 mb-6">
            <div className="flex-1">
              <div className="text-sm md:text-base text-red-600 font-medium mb-3 uppercase tracking-wider">
                {caseStudy.category}
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                {caseStudy.title}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 md:w-12 md:h-12 border-2 border-black rounded-full flex items-center justify-center flex-shrink-0"
            >
              <span className="text-2xl md:text-3xl font-light">+</span>
            </motion.div>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="pt-6 space-y-8 border-t border-black/10">
              <div>
                <h4 className="text-sm md:text-base font-semibold uppercase tracking-wider mb-3 text-gray-500">
                  Problem
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 font-light">
                  {caseStudy.problem}
                </p>
              </div>
              <div>
                <h4 className="text-sm md:text-base font-semibold uppercase tracking-wider mb-3 text-gray-500">
                  Thinking
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 font-light">
                  {caseStudy.thinking}
                </p>
              </div>
              <div>
                <h4 className="text-sm md:text-base font-semibold uppercase tracking-wider mb-3 text-gray-500">
                  Outcome
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 font-light">
                  {caseStudy.outcome}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.button>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Work() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Opening section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20 md:pt-0">
        <div className="max-w-6xl mx-auto w-full">
          <ScrollReveal>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-black mb-8"
            >
              Work & Impact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-600 font-light max-w-3xl"
            >
              Every project starts with understanding the problem. Then we think
              deeply about the solution. The outcome speaks for itself.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-12 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} index={index} />
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
              className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light mb-8"
            >
              Every project is different.
              <br />
              <span className="text-red-600">Every outcome is intentional.</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-white/60 font-light"
            >
              Let&apos;s discuss your project.
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
