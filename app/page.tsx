"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import KineticText from "@/components/KineticText";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  AuthorityHeadline,
  PhilosophyHeadline,
  InvitationHeadline,
} from "@/components/HeadlineSystems";

const services = [
  {
    title: "Web Design & Development",
    description:
      "High-performance, SEO-friendly websites, web applications, dashboards, and cloud-based platforms.",
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
    title: "Mobile App Development",
    description:
      "Android, iOS, and cross-platform mobile applications built for scalability and performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "UI / UX Design",
    description:
      "User-centric interface design, wireframes, prototypes, and design systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "IT Consulting",
    description:
      "Technology strategy, digital transformation, architecture planning, and system integration.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, social media marketing, Google Ads, branding, and performance marketing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
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
        <div className="flex-1 flex items-center justify-start md:justify-center p-6 md:p-12 lg:p-24 bg-white border-r-0 md:border-r border-black/5">
          <ScrollReveal delay={0.2}>
            <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-2xl w-full">
              <AuthorityHeadline delay={0.3}>
                Building
                <br />
                Scalable
                <br />
                <span className="text-red-600">Digital Solutions</span>
                <br />
                for a Connected
                <br />
                World.
              </AuthorityHeadline>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side - Descriptive Text */}
        <div className="flex-1 flex items-center justify-start md:justify-center p-6 md:p-12 lg:p-24 bg-black text-white">
          <ScrollReveal delay={0.4} direction="left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-4 md:space-y-6 max-w-lg w-full"
            >
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-light">
                We help startups, SMEs, and enterprises transform ideas into high-performing digital products.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-white/70 font-light">
                From concept to launch — we build technology that grows your business.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                <span className="text-xs md:text-sm lg:text-base text-red-600 font-light">•</span>
                <span className="text-xs md:text-sm lg:text-base text-white/60 font-light">Web</span>
                <span className="text-xs md:text-sm lg:text-base text-red-600 font-light">•</span>
                <span className="text-xs md:text-sm lg:text-base text-white/60 font-light">Mobile</span>
                <span className="text-xs md:text-sm lg:text-base text-red-600 font-light">•</span>
                <span className="text-xs md:text-sm lg:text-base text-white/60 font-light">Cloud</span>
                <span className="text-xs md:text-sm lg:text-base text-red-600 font-light">•</span>
                <span className="text-xs md:text-sm lg:text-base text-white/60 font-light">Growth</span>
              </div>
            </motion.div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:mt-24 max-w-4xl mx-auto">
              {services.slice(3, 5).map((service, index) => (
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

      {/* About Snapshot */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600" />
              <div className="pl-4 md:pl-12">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-gray-800"
                >
                  VVHA Global is a technology-driven digital solutions provider helping businesses{" "}
                  <span className="font-semibold text-black">establish, scale, and optimize</span>{" "}
                  their digital presence through modern, scalable, and secure digital platforms.
                </motion.p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose VVHA Global */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <PhilosophyHeadline size="large" className="mb-16 md:mb-24 text-center">
              Why Choose
              <br />
              <span className="text-red-600">VVHA Global</span>
            </PhilosophyHeadline>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {[
              "Experienced technology professionals",
              "Agile and transparent development",
              "Scalable & secure solutions",
              "Long-term support and partnership",
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                  <p className="text-lg md:text-xl leading-relaxed text-white/80 font-light">
                    {item}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <InvitationHeadline size="medium" className="mb-8 text-black">
              Ready to Build
              <br />
              <span className="text-red-600">Your Digital</span>
              <br />
              Product?
            </InvitationHeadline>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-gray-700 font-light mb-12 max-w-2xl mx-auto"
            >
              Contact VVHA Global today and transform your ideas into powerful digital solutions.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 md:px-16 py-4 md:py-6 bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-semibold tracking-tight inline-block transition-colors"
              >
                Get Free Consultation
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 md:px-16 py-4 md:py-6 border-2 border-black text-black hover:bg-black hover:text-white text-lg md:text-xl font-semibold tracking-tight inline-block transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
