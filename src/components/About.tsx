import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Users, Rocket, Star } from "lucide-react";

export default function About() {
  const stats = [
    { title: "Client Retention", value: "95%", subtext: "Long-term partnership trust", icon: Users },
    { title: "Market Impact", value: "50+", subtext: "Successful Deployments", icon: Rocket },
    { title: "User Rating", value: "4.9/5", subtext: "Top-tier client satisfaction", icon: Star },
  ];

  return (
    <section id="about" className="relative bg-[#0b120f]/30 border-y border-[#0d1e16] py-24 px-4 md:px-8 overflow-hidden">
      <div className="absolute top-1/2 left-1/3 -z-10 h-60 w-60 rounded-full bg-[#ffd54f]/2 filter blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text/Content Section */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffd54f]">
              ENGINEERING CREDENTIALS
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Clean Architectures designed for <span className="text-[#a0e0c0]">High-Performance</span> execution.
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              At **Kovrin Software Solutions**, we are an agile boutique engineering agency dedicated to helping progressive enterprises and venture-backed startups structure high-performance web backends, responsive custom dashboards, and cross-platform native applications.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Focused purely on clean-code, scalable server schemas, and rich interactive web experiences, we bridge the gap between creative visual design and bulletproof corporate database engineering.
            </p>
            
            {/* Standard Key-Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Strict test-driven clean codebases",
                "Advanced Flutter & React Web SDKs",
                "Scalable SQL & Firestore Integrations",
                "Automated Cloud Run containerization",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#5cb85c]" />
                  <span className="text-sm text-gray-300 font-sans">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Graphic Module */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#14281e] bg-[#0b120f] p-8 subtle-glow shadow-2xl relative">
              <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-[#5cb85c]/60">SUCCESS_METRICS</div>
              <h3 className="font-display font-bold text-gray-200 text-lg mb-6 border-b border-[#14281e] pb-4">
                Success Portfolio
              </h3>
              
              <div className="space-y-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0c1d13] border border-[#14281e]">
                          <Icon className="h-5 w-5 text-[#ffd54f]" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-400 font-sans">{stat.title}</div>
                          <div className="text-[10px] text-gray-500 font-mono">{stat.subtext}</div>
                        </div>
                      </div>
                      
                      <div className="font-display text-xl font-extrabold text-[#5cb85c] tracking-tight">
                        {stat.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
