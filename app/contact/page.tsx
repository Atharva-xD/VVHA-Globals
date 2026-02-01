"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import { InvitationHeadline, PhilosophyHeadline } from "@/components/HeadlineSystems";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Opening section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-20 md:pt-0">
        <div className="max-w-6xl mx-auto w-full">
          <ScrollReveal>
            <InvitationHeadline className="mb-8">
              Let&apos;s Talk About
              <br />
              <span className="text-red-600">Your Project</span>
            </InvitationHeadline>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-600 font-light max-w-3xl"
            >
              Fill out the form and our team will get back to you within 24 hours.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-12"
            >
              <ScrollReveal>
                <div>
                  <motion.label
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    htmlFor="name"
                    className="block text-2xl md:text-3xl font-bold mb-6 tracking-tight"
                  >
                    What&apos;s your name?
                  </motion.label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 text-lg md:text-xl bg-transparent border-0 border-b-2 border-black/20 focus:border-black focus:outline-none transition-colors font-light"
                    placeholder="Your name"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div>
                  <motion.label
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    htmlFor="email"
                    className="block text-2xl md:text-3xl font-bold mb-6 tracking-tight"
                  >
                    How can we reach you?
                  </motion.label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 text-lg md:text-xl bg-transparent border-0 border-b-2 border-black/20 focus:border-black focus:outline-none transition-colors font-light"
                    placeholder="your.email@example.com"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <motion.label
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    htmlFor="message"
                    className="block text-2xl md:text-3xl font-bold mb-6 tracking-tight"
                  >
                    Tell us about your project.
                  </motion.label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-0 py-4 text-lg md:text-xl bg-transparent border-0 border-b-2 border-black/20 focus:border-black focus:outline-none transition-colors font-light resize-none"
                    placeholder="What are you looking to build? What challenges are you facing?"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 md:px-16 py-4 md:py-6 bg-black text-white text-lg md:text-xl font-medium tracking-tight disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                >
                  {isSubmitting ? "Sending..." : "Get Free Consultation"}
                </motion.button>
              </ScrollReveal>
            </motion.form>
          ) : (
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.h2
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight"
                >
                  Thank you.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl leading-relaxed text-gray-600 font-light mb-8"
                >
                  We&apos;ve received your message and will get back to you within 24
                  hours.
                </motion.p>
                <motion.button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 md:px-16 py-4 md:py-6 bg-black text-white text-lg md:text-xl font-medium tracking-tight"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <PhilosophyHeadline size="large" className="mb-12">
              Why Contact Us
            </PhilosophyHeadline>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              "Quick response within 24 hours",
              "NDA & data confidentiality",
              "Transparent pricing",
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-3 flex-shrink-0" />
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                    {item}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative contact section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <PhilosophyHeadline size="large" className="mb-12 text-white">
              Contact Details
            </PhilosophyHeadline>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 mb-8"
            >
              <div>
                <div className="text-sm md:text-base text-white/60 uppercase tracking-wider mb-2">
                  Business Name
                </div>
                <p className="text-xl md:text-2xl font-light">VVHA Global</p>
              </div>
              <div>
                <div className="text-sm md:text-base text-white/60 uppercase tracking-wider mb-2">
                  Service Areas
                </div>
                <p className="text-xl md:text-2xl font-light">India & Global</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <div className="text-sm md:text-base text-white/60 uppercase tracking-wider mb-2">
                  Email
                </div>
                <a
                  href="mailto:info@vvhaglobal.com"
                  className="text-xl md:text-2xl font-light hover:text-red-600 transition-colors"
                >
                  info@vvhaglobal.com
                </a>
              </div>
              <div>
                <div className="text-sm md:text-base text-white/60 uppercase tracking-wider mb-2">
                  Phone
                </div>
                <a
                  href="tel:+917731913335"
                  className="text-xl md:text-2xl font-light hover:text-red-600 transition-colors"
                >
                  +91 77319 13335
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
