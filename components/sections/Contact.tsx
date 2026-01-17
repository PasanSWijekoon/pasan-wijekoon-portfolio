"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Info */}
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-6xl font-nevera text-white mb-6 tracking-tight uppercase">
                    Let's Build <br/> <span className="text-cyan-400">Something Great.</span>
                </h2>
                <p className="text-xl text-slate-400 font-light max-w-md">
                    Looking for a dedicated Software Engineer Intern for 2025/2026? I'm ready to contribute from day one.
                </p>
            </motion.div>

            <div className="space-y-6 pt-8">
                <div className="flex items-start gap-4 text-slate-300">
                    <div className="p-3 bg-white/5 rounded-full text-cyan-400 border border-white/5">
                        <Mail size={20} />
                    </div>
                    <div>
                        <span className="block text-sm text-slate-500 font-mono mb-1">EMAIL</span>
                        <a href="mailto:hello@example.com" className="text-lg hover:text-cyan-400 transition-colors">hello@example.com</a>
                    </div>
                </div>
                
                <div className="flex items-start gap-4 text-slate-300">
                    <div className="p-3 bg-white/5 rounded-full text-cyan-400 border border-white/5">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <span className="block text-sm text-slate-500 font-mono mb-1">LOCATION</span>
                        <span className="text-lg">Sri Lanka (Open to Remote)</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Form */}
        <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-3xl space-y-6"
        >
            <div className="space-y-2">
                <label className="text-sm font-mono text-slate-400 ml-1">YOUR NAME</label>
                <input 
                    type="text" 
                    className="w-full bg-[#050a14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-white/20"
                    placeholder="John Doe"
                />
            </div>
            
            <div className="space-y-2">
                <label className="text-sm font-mono text-slate-400 ml-1">EMAIL ADDRESS</label>
                <input 
                    type="email" 
                    className="w-full bg-[#050a14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-white/20"
                    placeholder="john@example.com"
                />
            </div>
            
            <div className="space-y-2">
                <label className="text-sm font-mono text-slate-400 ml-1">MESSAGE</label>
                <textarea 
                    rows={4}
                    className="w-full bg-[#050a14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-white/20 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                ></textarea>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,168,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.form>

      </div>
      
      <footer className="mt-24 pt-8 border-t border-white/5 text-center text-slate-600 text-sm flex items-center justify-center gap-2">
         <span>&copy; {new Date().getFullYear()} Pasan Wijekoon.</span>
         <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
         <span>Engineered with Next.js 14 & Framer Motion.</span>
      </footer>
    </section>
  );
}