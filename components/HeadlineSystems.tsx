/**
 * VVHA Global Headline Systems
 * 
 * Four reusable headline systems for consistent typography and messaging
 * across the website.
 */

import { motion } from "framer-motion";
import { ReactNode } from "react";

// ============================================================================
// AUTHORITY HEADLINES
// ============================================================================
/**
 * Purpose: Establish credibility, expertise, and market position
 * Structure: Bold, declarative statements that communicate leadership
 * Usage: Homepage hero, About sections, Trust indicators
 * 
 * Examples:
 * - "Building Scalable Digital Solutions for a Connected World"
 * - "We deliver scalable digital solutions across industries"
 * - "A technology-driven digital solutions provider"
 * - "Full-service web and mobile development company"
 * - "Leading digital solutions company"
 * - "Globally trusted digital transformation partner"
 */
interface AuthorityHeadlineProps {
  children: ReactNode;
  highlight?: string;
  className?: string;
  delay?: number;
}

export function AuthorityHeadline({
  children,
  highlight,
  className = "",
  delay = 0,
}: AuthorityHeadlineProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.02em] leading-[0.95] text-black ${className}`}
    >
      {children}
    </motion.h1>
  );
}

// ============================================================================
// PHILOSOPHY HEADLINES
// ============================================================================
/**
 * Purpose: Communicate values, mission, vision, and brand philosophy
 * Structure: Reflective, values-driven statements with emotional resonance
 * Usage: About/Perspective page, Values sections, Mission/Vision
 * 
 * Examples:
 * - "Empower businesses with innovative digital solutions"
 * - "To become a globally trusted digital transformation partner"
 * - "Innovation • Integrity • Quality • Partnership"
 * - "We partner with startups, SMEs, and enterprises"
 * - "Long-term thinking over quick wins"
 * - "Technology as enabler, not constraint"
 */
interface PhilosophyHeadlineProps {
  children: ReactNode;
  size?: "large" | "medium" | "small";
  className?: string;
  delay?: number;
}

export function PhilosophyHeadline({
  children,
  size = "large",
  className = "",
  delay = 0,
}: PhilosophyHeadlineProps) {
  const sizeClasses = {
    large: "text-4xl md:text-6xl lg:text-7xl",
    medium: "text-3xl md:text-4xl lg:text-5xl",
    small: "text-2xl md:text-3xl lg:text-4xl",
  };

  return (
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`${sizeClasses[size]} font-bold tracking-tight leading-tight ${className}`}
    >
      {children}
    </motion.h2>
  );
}

// ============================================================================
// CAPABILITY HEADLINES
// ============================================================================
/**
 * Purpose: Describe services, solutions, and what VVHA can deliver
 * Structure: Action-oriented, solution-focused, benefit-driven
 * Usage: Services/Capabilities page, Service cards, Solution descriptions
 * 
 * Examples:
 * - "High-performance, SEO-friendly websites"
 * - "Android, iOS, and cross-platform mobile applications"
 * - "User-centric interface design, wireframes, prototypes"
 * - "Technology strategy, digital transformation, architecture planning"
 * - "SEO, social media marketing, Google Ads, branding"
 * - "Custom Web Applications • Mobile Applications • Enterprise Software"
 */
interface CapabilityHeadlineProps {
  title: string;
  description?: string;
  tagline?: string;
  className?: string;
  delay?: number;
}

export function CapabilityHeadline({
  title,
  description,
  tagline,
  className = "",
  delay = 0,
}: CapabilityHeadlineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2">
        {title}
      </h3>
      {tagline && (
        <p className="text-lg md:text-xl text-gray-600 font-light mb-3">
          {tagline}
        </p>
      )}
      {description && (
        <p className="text-base md:text-lg leading-relaxed text-gray-700 font-light">
          {description}
        </p>
      )}
    </motion.div>
  );
}

// ============================================================================
// INVITATION HEADLINES
// ============================================================================
/**
 * Purpose: Engage users, invite action, create conversation starters
 * Structure: Conversational, engaging, action-inviting with clear CTAs
 * Usage: Contact page, CTA sections, Engagement prompts
 * 
 * Examples:
 * - "Let's Talk About Your Project"
 * - "Ready to Build Your Digital Product?"
 * - "Get Free Consultation"
 * - "Start a Conversation"
 * - "Transform your ideas into powerful digital solutions"
 * - "Contact VVHA Global today"
 */
interface InvitationHeadlineProps {
  children: ReactNode;
  highlight?: string;
  size?: "large" | "medium";
  className?: string;
  delay?: number;
}

export function InvitationHeadline({
  children,
  highlight,
  size = "large",
  className = "",
  delay = 0,
}: InvitationHeadlineProps) {
  const sizeClasses = {
    large: "text-5xl md:text-7xl lg:text-8xl",
    medium: "text-3xl md:text-4xl lg:text-5xl",
  };

  return (
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`${sizeClasses[size]} font-black tracking-tighter leading-[0.95] ${className}`}
    >
      {children}
    </motion.h2>
  );
}
