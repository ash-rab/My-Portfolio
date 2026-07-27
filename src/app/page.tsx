"use client";

import { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { StoryOverlay } from "@/components/StoryOverlay";
import { Projects } from "@/components/Projects";
import { AboutSkillsAchievements } from "@/components/AboutSkillsAchievements";
import { Footer } from "@/components/Footer";
import { PremiumEffects } from "@/components/PremiumEffects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 120Hz ProMotion Spring Interpolation
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.0001
  });

  return (
    <main className="relative min-h-screen bg-[#121212]">
      <PremiumEffects />
      <Navbar />
      
      {/* 500vh Scrolly section */}
      <div ref={containerRef} className="relative h-[500vh]">
        {/* Sticky wrapper that stays in view while scrolling through the 500vh container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black transform-gpu will-change-transform">
          <ScrollyCanvas scrollYProgress={smoothScrollYProgress} />
          <StoryOverlay scrollYProgress={smoothScrollYProgress} />
        </div>
      </div>

      {/* Subsequent sections below the scrolly section */}
      <div className="relative z-20 bg-[#121212] overflow-hidden">
        {/* Finance Background strictly scoped to lower sections */}
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
          style={{
            backgroundImage: "url('/finance_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="relative z-10 bg-transparent">
          <AboutSkillsAchievements />
          <Projects />
          <Footer />
        </div>
      </div>
    </main>
  );
}
