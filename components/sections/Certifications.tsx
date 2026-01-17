"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const certs = [
  "Python for AI & Machine Learning",
  "Agile / Scrum Certification",
  "SLIIT Codefest – Merit Award",
  "YCS Merit Award"
];

export default function Certifications() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                <Award size={200} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/3">
                    <h2 className="text-2xl font-bold text-white mb-4">Certifications & <br/> <span className="text-cyan-400">Awards</span></h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Recognition of my technical proficiency and commitment to continuous learning in software engineering.
                    </p>
                </div>
                
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {certs.map((cert, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-colors"
                        >
                            <CheckCircle2 size={18} className="text-cyan-500 shrink-0" />
                            <span className="text-slate-300 font-medium">{cert}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}