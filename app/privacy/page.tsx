"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { PhilosophyHeadline } from "@/components/HeadlineSystems";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <PhilosophyHeadline size="large" className="mb-6 text-black">
              Privacy Policy
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
                  VVHA Global (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us through our website{" "}
                  <a
                    href="https://vvha-globals.vercel.app"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    https://vvha-globals.vercel.app
                  </a>
                  .
                </p>
              </div>

              {/* Information We Collect */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Information We Collect
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  We may collect the following information:
                </p>
                <div className="space-y-4 pl-0">
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-3 flex-shrink-0" />
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light flex-1">
                      Personal details such as name, email address, phone number, and company name when you fill out contact or enquiry forms.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-3 flex-shrink-0" />
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light flex-1">
                      Technical information such as IP address, browser type, device information, and usage data for analytics purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  How We Use Your Information
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  We use the collected information to:
                </p>
                <div className="space-y-4 pl-0">
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-3 flex-shrink-0" />
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light flex-1">
                      Respond to enquiries and provide requested services
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-3 flex-shrink-0" />
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light flex-1">
                      Improve our website and service offerings
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-3 flex-shrink-0" />
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light flex-1">
                      Communicate updates, offers, or service-related information
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-3 flex-shrink-0" />
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light flex-1">
                      Ensure website security and prevent fraud
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Cookies
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  Our website may use cookies to enhance user experience, analyze traffic, and improve performance. You can disable cookies through your browser settings if you prefer.
                </p>
              </div>

              {/* Data Security */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Data Security
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or disclosure.
                </p>
              </div>

              {/* Third-Party Services */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Third-Party Services
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  We may use third-party tools such as analytics or marketing platforms that process data in accordance with their privacy policies.
                </p>
              </div>

              {/* Your Rights */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Your Rights
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  You have the right to request access, correction, or deletion of your personal data by contacting us.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Changes to This Policy
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page.
                </p>
              </div>

              {/* Contact Us */}
              <div className="space-y-6 pt-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Contact Us
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light">
                  If you have any questions regarding this Privacy Policy, please contact us at{" "}
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
