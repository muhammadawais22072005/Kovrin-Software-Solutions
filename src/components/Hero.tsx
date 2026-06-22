import React from "react";
import { motion } from "motion/react";
import LogoIcon from "./LogoIcon";
import { ArrowRight, Cpu, Sparkles } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden py-16 px-4 md:px-8">
      {/* Decorative cybernetic background elements */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-[#5cb85c]/5 filter blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-[#ffd54f]/4 filter blur-[100px]" />

      {/* Grid line circuits */}
      <div className="absolute inset-0 -z-20 opacity-20 bg-[linear-gradient(to_right,#0c1d13_1px,transparent_1px),linear-gradient(to_bottom,#0c1d13_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Tech Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#14281e] bg-[#0a110d] px-3.5 py-1.5 text-xs text-[#a0e0c0] shadow-[0_0_15px_-3px_rgba(92,184,92,0.2)] mb-8"
        >
          <Cpu className="h-3.5 w-3.5 text-[#ffd54f] animate-pulse" />
          <span className="font-mono tracking-wider">PIONEERING INDUSTRIAL SOFTWARE ENGINE</span>
          <Sparkles className="h-3.5 w-3.5 text-[#ffd54f]" />
        </motion.div>

        {/* Central Hexagon Decoration */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="relative mb-8 cursor-pointer group"
        >
          {/* Pulsating glowing ring container */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#ffd54f]/10 to-[#5cb85c]/10 opacity-30 blur-xl group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
          <LogoIcon size={120} />
        </motion.div>

        {/* Big Dynamic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl/tight long-word-wrap"
        >
          Architecting Web & App <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd54f] via-[#a0e0c0] to-[#5cb85c]">
            Digital Solutions
          </span> at Scale.
        </motion.h1>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 text-base text-gray-400 sm:text-lg max-w-2xl leading-relaxed font-sans"
        >
          We build robust, ultra-reliable, beautifully styled custom web systems and responsive applications that empower corporate brands and streamline modern logistics.
        </motion.p>

        {/* Interactive primary action controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={onGetStarted}
            className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#ffd54f] to-[#5cb85c] px-6 py-3.5 text-sm font-bold text-[#060a08] transition-all hover:shadow-[0_0_20px_-3px_rgba(92,184,92,0.4)] hover:brightness-105"
          >
            Start Your Solutions Inquiry
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
