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
    <div className="absolute inset-0 z-10 pointer-events-none w-full h-full">
      {/* Section 1: Top-Left */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute left-4 sm:left-6 md:left-8 top-[14%] sm:top-[16%] md:top-[18%] flex flex-col items-start justify-center text-left max-w-[260px] sm:max-w-xs md:max-w-sm lg:max-w-md"
      >
        <h1
          style={{
            fontFamily: 'var(--font-name)',
            background: 'linear-gradient(90deg, hsla(287, 22%, 70%, 1) 0%, hsla(191, 55%, 31%, 1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.12em] mb-2 filter drop-shadow-[0_0_25px_rgba(36,107,123,0.4)] pb-1 leading-tight"
        >
          AAKASH K
        </h1>
        <p
          style={{
            background: 'linear-gradient(90deg, hsla(287, 22%, 70%, 1) 0%, hsla(191, 55%, 31%, 1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide filter drop-shadow-[0_0_15px_rgba(36,107,123,0.3)] leading-snug"
        >
          MBA Finance | Future Investment Banking Professional
        </p>
      </motion.div>

      {/* Section 2: Right */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute right-4 sm:right-8 md:right-12 top-[45%] flex flex-col items-end justify-center text-right max-w-xl md:max-w-2xl"
      >
        <p className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight drop-shadow-xl">
          I analyze businesses, financial performance, and capital markets.
        </p>
      </motion.div>

      {/* Section 3: Right */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute right-4 sm:right-8 md:right-12 top-[45%] flex flex-col items-end justify-center text-right max-w-xl md:max-w-2xl"
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
