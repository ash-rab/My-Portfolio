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
    <footer className="relative border-t border-white/10 bg-transparent pt-24 pb-12 overflow-hidden z-20">
      
      {/* Animated Subtle Background Grid */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0 footer-grid-bg" />
      
      {/* Top linear gradient mask to fade the grid nicely */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#121212] to-transparent pointer-events-none z-1" />

      {/* Volumetric ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. Infinite Scrolling Marquee */}
        <div className="overflow-hidden w-full border-y border-white/5 py-4 bg-zinc-950/20 mb-16 relative flex z-10">
          <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-[#121212] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-[#121212] to-transparent z-20 pointer-events-none" />
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex gap-16 whitespace-nowrap min-w-full"
          >
            {/* Loop 1 */}
            <div className="flex gap-16 items-center shrink-0">
              {marqueeItems.map((item, i) => (
                <span key={i} className="text-[10px] tracking-widest uppercase font-semibold text-white/40 flex items-center gap-4">
                  {item}
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500/40" />
                </span>
              ))}
            </div>
            {/* Loop 2 */}
            <div className="flex gap-16 items-center shrink-0">
              {marqueeItems.map((item, i) => (
                <span key={`dup-${i}`} className="text-[10px] tracking-widest uppercase font-semibold text-white/40 flex items-center gap-4">
                  {item}
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500/40" />
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 2. Brand Info & Social Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Brand & Statement */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-xl font-bold font-name tracking-widest text-white">
              AAKASH K
            </h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed font-light font-finance max-w-lg">
              Integrating quantitative rigor, predictive credit risk modeling, and interactive data visualization to unlock strategic corporate financial insights.
            </p>
          </div>

          {/* Right Column: Connections Deck */}
          <div className="md:col-span-5 space-y-6 md:text-right">
            <div className="space-y-1">
              <span className="text-[10px] tracking-wider uppercase font-semibold text-white/40">
                Connection channels
              </span>
              <h4 className="text-lg font-bold text-white font-finance">
                Initiate Connection
              </h4>
            </div>

            {/* Social Icons row */}
            <div className="flex gap-4 md:justify-end items-center">
              {/* Email */}
              <a
                href="mailto:aakash302003@gmail.com"
                className="relative h-12 w-12 rounded-full bg-zinc-900/40 border border-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 group hover:border-red-500/30 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                aria-label="Email Me"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-md bg-red-500/10 pointer-events-none" />
                <Mail className="h-4.5 w-4.5 text-red-400/80 group-hover:text-red-400 group-hover:scale-105 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/k-aakash-5a177b24a"
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-12 w-12 rounded-full bg-zinc-900/40 border border-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 group hover:border-blue-500/30 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                aria-label="Connect on LinkedIn"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-md bg-blue-500/10 pointer-events-none" />
                <LinkedinIcon className="h-4.5 w-4.5 fill-blue-400/80 group-hover:fill-blue-400 group-hover:scale-105 transition-all" />
              </a>

              {/* Phone */}
              <a
                href="tel:+919843009279"
                className="relative h-12 w-12 rounded-full bg-zinc-900/40 border border-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 group hover:border-emerald-500/30 hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                aria-label="Call Me"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter blur-md bg-emerald-500/10 pointer-events-none" />
                <Phone className="h-4.5 w-4.5 text-emerald-400/80 group-hover:text-emerald-400 group-hover:scale-105 transition-all" />
              </a>
            </div>
          </div>

        </div>

        {/* 3. Bottom Row: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/30 tracking-wider uppercase gap-4">
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
