"use client";

import React from "react";
import { motion } from "framer-motion";
import TechOrbit from "@/components/ui/TechOrbit/TechOrbit";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Animated paragraph helper
const AnimatedParagraph = ({
  text,
  className = ""
}: {
  text: string;
  className?: string;
}) => {
  const sentences = text
    .split(". ")
    .map((s, i, arr) => (i < arr.length - 1 ? s + ". " : s));

  return (
    <motion.div
      variants={textContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {sentences.map((sentence, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block mr-1">
          <span
            dangerouslySetInnerHTML={{
              __html: sentence
                .replace(
                  /complex problem solving/g,
                  '<span class="text-white font-medium border-b border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default">complex problem solving</span>'
                )
                .replace(
                  /Microservices/g,
                  '<span class="text-cyan-400 hover:text-cyan-300 transition-all cursor-default">Microservices</span>'
                )
                .replace(
                  /Cloud Infrastructure/g,
                  '<span class="text-cyan-400 hover:text-cyan-300 transition-all cursor-default">Cloud Infrastructure</span>'
                )
                .replace(
                  /secure, scalable backend systems/g,
                  '<span class="text-white font-medium">secure, scalable backend systems</span>'
                )
                .replace(
                  /reliable digital foundations/g,
                  '<span class="text-white font-medium">reliable digital foundations</span>'
                )
            }}
          />
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative"
    >
      {/* Decorative vertical line */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden group hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-500"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* LEFT: TEXT */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl font-nevera text-white/90 uppercase tracking-wider"
            >
              About Me
            </motion.h2>

            <div className="text-xl md:text-2xl font-light leading-relaxed text-slate-300 space-y-6">
              <AnimatedParagraph
                text="I am a Software Engineer with hands-on experience delivering production-ready applications."
              />

              <AnimatedParagraph
                text="I specialize in complex problem solving and building secure, scalable backend systems using Java, Spring Boot, and modern web technologies."
              />

              <AnimatedParagraph
                text="My work spans Microservices, Cloud Infrastructure, and full-stack development. From client-facing platforms to real-time and IoT-driven systems, I focus on creating reliable digital foundations that scale in real-world environments."
              />
            </div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-12 pt-4"
            >
              <div className="group/stat">
                <span className="block text-4xl font-bold text-white mb-1 group-hover/stat:text-cyan-400 transition-colors">
                  2+
                </span>
                <span className="text-sm text-slate-500 uppercase tracking-wider group-hover/stat:text-slate-400 transition-colors">
                  Years Experience
                </span>
              </div>

              <div className="group/stat">
                <span className="block text-4xl font-bold text-white mb-1 group-hover/stat:text-cyan-400 transition-colors">
                  15+
                </span>
                <span className="text-sm text-slate-500 uppercase tracking-wider group-hover/stat:text-slate-400 transition-colors">
                  Client Projects
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: TECH ORBIT */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-radial from-cyan-900/20 to-transparent opacity-50 blur-3xl pointer-events-none" />
            <TechOrbit className="scale-75 md:scale-100 transform transition-transform duration-700 hover:scale-[1.05] md:hover:scale-110" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
