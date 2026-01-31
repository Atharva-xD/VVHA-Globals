"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

export default function Perspective() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Full-screen opening statement */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20 md:pt-0">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-black mb-12 md:mb-16"
            >
              We exist because
              <br />
              <span className="text-red-600">digital transformation</span>
              <br />
              shouldn&apos;t feel
              <br />
              like a compromise.
            </motion.h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Split perspective */}
      <section className="min-h-screen flex flex-col md:flex-row">
        <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-black text-white">
          <ScrollReveal delay={0.2} direction="right">
            <div className="max-w-lg">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight"
              >
                Enterprise mindset.
                <br />
                Creative execution.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl leading-relaxed text-white/80 font-light"
              >
                Most agencies choose one: either they&apos;re strategic but boring, or
                creative but unreliable. We refuse that choice.
              </motion.p>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-white">
          <ScrollReveal delay={0.4} direction="left">
            <div className="max-w-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-lg md:text-xl leading-relaxed text-gray-700 font-light mb-8"
              >
                We think differently about how businesses go online. Not as a
                checklist of features, but as a fundamental shift in how you
                connect with your market.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl leading-relaxed text-gray-700 font-light"
              >
                Every solution we build is tailor-made because every business
                operates differently. We don&apos;t believe in templates. We believe
                in understanding your context, your constraints, and your
                ambitions.
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Large typographic statement */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-12"
            >
              Clarity. Confidence.
              <br />
              <span className="text-red-600">Creativity.</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-0.5 bg-red-600 mx-auto max-w-md"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy blocks */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Long-term thinking
                </h3>
                <p className="text-lg leading-relaxed text-white/70 font-light">
                  We build for scale, not for launch. Every decision we make
                  considers where you&apos;ll be in three years, not just where you
                  are today.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Strategic creativity
                </h3>
                <p className="text-lg leading-relaxed text-white/70 font-light">
                  Beautiful design means nothing if it doesn&apos;t serve your
                  business goals. We merge aesthetic excellence with strategic
                  rigor.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Partnership, not projects
                </h3>
                <p className="text-lg leading-relaxed text-white/70 font-light">
                  We&apos;re not here to deliver and disappear. We&apos;re here to
                  understand your business deeply and grow with you.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Technology as enabler
                </h3>
                <p className="text-lg leading-relaxed text-white/70 font-light">
                  We choose technology based on what solves your problem best,
                  not what&apos;s trending. Pragmatic innovation over shiny objects.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light text-gray-800"
            >
              This is how we think. This is why we exist.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
