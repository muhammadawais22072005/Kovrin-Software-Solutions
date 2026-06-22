import React from "react";
import { SERVICES_LIST } from "../data";
import * as Icons from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-4 md:px-8">
      {/* Decorative absolute subtle glow background */}
      <div className="absolute top-1/3 right-1/4 -z-10 h-80 w-80 rounded-full bg-[#5cb85c]/3 filter blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header container */}
        <div className="mb-16 space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#5cb85c]">
            COMPREHENSIVE EXPERTISE
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Technical Roster & Scope of Work.
          </h2>
          <p className="text-gray-400 max-w-2xl font-sans text-sm sm:text-base leading-relaxed">
            Delivering high-concurrency digital installations across cross-platform frameworks, robust cloud-native interfaces, and artificial neural networks.
          </p>
        </div>

        {/* Dense responsive Service modular tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES_LIST.map((service, index) => {
            // Dynamically lookup the Lucide Icon component
            const IconComponent = (Icons as any)[service.iconName] || Icons.Cpu;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 4) * 0.05, duration: 0.5 }}
                className="group relative flex flex-col justify-between rounded-xl border border-[#14281e]/80 bg-[#0b120f] p-6 hover:bg-[#0d1713] hover:border-[#5cb85c]/30 transition-all duration-300 shadow-md subtle-glow"
              >
                {/* Circuit background path outline inside card */}
                <div className="absolute top-3 right-3 text-[9px] font-mono font-semibold text-[#5cb85c]/20 group-hover:text-[#5cb85c]/60 transition-colors duration-300">
                  SEC-{(100 + index).toString(16).toUpperCase()}
                </div>

                <div className="space-y-4">
                  {/* Glowing Icon Wrapper */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0c1d13] border border-[#14281e] group-hover:border-[#ffd54f]/40 group-hover:bg-[#14281e] transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-[#ffd54f] group-hover:text-[#5cb85c] group-hover:scale-105 transition-all duration-300" />
                  </div>

                  {/* Service properties */}
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-bold text-gray-200 group-hover:text-[#ffd54f] transition-colors duration-300 text-sm sm:text-base">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Micro tech line detail at the bottom */}
                <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-[#ffd54f] to-[#5cb85c] group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
