"use client";

import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-transparent pt-24 pb-12 overflow-hidden z-20">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
        >
          Let’s connect and build impactful{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            financial strategies.
          </span>
        </motion.h2>

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 mt-12 mb-8">
          {/* Email Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href="mailto:aakash302003@gmail.com"
            className="group relative flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-white/70 transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
          >
            <Mail className="h-5 w-5 text-red-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>Email Me</span>
          </motion.a>

          {/* Phone Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="tel:+919843009279"
            className="group relative flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-white/70 transition-all duration-300 hover:border-green-500/50 hover:bg-green-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          >
            <Phone className="h-5 w-5 text-green-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>Call Me</span>
          </motion.a>

          {/* LinkedIn Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="https://www.linkedin.com/in/k-aakash-5a177b24a"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-white/70 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            <LinkedinIcon className="h-5 w-5 text-blue-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>Connect on LinkedIn</span>
          </motion.a>
        </div>

        <div className="mt-24 text-sm text-white/40">
          © {new Date().getFullYear()} Aakash K. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
