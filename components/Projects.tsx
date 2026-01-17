"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "J2EE Banking System",
    type: "Enterprise System",
    description: "A secure banking platform implementing CMT and RBAC. Engineered for high concurrency and validated with JMeter load testing.",
    tech: ["Jakarta EE", "Hibernate", "MySQL"],
    link: "#"
  },
  {
    title: "Event Booking Platform",
    type: "Full Stack App",
    description: "Real-time event discovery application with seamless Firebase synchronization and a robust Spring Boot REST API.",
    tech: ["Spring Boot", "Android", "Firebase"],
    link: "#"
  },
  {
    title: "Secure Chat System",
    type: "Communication",
    description: "End-to-end encrypted messaging solution with low-latency delivery and JWT-based authentication.",
    tech: ["Java EE", "React Native", "WebSockets"],
    link: "#"
  },
  {
    title: "IoT Piano Visualizer",
    type: "Hardware Integration",
    description: "Real-time audio visualization system connecting physical hardware inputs with digital rendering.",
    tech: ["C++", "IoT", "Processing"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
                <h2 className="text-3xl md:text-5xl font-nevera text-white mb-4 flex items-center gap-3 uppercase tracking-wider">
                    <span className="w-2 h-10 bg-cyan-500 rounded-full"></span>
                    Featured Work
                </h2>
                <p className="text-slate-400 text-lg">Selected projects from my engineering journey.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group">
                <span className="font-mono text-sm">View GitHub</span>
                <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative glass-card p-8 rounded-2xl hover:bg-white/[0.02] transition-colors"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-cyan-400">
                        <FolderGit2 size={24} />
                    </div>
                    <a href={project.link} className="p-2 text-slate-500 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                </div>

                <div className="mb-2 text-xs font-mono text-cyan-500/80 uppercase tracking-wider">{project.type}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tech.map(t => (
                        <span key={t} className="text-xs font-mono text-slate-500 px-2 py-1 bg-white/5 rounded">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}