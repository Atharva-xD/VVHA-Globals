"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import { AuthorityHeadline, PhilosophyHeadline, InvitationHeadline } from "@/components/HeadlineSystems";
import Link from "next/link";

const values = [
  {
    name: "Innovation",
    description:
      "We don't follow trends—we set them. Every project is an opportunity to push boundaries and explore new possibilities.",
  },
  {
    name: "Integrity",
    description:
      "Transparent communication, honest timelines, and ethical practices. We build trust through consistent action.",
  },
  {
    name: "Quality",
    description:
      "We don't ship fast and break things. We build thoughtfully, test rigorously, and deliver excellence.",
  },
  {
    name: "Partnership",
    description:
      "Your success is our success. We're invested in your long-term growth, not just project completion.",
  },
];

export default function Perspective() {
  const [selectedValues, setSelectedValues] = useState<string[]>(["Innovation", "Integrity"]);

  const toggleValue = (valueName: string) => {
    setSelectedValues((prev) => {
      if (prev.includes(valueName)) {
        // If already selected and we have more than 2, remove it
        if (prev.length > 2) {
          return prev.filter((v) => v !== valueName);
        }
        // If only 2 selected, keep it (always show at least 2)
        return prev;
      } else {
        // If not selected, add it (max 2 at a time)
        if (prev.length >= 2) {
          return [prev[1], valueName];
        }
        return [...prev, valueName];
      }
    });
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Full-screen opening statement */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20 md:pt-0">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <AuthorityHeadline className="mb-12 md:mb-16">
              Who We Are
            </AuthorityHeadline>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-600 font-light max-w-4xl"
            >
              VVHA Global is a full-service web and mobile development company specializing in custom software solutions, UI/UX design, IT consulting, and digital marketing.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Split perspective */}
      <section className="min-h-screen flex flex-col md:flex-row">
        <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-black text-white">
          <ScrollReveal delay={0.2} direction="right">
            <div className="max-w-lg">
              <PhilosophyHeadline size="medium" className="mb-8 text-white">
                Mission
              </PhilosophyHeadline>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl leading-relaxed text-white/80 font-light"
              >
                Empower businesses with innovative digital solutions that drive growth and efficiency.
              </motion.p>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-white">
          <ScrollReveal delay={0.4} direction="left">
            <div className="max-w-lg">
              <PhilosophyHeadline size="medium" className="mb-8">
                Vision
              </PhilosophyHeadline>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl leading-relaxed text-gray-700 font-light"
              >
                To become a globally trusted digital transformation partner.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl leading-relaxed text-gray-700 font-light mt-8"
              >
                We partner with startups, SMEs, and enterprises to create scalable digital products that solve real business problems and deliver long-term value.
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Large typographic statement */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <PhilosophyHeadline size="large" className="mb-8 md:mb-12 text-center md:text-center">
              Our Values
            </PhilosophyHeadline>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:flex md:flex-nowrap md:justify-center gap-4 md:gap-6 lg:gap-8 text-base md:text-lg lg:text-xl xl:text-2xl font-light max-w-md md:max-w-none mx-auto"
            >
              {values.map((value, index) => {
                const isSelected = selectedValues.includes(value.name);
                return (
                  <motion.button
                    key={value.name}
                    onClick={() => toggleValue(value.name)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative cursor-pointer transition-colors px-2 md:px-3 text-center ${
                      isSelected
                        ? "text-red-600 border-b-2 border-red-600 pb-1"
                        : "text-gray-600 hover:text-red-600"
                    }`}
                  >
                    {value.name}
                  </motion.button>
                );
              })}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* How Values Translate to Work */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <PhilosophyHeadline size="medium" className="mb-8 md:mb-12 lg:mb-16 text-white text-center md:text-center">
              How We Live These Values
            </PhilosophyHeadline>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {values
              .filter((value) => selectedValues.includes(value.name))
              .map((item, index) => (
                <ScrollReveal key={item.name} delay={index * 0.1}>
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-l-2 border-red-600 pl-4 md:pl-6"
                  >
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 md:mb-4 text-red-600">
                      {item.name}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg leading-relaxed text-white/80 font-light">
                      {item.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <PhilosophyHeadline size="large" className="mb-12 md:mb-16 text-center">
              Industries We Serve
            </PhilosophyHeadline>
          </ScrollReveal>
          
          {/* Compact Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {[
              "Startups",
              "E-commerce",
              "Healthcare",
              "Education",
              "Finance & FinTech",
              "Retail",
              "Manufacturing",
              "Services",
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }
                }}
                className="group relative"
              >
                <div className="relative h-full min-h-[80px] md:min-h-[100px] lg:min-h-[110px] bg-white border-2 border-dashed border-gray-300 hover:border-red-600 hover:border-solid overflow-hidden cursor-pointer transition-all duration-300">
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-red-600/8 to-transparent z-0"
                  />
                  
                  {/* Animated Top Border */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute top-0 left-0 right-0 h-0.5 bg-red-600 origin-left z-10"
                  />
                  
                  {/* Content */}
                  <div className="relative h-full flex items-center justify-center p-4 md:p-5 lg:p-6 z-10">
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm md:text-base lg:text-lg font-medium text-gray-800 group-hover:text-red-600 transition-colors duration-300 text-center leading-tight"
                    >
                      {industry}
                    </motion.span>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-red-600 origin-left"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <InvitationHeadline size="medium" className="mb-8">
              Ready to build something
              <br />
              <span className="text-red-600">remarkable together?</span>
            </InvitationHeadline>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 font-light mb-12 max-w-2xl mx-auto"
            >
              Let&apos;s turn your vision into reality with thoughtful technology and fearless creativity. Reach out—we&apos;d love to hear from you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-12 md:px-16 py-4 md:py-6 text-lg md:text-xl tracking-tight transition-colors"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
