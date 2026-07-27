"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Footer() {
  const marqueeItems = [
    "Strategic Advisory",
    "Equity Research",
    "Financial Modeling",
    "Credit Assessment",
    "FP&A Consulting",
    "Value Creation"
  ];

  return (
    <footer className="relative border-t border-white/10 bg-transparent pt-12 pb-6 overflow-hidden z-10">
      
      {/* Animated Subtle Background Grid */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0 footer-grid-bg" />
      
      {/* Top linear gradient mask to fade the grid nicely */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#121212] to-transparent pointer-events-none z-1" />

      {/* Volumetric ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. Infinite Scrolling Marquee */}
        <div className="overflow-hidden w-full border-y border-white/5 py-2.5 bg-zinc-950/20 mb-8 relative flex z-10">
          <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#121212] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#121212] to-transparent z-20 pointer-events-none" />
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex gap-12 whitespace-nowrap min-w-full"
          >
            {/* Loop 1 */}
            <div className="flex gap-12 items-center shrink-0">
              {marqueeItems.map((item, i) => (
                <span key={i} className="text-[10px] tracking-widest uppercase font-semibold text-white/40 flex items-center gap-3">
                  {item}
                  <span className="h-1 w-1 rounded-full bg-amber-500/40" />
                </span>
              ))}
            </div>
            {/* Loop 2 */}
            <div className="flex gap-12 items-center shrink-0">
              {marqueeItems.map((item, i) => (
                <span key={`dup-${i}`} className="text-[10px] tracking-widest uppercase font-semibold text-white/40 flex items-center gap-3">
                  {item}
                  <span className="h-1 w-1 rounded-full bg-amber-500/40" />
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 2. Brand Info & Social Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8">
          
          {/* Left Column: Brand & Statement */}
          <div className="md:col-span-8 space-y-2">
            <h3 className="text-lg font-bold font-name tracking-widest text-white">
              AAKASH K
            </h3>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light font-finance max-w-xl">
              Integrating quantitative rigor, predictive credit risk modeling, and interactive data visualization to unlock strategic corporate financial insights.
            </p>
          </div>

          {/* Right Column: Connections Deck */}
          <div className="md:col-span-4 space-y-3 md:text-right">
            <span className="text-[10px] tracking-wider uppercase font-semibold text-white/40 block">
              Initiate Connection
            </span>

            {/* Social Icons row */}
            <div className="flex gap-3 md:justify-end items-center">
              {/* Email */}
              <a
                href="mailto:aakash302003@gmail.com"
                className="relative h-10 w-10 rounded-full bg-zinc-900/40 border border-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 group hover:border-red-500/30 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                aria-label="Email Me"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-md bg-red-500/10 pointer-events-none" />
                <Mail className="h-4 w-4 text-red-400/80 group-hover:text-red-400 group-hover:scale-105 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/k-aakash-5a177b24a"
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-10 w-10 rounded-full bg-zinc-900/40 border border-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 group hover:border-blue-500/30 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                aria-label="Connect on LinkedIn"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-md bg-blue-500/10 pointer-events-none" />
                <LinkedinIcon className="h-4 w-4 fill-blue-400/80 group-hover:fill-blue-400 group-hover:scale-105 transition-all" />
              </a>

              {/* Phone */}
              <a
                href="tel:+919843009279"
                className="relative h-10 w-10 rounded-full bg-zinc-900/40 border border-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 group hover:border-emerald-500/30 hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                aria-label="Call Me"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-md bg-emerald-500/10 pointer-events-none" />
                <Phone className="h-4 w-4 text-emerald-400/80 group-hover:text-emerald-400 group-hover:scale-105 transition-all" />
              </a>
            </div>
          </div>

        </div>

        {/* 3. Bottom Row: Copyright */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/30 tracking-wider uppercase gap-2">
          <span>
            © {new Date().getFullYear()} Aakash K. All rights reserved.
          </span>
          <span className="font-mono text-white/20">
            DESIGNED & MODELLED FOR QUANTITATIVE EXCELLENCE
          </span>
        </div>

      </div>

      {/* Grid background shifting styles */}
      <style>{`
        .footer-grid-bg {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 25s linear infinite;
        }
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }
      `}</style>
    </footer>
  );
}
