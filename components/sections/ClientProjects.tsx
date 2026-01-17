"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ExternalLink } from 'lucide-react';

const clientProjects = [
  { name: "Kosala Service Center", link: "https://www.kosalaservicecenter.com/" },
  { name: "TAGMA Motors", link: "https://tagmamotors.com/" },
  { name: "JH Marketing King", link: "https://jhmarketingking.lk/" },
  { name: "jhacademy", link: "https://jhacademy.lk/" },
  { name: "Milton Campus", link: "https://miltoncampus.com/" },
  { name: "Roxaval Travels", link: "https://roxavaltravels.com/" },
  { name: "Sunfolanka", link: "https://sunfolanka.com/" },
  { name: "Rcshine", link: "https://rcshine.com/" },
  { name: "Wijaya Gems Sri Lanka", link: "https://wijayagems.com/" },
  { name: "Power Electrical Holdings", link: "https://powerholdings.lk/" },
  { name: "Lushella Beauty Studio", link: "https://www.lushella.com.au/" },
  { name: "Men's Improvement", link: "https://mensimprovement.lk/" },
  { name: "Therapy Center", link: "#", display: "Islandertherapy" },
  { name: "Brickzyy", link: "https://brickzyy.com/" },
  { name: "Btechsolar", link: "https://btechsolar.lk/" },
];

export default function ClientProjects() {
  return (
    <section id="client-projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-nevera text-white mb-4 flex items-center gap-3 uppercase tracking-wider">
          <span className="w-2 h-10 bg-cyan-500 rounded-full"></span>
          Client Successes
        </h2>
        <p className="text-slate-400 text-lg">Commercial projects delivered for global clients.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {clientProjects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group glass-card p-5 rounded-xl border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.02] transition-all duration-300 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 bg-white/5 rounded-lg text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0">
                    <Globe size={18} />
                </div>
                <span className="text-slate-300 font-medium truncate group-hover:text-white transition-colors">
                    {project.display || project.name}
                </span>
            </div>
            <ExternalLink size={14} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
