"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { PhilosophyHeadline } from "@/components/HeadlineSystems";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <PhilosophyHeadline size="large" className="mb-6 text-black">
              Terms and Conditions
            </PhilosophyHeadline>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base text-gray-500 font-light"
            >
              Last updated: 2026
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-16 md:space-y-20"
            >
              {/* Introduction */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  By accessing and using the VVHA Global website, you agree to comply with and be bound by the following terms and conditions.
                </p>
              </div>

              {/* Use of Website */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Use of Website
                </h2>
                <div className="space-y-4 pl-0">
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-3 flex-shrink-0" />
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light flex-1">
                      The content on this website is for general informational purposes only.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-3 flex-shrink-0" />
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light flex-1">
                      You agree not to misuse the website or engage in activities that may harm the website or its users.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Intellectual Property
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  All content, including text, graphics, logos, and code, is the intellectual property of VVHA Global unless otherwise stated. Unauthorized use is prohibited.
                </p>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Services
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  Service details, pricing, and timelines are subject to change and will be confirmed through formal agreements or proposals.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Limitation of Liability
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  VVHA Global shall not be liable for any direct, indirect, or consequential damages arising from the use or inability to use this website or services.
                </p>
              </div>

              {/* External Links */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  External Links
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  Our website may contain links to third-party websites. VVHA Global is not responsible for the content or practices of these external sites.
                </p>
              </div>

              {/* Governing Law */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Governing Law
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Changes to Terms
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  We reserve the right to modify these Terms and Conditions at any time. Updates will be posted on this page.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 pt-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Contact Information
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  For any questions regarding these Terms and Conditions, please contact us at{" "}
                  <a
                    href="mailto:info@vvhaglobal.com"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    info@vvhaglobal.com
                  </a>
                  .
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
