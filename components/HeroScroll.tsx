"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Cpu,
  GitBranch,
} from "lucide-react";
import { useLoading } from "@/context/LoadingContext";

const frameCount = 192;
const frameUrls = Array.from(
  { length: frameCount },
  (_, i) => `/animations/${(i + 1).toString().padStart(5, "0")}.png`,
);

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { isLoading, setIsLoading } = useLoading();
  const [progress, setProgress] = useState(0);

  // Increased height to accommodate more sections
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, frameCount - 1],
  );

  // --- Transform Logic ---
  // Hero fades out quickly
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  // 1. Soft Skills (Scattered) - 20% to 35%
  const softSkillsOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.35],
    [0, 1, 0],
  );

  // 2. Core Practices (OOP, MVC, Optimization) - 35% to 50%
  const practicesOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.42, 0.5],
    [0, 1, 0],
  );

  // 3. Methodologies & DevOps (Agile, Microservices, CI/CD) - 50% to 65%
  const methodsOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.57, 0.65],
    [0, 1, 0],
  );

  // 4. Final CTA - 80% to 100%
  const ctaOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];
    const loadBatch = (startIndex: number, batchSize: number) => {
      for (
        let i = startIndex;
        i < Math.min(startIndex + batchSize, frameCount);
        i++
      ) {
        const img = new Image();
        img.src = frameUrls[i];
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / frameCount) * 100));
          if (loadedCount === frameCount) {
            setIsLoading(false);
          }
        };
        imgs[i] = img;
      }
    };
    loadBatch(0, frameCount);
    setImages(imgs);
  }, []);

  // Render canvas
  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (index: number) => {
      const safeIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(index)),
      );
      const img = images[safeIndex];
      if (!img || !img.complete) return;

      const ratio = img.width / img.height;
      let newWidth = canvas.width;
      let newHeight = newWidth / ratio;
      if (newHeight < canvas.height) {
        newHeight = canvas.height;
        newWidth = newHeight * ratio;
      }
      const xOffset = (canvas.width - newWidth) / 2;
      const yOffset = (canvas.height - newHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      ctx.drawImage(img, xOffset, yOffset, newWidth, newHeight);

      const gradient = ctx.createLinearGradient(
        0,
        canvas.height - 200,
        0,
        canvas.height,
      );
      gradient.addColorStop(0, "rgba(2, 4, 10, 0)");
      gradient.addColorStop(1, "#02040a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, canvas.height - 200, canvas.width, 200);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(currentIndex.get());
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    const unsubscribe = currentIndex.on("change", (latest) =>
      requestAnimationFrame(() => render(latest)),
    );
    render(currentIndex.get());
    return () => {
      unsubscribe();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isLoading, currentIndex, images]);

  const marqueeText = [
    "I’m A Programmer And Designer Who Bridges Visual Design And Engineering.",
    "I Design Intuitive Interfaces And Implement Them With Clean, Maintainable Code.",
    "I Deliver Full Product Cycles From Sketches And Prototypes To Production-ready Apps And Apis.",
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-[#02040a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Background Grid Overlay */}
        <div className="absolute inset-0 grid-bg opacity-30 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#02040a] z-10 pointer-events-none"></div>

        {/* Loader */}
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#02040a] text-cyan-500/50 gap-4">
            <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
            <span className="font-mono text-xs uppercase tracking-widest">
              System Initializing... {progress}%
            </span>
          </div>
        )}

        {/* Canvas Animation */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        />

        {/* Layer 1: Initial Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={!isLoading ? "visible" : "hidden"}
            className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl px-6 md:px-12 text-center space-y-8"
          >
            <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-mono text-cyan-400 tracking-wider">
                OPEN FOR WORK 2026
              </span>
            </motion.div>

            <div className="space-y-2">
              <motion.h2 variants={textVariants} className="text-sm md:text-base font-mono text-slate-400 tracking-[0.2em] uppercase">
                Software Engineer Intern
              </motion.h2>
              <motion.h1 variants={textVariants} className="text-6xl md:text-9xl font-nevera text-white tracking-tighter text-glow">
                PASAN WIJEKOON
              </motion.h1>
            </div>

            <motion.p variants={textVariants} className="max-w-xl mx-auto text-slate-400 text-lg font-light leading-relaxed">
              Building robust{" "}
              <span className="text-cyan-400">backend systems</span> and
              scalable{" "}
              <span className="text-cyan-400">cloud infrastructure</span> with
              engineering precision.
            </motion.p>

            {/* Social Row */}
            <motion.div variants={textVariants} className="flex items-center justify-center gap-6 pt-4 pointer-events-auto">
              <a
                href="https://github.com/PasanSWijekoon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/pasan-s-wijekoon/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:wijekoonpasan055@gmail.com"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Marquee Section */}
          <div className="w-full pb-12 overflow-hidden marquee-container pointer-events-auto">
            <div className="flex whitespace-nowrap marquee-content">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 mx-4">
                  {marqueeText.map((text, j) => (
                    <div key={j} className="flex items-center gap-8">
                      <p className="text-xl md:text-2xl font-light text-slate-500/80">
                        {text}
                      </p>
                      <Sparkles size={16} className="text-cyan-500/50" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/20"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>

        {/* Layer 2: Scroll Synced Content */}
        <div className="absolute inset-0 pointer-events-none z-30 mix-blend-screen w-full h-full max-w-7xl mx-auto px-6 md:px-12">
          {/* 1. SOFT SKILLS (Scattered Cards with Middle Space) */}
          <motion.div
            style={{ opacity: softSkillsOpacity }}
            className="absolute inset-0"
          >
            {/* Top Left (Far) */}
            <div className="absolute top-[25%] left-0 md:-left-[5%] glass-card px-8 py-5 rounded-2xl border-glow transform -rotate-2 group">
              <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                Problem Solving
              </h3>
            </div>

            {/* Top Right (Far) */}
            <div className="absolute top-[20%] right-0 md:-right-[5%] glass-card px-8 py-5 rounded-2xl border-glow transform rotate-3">
              <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                Critical Thinking
              </h3>
            </div>

            {/* Middle Right (Far) */}
            <div className="absolute top-[50%] right-0 md:-right-[2%] glass-card px-8 py-5 rounded-2xl border-glow transform -rotate-1">
              <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                Teamwork
              </h3>
            </div>

            {/* Bottom Right (Far) */}
            <div className="absolute top-[75%] right-0 md:-right-[5%] glass-card px-8 py-5 rounded-2xl border-glow transform rotate-2">
              <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                Communication
              </h3>
            </div>

            {/* Bottom Left (Far) */}
            <div className="absolute bottom-[20%] left-0 md:-left-[5%] glass-card px-10 py-6 rounded-2xl border-glow transform rotate-2">
              <h3 className="text-3xl md:text-5xl font-bold text-cyan-400 tracking-tight leading-tight">
                Stakeholder <br /> Engagement
              </h3>
            </div>
          </motion.div>

          {/* 2. CORE PRACTICES (Reference Style with Connectors) */}
          <motion.div
            style={{ opacity: practicesOpacity }}
            className="absolute inset-0"
          >
            {/* OOP - Top Left (Far Left) */}
            <div className="absolute top-[25%] left-0 md:-left-[8%] group">
              <div className="relative glass-card px-8 py-5 rounded-2xl border-glow bg-cyan-950/30 transform rotate-1">
                <div className="text-cyan-400 font-bold text-2xl md:text-4xl">
                  OOP Principles
                </div>
                {/* Connector Line Right */}
                <div className="absolute top-1/2 -right-24 w-24 h-px bg-cyan-400/50 hidden lg:block"></div>
              </div>
            </div>

            {/* MVC - Middle Right (Far Right) */}
            <div className="absolute top-[50%] right-0 md:-right-[8%] group">
              <div className="relative glass-card px-8 py-5 rounded-2xl border-glow bg-white/5 transform -rotate-1">
                <div className="text-white font-bold text-2xl md:text-4xl">
                  MVC Architecture
                </div>
                {/* Connector Line Left */}
                <div className="absolute top-1/2 -left-24 w-24 h-px bg-white/50 hidden lg:block"></div>
              </div>
            </div>

            {/* Code Optimization - Bottom Left (Far Left) */}
            <div className="absolute bottom-[25%] left-0 md:-left-[8%] group">
              <div className="relative glass-card px-8 py-5 rounded-2xl border-glow bg-blue-950/30 flex items-center gap-3 transform -rotate-2">
                <Code2 size={28} className="text-blue-400" />
                <div className="text-blue-400 font-bold text-2xl md:text-4xl">
                  Code Optimization
                </div>
                {/* Connector Line Right */}
                <div className="absolute top-1/2 -right-24 w-24 h-px bg-blue-400/50 hidden lg:block origin-left -rotate-6"></div>
              </div>
            </div>
          </motion.div>

          {/* 3. METHODOLOGIES (Scattered Tech Particles - Far Edges) */}
          <motion.div
            style={{ opacity: methodsOpacity }}
            className="absolute inset-0"
          >
            {/* Agile - Top Left */}
            <div className="absolute top-[22%] left-0 md:-left-[5%] px-8 py-4 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-md text-purple-300 font-bold text-2xl md:text-4xl transform -rotate-6">
              Agile / Scrum
            </div>

            {/* Microservices - Bottom Right */}
            <div className="absolute bottom-[20%] right-0 md:-right-[5%] px-10 py-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md text-cyan-300 font-black text-3xl md:text-5xl transform rotate-3">
              Microservices
            </div>

            {/* CI/CD - Top Right */}
            <div className="absolute top-[18%] right-0 md:-right-[5%] flex items-center gap-4 px-8 py-4 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md text-blue-300 font-bold text-2xl md:text-4xl">
              <GitBranch size={28} className="hidden md:block" />
              <span>CI / CD</span>
            </div>

            {/* Unit Testing - Bottom Left */}
            <div className="absolute bottom-[25%] left-0 md:-left-[5%] px-8 py-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md text-emerald-300 font-bold text-xl md:text-3xl transform rotate-12">
              Unit & Integration Testing
            </div>
          </motion.div>

          {/* 4. FINAL CTA */}
          <motion.div
            style={{ opacity: ctaOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-8 text-center">
              Let's Build <br /> The Future
            </h2>
            <div className="pointer-events-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-black rounded-full font-bold hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
