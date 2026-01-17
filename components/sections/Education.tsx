"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    institution: "IIC University of Technology Cambodia",
    degree: "BEng (Hons) in Software Engineering",
    year: "Completed 2026",
    status: "Completed",
    location: "Cambodia (Remote/Partner)" // Assuming context or generic location if needed, but simplified to data provided
  },
  {
    institution: "University of Colombo Sri Lanka",
    degree: "Bachelor of Information Technology (External)",
    year: "Expected Feb 2027",
    status: "In Progress",
    location: "Colombo, Sri Lanka"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-nevera text-white mb-4 flex items-center gap-3 uppercase tracking-wider">
          <span className="w-2 h-10 bg-cyan-500 rounded-full"></span>
          Education
        </h2>
        <p className="text-slate-400 text-lg">Academic foundation and qualifications.</p>
      </motion.div>

      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative glass-card p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-slate-300 font-medium">{edu.degree}</p>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2 pl-14 md:pl-0">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm bg-cyan-950/30 px-3 py-1.5 rounded border border-cyan-500/20">
                  <Calendar size={14} />
                  <span>{edu.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
