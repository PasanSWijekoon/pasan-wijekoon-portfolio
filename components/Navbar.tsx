"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

import { useLoading } from "@/context/LoadingContext";

export default function Navbar() {
  const { isLoading } = useLoading();
  
  if (isLoading) return null;

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-12 md:gap-20 px-10 py-4 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] border-glow"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group font-sans shrink-0">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all duration-300">
            <Terminal size={16} className="text-cyan-400" />
          </div>
          <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            PasanWijekoon<span className="text-white/40">.dev</span>
          </span>
        </Link>

        {/* Nav Items (Centered within the pill) */}
        <div className="hidden lg:flex items-center gap-3 p-1 bg-white/5 border border-white/5 rounded-full">
            {navItems.map((item) => (
            <Link 
                key={item.name} 
                href={item.href} 
                className="px-6 py-2 text-xs font-bold text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 font-sans tracking-[0.15em] uppercase"
            >
                {item.name}
            </Link>
            ))}
        </div>

        {/* CTA Button */}
        <div className="shrink-0">
          <a 
              href="#contact" 
              className="px-7 py-2.5 bg-white text-black text-xs font-black rounded-full hover:scale-105 transition-transform duration-300 font-sans uppercase tracking-widest shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          >
              Hire Me
          </a>
        </div>
      </motion.nav>
    </div>
  );
}