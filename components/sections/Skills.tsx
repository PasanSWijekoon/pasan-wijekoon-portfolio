"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Server, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages & Core",
    icon: <Code2 className="text-cyan-400" size={20} />,
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "PHP",
      "C",
      "C#",
      "SQL",
      "RESTful APIs"
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layout className="text-cyan-400" size={20} />,
    skills: [
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "Jakarta EE",
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "React Native",
      "Angular",
      "Redux"
    ]
  },
  {
    title: "Databases",
    icon: <Database className="text-cyan-400" size={20} />,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Redis"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="text-cyan-400" size={20} />,
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "CloudFormation",
      "Ansible",
      "CI/CD"
    ]
  },
  {
    title: "Testing & Monitoring",
    icon: <Terminal className="text-cyan-400" size={20} />,
    skills: [
      "JMeter",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "Sentry",
      "Datadog",
      "Postman"
    ]
  },
  {
    title: "IoT & Game Development",
    icon: <Server className="text-cyan-400" size={20} />,
    skills: [
      "ESP32",
      "Arduino",
      "C++",
      "Unity",
      "Game Optimization",
      "AI Navigation"
    ]
  }
];


export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-nevera text-white mb-4 flex items-center gap-3 uppercase tracking-wider">
                <span className="w-2 h-10 bg-cyan-500 rounded-full"></span>
                Technical Arsenal
            </h2>
            <p className="text-slate-400 text-lg">The tools I use to build scalable systems.</p>
        </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 rounded-2xl group hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                    {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white/90">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 text-sm font-medium text-slate-400 bg-white/5 border border-white/5 rounded-md hover:text-cyan-400 hover:border-cyan-500/30 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}