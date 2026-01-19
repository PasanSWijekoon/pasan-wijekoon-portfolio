"use client";

import React from "react";
import { motion, useTime, useTransform } from "framer-motion";
import { 
  Cloud, 
  ShieldCheck, 
  Box, 
  Zap, 
  Share2, 
  Coffee 
} from "lucide-react";

const ORBIT_DURATION = 40; // Seconds for full rotation
const PULSE_DURATION = 4; // Seconds for core pulse

const items = [
  { icon: Coffee, label: "Java", color: "text-orange-400" },
  { icon: Zap, label: "Spring Boot", color: "text-green-400" },
  { icon: Share2, label: "Microservices", color: "text-cyan-400" },
  { icon: Cloud, label: "Cloud", color: "text-blue-400" },
  { icon: Box, label: "Docker", color: "text-blue-500" },
  { icon: ShieldCheck, label: "Security", color: "text-emerald-400" },
];

export default function TechOrbit({ className = "" }: { className?: string }) {
  const time = useTime();
  const rotate = useTransform(time, [0, ORBIT_DURATION * 1000], [0, 360], { clamp: false });
  
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Core Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5] 
          }}
          transition={{ 
            duration: PULSE_DURATION, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-24 h-24 rounded-full bg-cyan-500/20 blur-xl"
        />
        <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-10" />
        {/* Core Ring */}
        <div className="absolute w-32 h-32 rounded-full border border-cyan-500/10" />
      </div>

      {/* Orbit Track */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/5 pointer-events-none" />

      {/* Orbiting Items Container */}
      <motion.div 
        style={{ rotate }}
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full"
      >
        {items.map((item, i) => {
          const angle = (i / items.length) * 360;
          
          return (
            <div
              key={item.label}
              className="absolute top-0 left-1/2"
              style={{
                height: "100%",
                width: "48px",
                marginLeft: "-24px",
                transform: `rotate(${angle}deg)`,
                transformOrigin: "center center",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ItemContent item={item} rotate={rotate} angle={angle} />
              </div>
            </div>
          );
        })}
      </motion.div>
      
      {/* Decorative Outer Rings */}
      <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-dashed border-white/5 animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />
    </div>
  );
}

// Separate component to use hooks for counter-rotation
function ItemContent({ item, rotate, angle }: { item: any, rotate: any, angle: number }) {
  // Counter rotate: -angle (static) - rotate (dynamic)
  const counterRotate = useTransform(rotate, (r: any) => -r - angle);
  
  return (
    <motion.div
      style={{ rotate: counterRotate }}
      className="flex flex-col items-center gap-2 group cursor-pointer"
    >
      <div className={`p-3 rounded-full bg-[#0a0a0a] border border-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 ${item.color}`}>
        <item.icon size={20} />
      </div>
      <span className="text-[10px] md:text-xs font-mono text-slate-400 group-hover:text-cyan-400 transition-colors uppercase tracking-wider bg-[#02040a]/80 px-2 py-0.5 rounded backdrop-blur-sm whitespace-nowrap">
        {item.label}
      </span>
    </motion.div>
  );
}