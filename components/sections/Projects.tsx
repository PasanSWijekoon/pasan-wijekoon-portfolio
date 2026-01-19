"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "SpringUp Platform",
    type: "Team-Building Application",
    description:
      "A scalable team-building platform where administrators create interactive games and users participate through separate applications. Supports online and offline gameplay with progress synchronization, secure authentication, and role-based access control.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "Redux",
      "JWT",
      "OAuth",
      "AWS S3"
    ],
    link: "https://github.com/Project-Springup"
  },
  {
    title: "Gotham National Banking System",
    type: "Enterprise Banking System",
    description:
      "A secure enterprise-grade banking system designed with ACID-compliant transactions. Implements role-based access control using Jakarta Security and is deployed on a GlassFish application server.",
    tech: [
      "Jakarta EE",
      "Hibernate",
      "MySQL",
      "Jakarta Security",
      "GlassFish"
    ],
    link: "https://github.com/PasanSWijekoon/Gotham-National-Banking-System"
  },
  {
    title: "Event Booking Application",
    type: "Event Discovery & Booking Platform",
    description:
      "An event discovery and booking system featuring real-time database updates via Firebase and a custom-built PHP admin panel for managing events, users, and bookings.",
    tech: [
      "Java",
      "Android",
      "Firebase",
      "PHP",
      "MySQL"
    ],
    link: "https://github.com/PasanSWijekoon/Soleia-Event-Booking-Application"
  },
  {
    title: "IoT Piano Visualizer",
    type: "IoT Learning System",
    description:
      "An IoT-based learning system that synchronizes hardware input with a web interface. Provides real-time LED feedback using ESP32 and WebSocket-based communication between hardware and software.",
    tech: [
      "ESP32",
      "C++",
      "PHP",
      "WebSockets",
      "IoT"
    ],
    link: "https://github.com/PasanSWijekoon/IoT-Piano-Visualizer"
  },
  {
    title: "Zombie Runner 3D",
    type: "Mobile 3D Game",
    description:
      "A mobile-optimized 3D endless runner game featuring AI navigation, procedural enemy waves, and performance optimizations for smooth gameplay on mobile devices.",
    tech: [
      "Unity",
      "C#",
      "AI Navigation",
      "Game Optimization"
    ],
    link: "https://github.com/PasanSWijekoon/Zombie-Runner-Unity-3d-Game"
  },
  {
    title: "UMeeChat",
    type: "Real-Time Messaging Application",
    description:
      "A cross-platform real-time chat application with authentication, presence indicators, and REST API integration, built for seamless mobile communication.",
    tech: [
      "React Native",
      "Expo",
      "Java EE",
      "REST APIs"
    ],
    link: "https://github.com/PasanSWijekoon/UMeeChat-App-FrontEnd"
  },
  {
    title: "PlayTechSolutions",
    type: "E-Commerce Web Application",
    description:
      "A full-stack e-commerce platform with customer storefront and admin dashboard. Includes product management, shopping cart, order history, user feedback modules, and optimized MySQL queries for efficient search and filtering.",
    tech: [
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript"
    ],
    link: "https://github.com/PasanSWijekoon/playtechsolutions"
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
          <p className="text-slate-400 text-lg">
            Production-grade systems engineered with scalability, security, and performance in mind.
          </p>
        </div>
        <a
          href="https://github.com/PasanSWijekoon"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          <span className="font-mono text-sm">View GitHub</span>
          <ArrowUpRight
            size={18}
            className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
          />
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
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-lg text-cyan-400">
                  <FolderGit2 size={24} />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-500 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>

              <div className="mb-2 text-xs font-mono text-cyan-500/80 uppercase tracking-wider">
                {project.type}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-slate-500 px-2 py-1 bg-white/5 rounded"
                  >
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
