"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  GraduationCap,
  LineChart,
  User,
  CheckCircle,
  Calendar,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface Skill {
  name: string;
  desc: string;
  icon: React.ReactNode;
  level: string;
  glowColor: string;
}

interface Milestone {
  title: string;
  sub: string;
  year: string;
  desc: string;
}

export function AboutSkillsAchievements() {
  const [profileRotateX, setProfileRotateX] = useState(0);
  const [profileRotateY, setProfileRotateY] = useState(0);
  const [profileHovered, setProfileHovered] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    {
      name: "Financial Analysis",
      desc: "Analyzing corporate financial trajectories, ROI gaps, and long-term capital allocation.",
      icon: <LineChart className="w-5 h-5 text-blue-400" />,
      level: "Advanced",
      glowColor: "rgba(59, 130, 246, 0.15)"
    },
    {
      name: "Valuation (DCF & CCA)",
      desc: "Discounted Cash Flow modeling, Comparable Company Analysis, and WACC calculations.",
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      level: "Intermediate",
      glowColor: "rgba(245, 158, 11, 0.15)"
    },
    {
      name: "Capital Markets",
      desc: "Analyzing capital structure, risk premiums, and debt/equity issuance patterns.",
      icon: <Award className="w-5 h-5 text-purple-400" />,
      level: "Intermediate",
      glowColor: "rgba(168, 85, 247, 0.15)"
    },
    {
      name: "Excel & Modeling",
      desc: "Advanced spreadsheet formulas, multi-scenario planning, and dynamic financial forecasts.",
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      level: "Advanced",
      glowColor: "rgba(16, 185, 129, 0.15)"
    },
    {
      name: "Tableau Analytics",
      desc: "Interactive dashboard engineering, real-time KPI metrics, and operational visualization.",
      icon: <User className="w-5 h-5 text-pink-400" />,
      level: "Advanced",
      glowColor: "rgba(236, 72, 153, 0.15)"
    },
    {
      name: "Python (Basics)",
      desc: "Quantitative data prep, descriptive statistics, and basic financial automation scripts.",
      icon: <GraduationCap className="w-5 h-5 text-teal-400" />,
      level: "Novice",
      glowColor: "rgba(20, 184, 166, 0.15)"
    }
  ];

  const achievements: Milestone[] = [
    {
      title: "Silver Medalist",
      sub: "Undergraduate Program",
      year: "2024",
      desc: "Awarded for outstanding academic achievement and rank in the Bank Management department."
    },
    {
      title: "Gold Medalist",
      sub: "National Finance & Business Quiz",
      year: "2024",
      desc: "Ranked 1st place out of 100+ competing teams in strategic business quiz challenges."
    },
    {
      title: "Bronze Medalist",
      sub: "Inter-Collegiate Debate",
      year: "2023",
      desc: "Placed 3rd in collegiate debates on global macroeconomic and monetary policies."
    }
  ];

  const leadership: Milestone[] = [
    {
      title: "Department Council President",
      sub: "CMS Student Council",
      year: "2024",
      desc: "Elected to lead administrative student coordination, organizing major events and industry seminars."
    },
    {
      title: "Class Representative",
      sub: "MBA Finance Cohort",
      year: "2023",
      desc: "Served as main liaison between professors and students to streamline curriculum delivery."
    },
    {
      title: "Event Head",
      sub: "Finance Fest 'Finest'",
      year: "23 - 24",
      desc: "Directed operations and budgeting for national undergraduate and graduate level symposia."
    }
  ];

  const handleProfileMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!profileRef.current) return;
    const rect = profileRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPos = mouseX / width - 0.5;
    const yPos = mouseY / height - 0.5;

    // Subtle 3D tilt (max 6 degrees)
    setProfileRotateX(-yPos * 6);
    setProfileRotateY(xPos * 6);
  };

  const handleProfileMouseLeave = () => {
    setProfileHovered(false);
    setProfileRotateX(0);
    setProfileRotateY(0);
  };

  const introText =
    "**MBA** **Finance** **&** **Business** **Analytics** candidate (CMS Business School, 2025) with a B.Com in Bank Management. Hands-on experience analyzing **70-year** **financial** **trajectories**, ROI gaps, and capital allocation patterns across a $30B+ media franchise (Marvel Studios). Skilled in financial modeling, equity valuation, and data-driven storytelling using Excel and Tableau. Seeking to leverage quantitative rigor and investment/credit analytical skills as a **Credit** **Risk** **Analyst** or **Equity** **Research** **Associate** at a leading BFSI or Big 4 firm.";

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto relative z-20 bg-transparent flex flex-col gap-28">
      
      {/* 1. Cinematic Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Profile Image with 3D Tilt & Volumetric Glow (Left col-span-5) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center lg:justify-start"
        >
          <div className="relative w-fit">
            {/* Volumetric Studio Glow behind the profile picture */}
            <div
              className="absolute rounded-full filter blur-[100px] pointer-events-none transition-all duration-700 mix-blend-screen"
              style={{
                width: "360px",
                height: "360px",
                background: "radial-gradient(circle, rgba(235,160,80,0.22) 0%, transparent 70%)",
                top: "-20px",
                left: "-20px",
                transform: profileHovered ? "scale(1.15)" : "scale(1.0)",
                opacity: profileHovered ? 0.95 : 0.7
              }}
            />

            <div
              ref={profileRef}
              onMouseMove={handleProfileMouseMove}
              onMouseEnter={() => setProfileHovered(true)}
              onMouseLeave={handleProfileMouseLeave}
              style={{
                transform: `rotateX(${profileRotateX}deg) rotateY(${profileRotateY}deg) translateZ(0)`,
                transformStyle: "preserve-3d",
                transition: profileHovered ? "transform 0.05s ease-out" : "transform 0.6s ease",
                willChange: "transform"
              }}
              className="relative cursor-pointer w-[280px] h-[380px] md:w-[320px] md:h-[430px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-zinc-950/40 backdrop-blur-md group"
            >
              {/* Grayscale to Color Image */}
              <img
                src="/profile.png"
                alt="Aakash K Profile"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-[800ms] ease-out pointer-events-none"
                style={{
                  objectPosition: "center 20%",
                  filter: profileHovered 
                    ? "grayscale(0) contrast(1.08)"
                    : "grayscale(1) contrast(1.08)",
                  transform: "translate3d(0, 0, 0)",
                  willChange: "filter"
                }}
              />

              {/* Inner Glass Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-white/5 opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none transition-colors duration-500 group-hover:border-amber-500/20" />
              
              {/* Subtle name badge floating at bottom */}
              <div className="absolute bottom-6 left-6 right-6 z-10 p-4 rounded-xl bg-black/40 border border-white/5 backdrop-blur-md translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] tracking-wider uppercase font-semibold text-amber-400 block mb-0.5">
                  MBA Candidate 2025
                </span>
                <h4 className="text-sm font-semibold text-white font-name tracking-wide">
                  Aakash K
                </h4>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Storytelling Reveal (Right col-span-7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-white/40 block">
              The Professional Narrative
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-finance text-white">
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-amber-500/30 rounded-full" />
          </div>

          <WordReveal text={introText} />

          <div className="pt-4 flex flex-wrap gap-4 items-center text-xs text-white/50">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-amber-500/70" /> Quantitative Rigor
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-amber-500/70" /> Credit Assessment
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-amber-500/70" /> Investment Analytics
            </span>
          </div>
        </div>

      </div>

      {/* 2. Floating Oscillating Skills cards */}
      <div className="space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-white/40 block">
            Analytical Toolkit
          </span>
          <h3 className="text-3xl font-bold font-finance text-white">
            Core Competencies
          </h3>
          <div className="w-12 h-0.5 bg-amber-500/30 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <FloatingCard key={idx} skill={skill} index={idx} />
          ))}
        </div>
      </div>

      {/* 3. Milestone Chronological Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Achievements Timeline */}
        <div className="space-y-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-amber-500/5 border border-amber-500/10 text-amber-400">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-finance tracking-wide">
                Key Achievements
              </h3>
              <span className="text-[10px] text-white/40 uppercase tracking-widest">
                Academic & Quiz Honors
              </span>
            </div>
          </div>

          <div className="relative pl-6 border-l border-white/10 space-y-8">
            {achievements.map((item, idx) => (
              <TimelineItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>

        {/* Leadership Timeline */}
        <div className="space-y-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-500/5 border border-purple-500/10 text-purple-400">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-finance tracking-wide">
                Leadership Roles
              </h3>
              <span className="text-[10px] text-white/40 uppercase tracking-widest">
                Governance & Event Direction
              </span>
            </div>
          </div>

          <div className="relative pl-6 border-l border-white/10 space-y-8">
            {leadership.map((item, idx) => (
              <TimelineItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

/* Word-by-word reveal text component */
function WordReveal({ text }: { text: string }) {
  const words = text.split(" ");

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012
      }
    }
  };

  const wordVariants: any = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="text-base md:text-lg leading-relaxed text-zinc-400 font-light"
    >
      {words.map((word, i) => {
        const isBold = word.startsWith("**") && word.endsWith("**");
        const cleanWord = word.replace(/\*\*/g, "");
        return (
          <motion.span
            key={i}
            variants={wordVariants}
            className={`inline-block mr-1.5 ${
              isBold
                ? "text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                : "text-zinc-400 font-light"
            }`}
          >
            {cleanWord}
          </motion.span>
        );
      })}
    </motion.p>
  );
}

/* Floating Card with Oscillation and custom lighting */
function FloatingCard({ skill, index }: { skill: Skill; index: number }) {
  const [hovered, setHovered] = useState(false);
  
  // Custom height oscillation offsets for staggered float
  const yOscillation = [0, -6 - (index % 3) * 2, 0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="w-full h-full"
    >
      <motion.div
        animate={
          hovered
            ? { y: 0 }
            : {
                y: yOscillation
              }
        }
        transition={{
          y: {
            duration: 3 + (index % 2) * 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group rounded-2xl border border-white/5 bg-zinc-900/10 backdrop-blur-xl p-6 flex flex-col justify-between h-[180px] transition-all duration-300 hover:border-white/10 hover:-translate-y-1 select-none"
      >
        {/* Background Spotlight Radial Glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(circle 120px at center, ${skill.glowColor}, transparent 80%)`
          }}
        />

        <div className="relative z-10 space-y-4">
          {/* Icon & Index Row */}
          <div className="flex items-center justify-between">
            <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              {skill.icon}
            </div>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest font-semibold">
              0{index + 1}
            </span>
          </div>

          {/* Info */}
          <div className="space-y-1.5">
            <h4 className="text-base font-bold text-white tracking-wide">
              {skill.name}
            </h4>
            <p className="text-white/50 text-[11px] font-light leading-relaxed">
              {skill.desc}
            </p>
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-center text-[9px] uppercase tracking-wider text-white/40 pt-2 border-t border-white/5">
          <span>Level</span>
          <span className="font-semibold text-white/80">{skill.level}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* Timeline/Milestone Item Component */
function TimelineItem({ item, index }: { item: Milestone; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-4 group"
    >
      {/* Glowing timeline node */}
      <div className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-800 border-2 border-white/30 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.1)]" />

      {/* Content wrapper */}
      <div className="space-y-2 p-5 rounded-2xl border border-white/[0.02] bg-white/[0.01] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.02] hover:border-white/5">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
              {item.title}
            </h4>
            <span className="text-[10px] text-white/50 block">
              {item.sub}
            </span>
          </div>
          <span className="px-2 py-0.5 bg-white/5 text-white/60 border border-white/5 text-[9px] font-semibold rounded font-mono">
            {item.year}
          </span>
        </div>
        <p className="text-white/60 text-[11px] leading-relaxed font-light">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}
