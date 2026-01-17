"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Decorative Grid Line */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-12 opacity-5">
            <svg width="200" height="200" viewBox="0 0 100 100" className="fill-current text-cyan-400">
                <circle cx="50" cy="50" r="40" />
            </svg>
        </div>

        <div className="relative z-10 max-w-4xl">
            <h2 className="text-sm font-mono text-cyan-400 mb-6 tracking-widest uppercase">About The Engineer</h2>
            <div className="text-xl md:text-3xl font-light leading-relaxed text-slate-300 space-y-8">
                <p>
                I am a Software Engineering student driven by <span className="text-white font-medium border-b border-cyan-500/50 pb-0.5">complex problem solving</span>. My focus lies in architecting secure, scalable backend systems using Java & Spring Boot.
                </p>
                <p>
                Currently specializing in <span className="text-cyan-400">Microservices</span> and <span className="text-cyan-400">Cloud Infrastructure</span>. I don't just write code; I build reliable digital foundations.
                </p>
            </div>

            <div className="mt-12 flex gap-8">
                <div>
                    <span className="block text-3xl font-bold text-white mb-1">2+</span>
                    <span className="text-sm text-slate-500 uppercase tracking-wider">Years Exp</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white mb-1">20+</span>
                    <span className="text-sm text-slate-500 uppercase tracking-wider">Projects</span>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
