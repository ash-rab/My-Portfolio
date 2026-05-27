"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface StoryOverlayProps {
  scrollYProgress: MotionValue<number>;
}

export function StoryOverlay({ scrollYProgress }: StoryOverlayProps) {
  // Define opacity blocks for the 4 sections
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2, 0.25], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.5], [50, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.5, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], [50, -50]);

  const opacity4 = useTransform(scrollYProgress, [0.75, 0.8, 0.9, 0.95], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.75, 0.95], [50, -50]);

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none w-full h-full max-w-7xl mx-auto md:px-12 px-6">
      {/* Section 1: Left */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute left-6 md:left-12 top-[40%] flex flex-col items-start justify-center text-left"
      >
        <h1
          style={{ fontFamily: 'var(--font-name)' }}
          className="text-5xl md:text-7xl font-extrabold uppercase tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-emerald-400 mb-4 filter drop-shadow-[0_0_30px_rgba(52,211,153,0.3)] pb-2"
        >
          AAKASH K
        </h1>
        <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl drop-shadow-md">
          MBA Finance | Future Investment Banking Professional
        </p>
      </motion.div>

      {/* Section 2: Right */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute right-6 md:right-12 top-[45%] flex flex-col items-end justify-center text-right max-w-xl md:max-w-2xl"
      >
        <p className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight drop-shadow-xl">
          I analyze businesses, financial performance, and capital markets.
        </p>
      </motion.div>

      {/* Section 3: Right */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute right-6 md:right-12 top-[45%] flex flex-col items-end justify-center text-right max-w-xl md:max-w-2xl"
      >
        <p className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight drop-shadow-xl">
          Interested in valuation, M&A strategy, and investment decision-making.
        </p>
      </motion.div>

      {/* Section 4: Bottom/Center */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-x-0 bottom-[15%] md:bottom-[20%] flex flex-col items-center justify-center text-center px-4"
      >
        <p className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
          Turning data into strategic financial insights.
        </p>
        <div className="w-24 h-1 bg-blue-500 rounded-full" />
      </motion.div>
    </div>
  );
}
