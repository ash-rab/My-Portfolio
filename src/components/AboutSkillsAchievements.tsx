"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, LineChart, User } from "lucide-react";

export function AboutSkillsAchievements() {
  const skills = [
    "Financial Analysis",
    "Valuation (DCF, Comparable Analysis)",
    "Capital Markets",
    "Excel & Financial Modeling",
    "Tableau",
    "Python (Basics)"
  ];

  const achievements = [
    "Silver Medalist – Undergraduate Program-2024",
    "Gold Medalist – Quiz Competition-2024",
    "Bronze Medalist – Debate Competition-2023"
  ];

  const leadership = [
    "Department Council President-2024",
    "Class Representative-2023",
    "Event Head-2023 & 2024"
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative z-20 flex flex-col gap-12 bg-transparent">
      
      {/* 1. About Me */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="group relative rounded-3xl border border-blue-500/20 bg-blue-500/[0.03] p-8 md:p-12 backdrop-blur-xl transition-all hover:bg-blue-500/[0.05] hover:border-blue-500/30 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform group-hover:scale-110 transition-transform duration-700">
          <User className="w-40 h-40 text-blue-400" />
        </div>
        
        <motion.div variants={fadeUp} className="relative z-10 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
            <User className="text-blue-400 w-8 h-8" /> About Me
          </h2>
        </motion.div>
        
        <motion.p variants={fadeUp} className="relative z-10 text-xl leading-relaxed text-blue-50/70 font-light max-w-3xl">
          <span className="text-white font-medium">MBA Finance student</span> with a strong foundation in financial analysis, valuation, and capital markets. Passionate about strategic decision-making, M&A analysis, and portfolio management.
        </motion.p>
      </motion.div>

      {/* 2. Key Achievements */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="group relative rounded-3xl border border-purple-500/20 bg-purple-500/[0.03] p-8 md:p-12 backdrop-blur-xl transition-all hover:bg-purple-500/[0.05] hover:border-purple-500/30 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform group-hover:scale-110 transition-transform duration-700">
          <Award className="w-40 h-40 text-purple-400" />
        </div>
        
        <motion.div variants={fadeUp} className="relative z-10 mb-8">
          <h3 className="text-3xl font-bold text-white flex items-center gap-4">
            <Award className="text-purple-400 w-8 h-8" /> Key Achievements
          </h3>
        </motion.div>
        
        <ul className="relative z-10 space-y-4">
          {achievements.map((item, i) => (
            <motion.li key={i} variants={fadeUp} className="flex items-start gap-4 text-purple-50/80 text-lg">
              <div className="mt-2 h-2 w-2 rounded-full bg-purple-500 shrink-0" />
              <span className="leading-snug">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* 3. Leadership Roles */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="group relative rounded-3xl border border-amber-500/20 bg-amber-500/[0.03] p-8 md:p-12 backdrop-blur-xl transition-all hover:bg-amber-500/[0.05] hover:border-amber-500/30 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform group-hover:scale-110 transition-transform duration-700">
          <GraduationCap className="w-40 h-40 text-amber-400" />
        </div>
        
        <motion.div variants={fadeUp} className="relative z-10 mb-8">
          <h3 className="text-3xl font-bold text-white flex items-center gap-4">
            <GraduationCap className="text-amber-400 w-8 h-8" /> Leadership Roles
          </h3>
        </motion.div>
        
        <ul className="relative z-10 space-y-4">
          {leadership.map((item, i) => (
            <motion.li key={i} variants={fadeUp} className="flex items-start gap-4 text-amber-50/80 text-lg">
              <div className="mt-2 h-2 w-2 rounded-full bg-amber-500 shrink-0" />
              <span className="leading-snug">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* 4. Core Competencies */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="group relative rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8 md:p-12 backdrop-blur-xl transition-all hover:bg-emerald-500/[0.05] hover:border-emerald-500/30 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform group-hover:scale-110 transition-transform duration-700">
          <Briefcase className="w-40 h-40 text-emerald-400" />
        </div>
        
        <motion.div variants={fadeUp} className="relative z-10 mb-8">
          <h3 className="text-3xl font-bold text-white flex items-center gap-4">
            <LineChart className="text-emerald-400 w-8 h-8" /> Core Competencies
          </h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {skills.map((skill, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              className="flex items-center gap-4 rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4 transition-colors hover:bg-emerald-500/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 font-mono text-sm font-semibold text-emerald-500/70">
                0{i + 1}
              </div>
              <div className="text-lg font-medium text-emerald-50/90">
                {skill}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
