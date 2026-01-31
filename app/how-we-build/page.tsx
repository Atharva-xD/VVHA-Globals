"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import { PhilosophyHeadline } from "@/components/HeadlineSystems";

const principles = [
  {
    title: "Clarity",
    description:
      "We start by understanding your business, your goals, and your constraints. No assumptions. No templates. Just clear, honest conversation about what you need and why.",
    phase: "Discovery",
  },
  {
    title: "Collaboration",
    description:
      "You're not a client—you're a partner. We work alongside your team, sharing insights, making decisions together, and ensuring everyone understands the why behind every choice.",
    phase: "Strategy",
  },
  {
    title: "Scalability",
    description:
      "Every solution we build considers where you'll be in three years, not just where you are today. We architect for growth, not just for launch.",
    phase: "Architecture",
  },
  {
    title: "Long-term thinking",
    description:
      "We don't build features. We build foundations. Every decision is made with your future in mind, ensuring your digital infrastructure grows with your business.",
    phase: "Execution",
  },
];

const phases = [
  {
    name: "Understand",
    description: "Deep dive into your business, goals, and market context.",
    overlap: "→",
  },
  {
    name: "Strategize",
    description: "Define approach, architecture, and success metrics.",
    overlap: "→",
  },
  {
    name: "Design",
    description: "Create interfaces and experiences that serve your users.",
    overlap: "→",
  },
  {
    name: "Build",
    description: "Develop with quality, testing, and scalability in mind.",
    overlap: "→",
  },
  {
    name: "Launch & Iterate",
    description: "Deploy, monitor, learn, and evolve based on real usage.",
    overlap: "→",
  },
];

export default function HowWeBuild() {
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
              How We Build
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-600 font-light max-w-3xl"
            >
              Not a linear process. Not a rigid methodology. A set of principles
              that guide how we work, and phases that overlap because real work
              doesn&apos;t happen in silos.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <PhilosophyHeadline size="large" className="mb-16 md:mb-24">
              Principles
            </PhilosophyHeadline>
          </ScrollReveal>

          <div className="space-y-20 md:space-y-32">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.title} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start"
                >
                  <div className="md:col-span-4 lg:col-span-5">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      className="mb-3 md:mb-4"
                    >
                      <span className="text-xs md:text-sm font-semibold text-red-600 uppercase tracking-[0.15em] letter-spacing-wider">
                        {principle.phase}
                      </span>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-black"
                    >
                      {principle.title}
                    </motion.h3>
                  </div>
                  <div className="md:col-span-8 lg:col-span-7 flex items-start">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                      className="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-700 font-light max-w-2xl"
                    >
                      {principle.description}
                    </motion.p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Phases section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <PhilosophyHeadline size="large" className="mb-16 md:mb-24 text-white">
              Phases That Overlap
            </PhilosophyHeadline>
          </ScrollReveal>

          <div className="space-y-8 md:space-y-12">
            {phases.map((phase, index) => (
              <ScrollReveal key={phase.name} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-row items-center justify-between gap-6 md:gap-12"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
                      {phase.name}
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/70 font-light">
                      {phase.description}
                    </p>
                  </div>
                  {phase.overlap && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      className="text-3xl md:text-4xl lg:text-5xl text-red-600 font-light flex-shrink-0"
                    >
                      {phase.overlap}
                    </motion.div>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Motion storytelling section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-12"
              >
                This is how we work.
                <br />
                <span className="text-red-600">Not rigid. Not linear.</span>
                <br />
                Just thoughtful.
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="h-0.5 bg-red-600 mx-auto max-w-md"
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
