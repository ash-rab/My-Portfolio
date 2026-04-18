"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { AudioPlayer } from "@/components/AudioPlayer";

export function Navbar() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(18, 18, 18, 0)", "rgba(18, 18, 18, 0.8)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  return (
    <motion.nav
      style={{ background, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300"
    >
      <div 
        style={{ fontFamily: 'var(--font-finance)' }}
        className="text-xl font-medium uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-400"
      >
      <span className="text-emerald-400/50"></span>
      </div>

      <div className="flex items-center gap-4">
        <AudioPlayer />
        
        <a
          href="https://www.linkedin.com/in/k-aakash-5a177b24a"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
          title="Connect on LinkedIn"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <LinkedinIcon className="h-4 w-4 transition-transform group-hover:scale-110 group-hover:text-blue-400" />
          <span className="relative z-10 flex items-center">
            <span className="border-b border-transparent transition-colors duration-300 group-hover:border-blue-400/50">
              Connect
            </span>
          </span>
        </a>
      </div>
    </motion.nav>
  );
}
