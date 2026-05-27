"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  LineChart,
  PieChart,
  X,
  Download,
  Briefcase,
  Clock,
  FileText,
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  role: string;
  timeline: string;
  tools: string[];
  deliverable: string;
  impact: string[];
  challenge: string;
  approach: string;
  methodology: string;
  thumbnail: string;
  tags: string[];
  link: string;
  color: string;
  accentColor: string;
  glowColor: string;
  shadowColor: string;
  category: string;
  icon: React.ReactNode;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Marvel Financial Evolution",
      category: "M&A & STRATEGIC ADVISORY",
      description: "Comprehensive analysis of Disney's Marvel acquisition, ROI tracking, and post-merger integration impact on group profitability.",
      longDescription: "A deep dive M&A post-acquisition analysis tracking Disney's ROI, character licensing ecosystem leverage, and intellectual property synergy.",
      role: "Corporate M&A Advisory Analyst",
      timeline: "Spring 2024",
      tools: ["Financial Modeling", "Valuation Analysis", "M&A Integration Strategy", "Scenario Planning"],
      deliverable: "M&A Post-Merger Review Document (.docx)",
      challenge: "Disney's $4.0 billion acquisition of Marvel Entertainment in 2009 was initially met with substantial market skepticism. The mandate was to evaluate the historical financial performance of the acquisition retrospectively, quantify the actualized return on investment (ROI), and construct a dynamic valuation model of character licensing ecosystem synergies to determine if the premium paid was justified.",
      approach: "Conducted historical cash flow extraction across box office revenues, home entertainment, and consumer products licensing. Modeled franchise-level profitability curves and constructed a multi-scenario synergy integration framework to separate organic growth from Marvel-specific synergies. Benchmarked performance against cost of capital (WACC) to evaluate Economic Value Added (EVA).",
      methodology: "Engineered multi-stage discounted cash flow models, calculated post-merger enterprise value appreciation, conducted Character Synergy Multiplier (CSM) analysis, and executed sensitivity analysis based on box office multipliers and global streaming distribution margins.",
      impact: [
        "Demonstrated an annualized internal rate of return (IRR) exceeding 25.4% over a 15-year period, substantially outperforming Disney's hurdle rate.",
        "Quantified character licensing synergies showing that non-box-office channels (merchandise, theme parks) multiplied cinema revenues by a factor of 3.2x.",
        "Created a robust M&A post-evaluation template that can be utilized to stress-test future IP-driven corporate acquisitions."
      ],
      thumbnail: "/marvel_thumbnail.png",
      tags: ["M&A Strategy", "ROI Analysis", "Financial Modeling"],
      link: "/projects/Marvel_Authenticated_Data_Report.docx",
      color: "from-red-600/20 via-orange-600/10 to-transparent",
      accentColor: "text-red-400",
      glowColor: "rgba(239, 68, 68, 0.15)",
      shadowColor: "shadow-red-500/10",
      icon: <LineChart className="w-6 h-6 text-red-400" />
    },
    {
      title: "Financial Dashboard",
      category: "DATA VISUALIZATION & FP&A",
      description: "Interactive real-time financial tracking dashboard utilizing key performance indicators to manage operational expenditure.",
      longDescription: "Interactive, corporate-level Tableau dashboard consolidating multi-departmental operational expenditure, budget tracking, and real-time forecast-vs-actual analytics.",
      role: "FP&A Consultant",
      timeline: "Winter 2024",
      tools: ["Tableau Desktop", "Advanced Data Prep", "KPI Metrics", "SQL"],
      deliverable: "Interactive Tableau File (.twb)",
      challenge: "A division with multiple global entities struggled with fragmented spreadsheet reporting, causing delayed visibility into operational expenditures. Senior executives experienced 30+ day latency in identifying budget variances, leading to cost overruns and misallocated capital resources.",
      approach: "Aggregated financial data streams from multiple regional ERPs. Standardized chart of accounts and designed a double-entry validation layer. Created an executive KPI summary layout focused on budget variances, burn rates, and dynamic rolling forecasts, allowing interactive drill-downs into specific department categories.",
      methodology: "Calculated fields for dynamic year-to-date (YTD) comparisons, LOD expressions in Tableau for cross-filtering across entities without double counting, and dynamic color-coded alerting thresholds for variance analysis.",
      impact: [
        "Eliminated 30-day reporting delays, enabling automated weekly updates and saving over 40 hours of manual data preparation per cycle.",
        "Enabled department heads to identify and correct dynamic budget overruns within 48 hours, reducing end-of-quarter variance by 18%.",
        "Provided visual clarity that highlighted $120k in duplicate software licensing contracts during initial data integration."
      ],
      thumbnail: "/dashboard_thumbnail.png",
      tags: ["Tableau", "KPI Tracking", "Data Visualization"],
      link: "/projects/DVTP%20CA2.twb",
      color: "from-blue-600/20 via-indigo-600/10 to-transparent",
      accentColor: "text-blue-400",
      glowColor: "rgba(59, 130, 246, 0.15)",
      shadowColor: "shadow-blue-500/10",
      icon: <PieChart className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Valuation Analysis",
      category: "EQUITY RESEARCH & VALUATION",
      description: "Detailed DCF and Comparable Company Analysis for leading tech firms determining intrinsic enterprise value.",
      longDescription: "Comprehensive equity research valuation model including Discounted Cash Flow (DCF), Comparable Company Analysis (CCA), WACC calculations, and valuation sensitivity matrices.",
      role: "Equity Research & Valuation Analyst",
      timeline: "Fall 2024",
      tools: ["Financial Modeling", "Valuation (DCF & CCA)", "WACC Estimation", "Excel Engineering"],
      deliverable: "Valuation Financial Model (.xlsx)",
      challenge: "Evaluating the intrinsic value of target companies in the highly volatile technology sector for potential investment portfolios. Traditional models failed to capture rapid shift in subscription retention rates and variable capital expenditures, leading to highly inaccurate pricing recommendations.",
      approach: "Engineered a granular, bottom-up revenue model forecasting subscriber growth, ARPU, and churn. Modeled multi-period operating cash flows, computed target company WACC using CAPM and bottoms-up unlevered betas, and performed Comparable Company Analysis (CCA) using EV/Revenue, EV/EBITDA, and P/E multiples.",
      methodology: "Built dynamic three-statement integration, constructed multi-stage unlevered free cash flow projections, built enterprise-to-equity value bridge, and implemented a 2-way sensitivity analysis table mapping WACC vs. terminal growth rate.",
      impact: [
        "Constructed a fully dynamic valuation range indicating a 15% discount to current market pricing on the target asset, prompting a 'Buy' recommendation.",
        "Designed sensitivity tables that stress-tested the model against a 200bps increase in risk-free rates, proving the asset's structural resilience.",
        "Delivered a presentation-ready investment pitch deck and model reviewed and praised by industry professionals at Morgan Stanley."
      ],
      thumbnail: "/valuation_thumbnail.png",
      tags: ["DCF Analysis", "Comparable Analysis", "Equity Research"],
      link: "/projects/IPS_Portfolio_MorganStanley.xlsx",
      color: "from-emerald-600/20 via-teal-600/10 to-transparent",
      accentColor: "text-emerald-400",
      glowColor: "rgba(16, 185, 129, 0.15)",
      shadowColor: "shadow-emerald-500/10",
      icon: <BarChart3 className="w-6 h-6 text-emerald-400" />
    }
  ];

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative z-20 bg-transparent">
      {/* Header */}
      <div className="mb-20">
        <span className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-2 block">
          Cinematic Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-finance text-white mb-6">
          Featured Case Studies
        </h2>
        <div className="w-20 h-1 bg-white/20 rounded-full" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <InteractiveCard
            key={idx}
            project={project}
            index={idx}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Cinematic Modal Expansion */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* 3D Tilt Card Wrapper Component */
function InteractiveCard({
  project,
  index,
  onClick
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(0);
  const [glowY, setGlowY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPos = mouseX / width - 0.5;
    const yPos = mouseY / height - 0.5;

    // Apply tilt (max 8 degrees for smooth response)
    setRotateX(-yPos * 8);
    setRotateY(xPos * 8);

    // Apply glow center coordinates in percentage
    setGlowX((mouseX / width) * 100);
    setGlowY((mouseY / height) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{ perspective: 1000 }}
      className="w-full h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: isHovered ? "transform 0.05s ease-out" : "transform 0.5s ease"
        }}
        className={`group cursor-pointer relative h-[420px] rounded-2xl border border-white/10 bg-zinc-900/30 backdrop-blur-xl overflow-hidden flex flex-col justify-between select-none transition-shadow duration-300 hover:border-white/20 hover:shadow-2xl ${project.shadowColor}`}
      >
        {/* Cinematic Mouse Spotlight Glow */}
        <div
          style={{
            background: isHovered
              ? `radial-gradient(circle 220px at ${glowX}% ${glowY}%, ${project.glowColor}, transparent 80%)`
              : "none",
            transition: "opacity 0.2s ease"
          }}
          className="absolute inset-0 opacity-100 pointer-events-none z-10"
        />

        {/* Outer Background Soft Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

        {/* Card Content Core */}
        <div className="relative flex flex-col h-full z-10">
          {/* Movie Thumbnail Container */}
          <div className="relative w-full h-[180px] overflow-hidden bg-black/40">
            {/* Dark Overlay over Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
            
            {/* Image Zoom Effect */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: isHovered ? "scale(1.08)" : "scale(1.0)",
                transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
              }}
            />

            {/* Custom Icon badge */}
            <div className="absolute top-4 left-4 z-20 h-10 w-10 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 backdrop-blur-md">
              {project.icon}
            </div>
          </div>

          {/* Texts & Info Area */}
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-white/40 mb-1.5 block">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300 mb-2 leading-tight">
                {project.title}
              </h3>
              <p className="text-white/60 text-xs leading-relaxed font-light line-clamp-3 mb-4">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-medium bg-white/5 text-white/70 rounded-full border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Action Call */}
              <div className="flex items-center text-xs font-semibold text-white/80 group-hover:text-white transition-colors pt-2 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  Explore Case Study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* Fullscreen Immersive Modal Component */
function CaseStudyModal({
  project,
  onClose
}: {
  project: Project;
  onClose: () => void;
}) {
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Close when hitting Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
    >
      {/* Ambient background glow circle */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full filter blur-[150px] opacity-25 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${project.glowColor.replace("0.15", "0.6")} 0%, transparent 70%)`,
          top: "10%",
          left: "20%"
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full filter blur-[150px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          bottom: "10%",
          right: "15%"
        }}
      />

      <motion.div
        ref={modalContentRef}
        initial={{ opacity: 0, scale: 0.93, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 30 }}
        transition={{ type: "spring", damping: 30, stiffness: 300, duration: 0.4 }}
        className="relative w-full max-w-5xl bg-[#0b0b0d] rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black z-10 flex flex-col my-8"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 bg-black/70 hover:bg-black/90 text-white/80 hover:text-white hover:scale-110 p-3 rounded-full border border-white/10 backdrop-blur-md transition-all cursor-pointer shadow-lg"
          aria-label="Close Case Study"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Scroll Wrapper */}
        <div className="overflow-y-auto max-h-[85vh]">
          {/* Wide Netflix Hero Banner */}
          <div className="relative w-full h-[260px] md:h-[380px] bg-black">
            {/* Cinematic Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.thumbnail})`,
                backgroundPosition: "center 40%"
              }}
            />
            {/* Heavy bottom and side gradients to dissolve card edge */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0d]/80 via-transparent to-[#0b0b0d]/30" />

            {/* Bottom-left overlay details */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-bold text-white/60 mb-2 block">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-finance text-white mb-4 leading-tight tracking-tight drop-shadow-md">
                {project.title}
              </h1>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-light drop-shadow">
                {project.longDescription}
              </p>
            </div>
          </div>

          {/* Detailed Content Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-10 bg-[#0b0b0d]">
            
            {/* Left/Main Column - Narrative */}
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge */}
              <section className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70">
                    <Briefcase className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-wide">
                    The Business Challenge
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed font-light pl-10">
                  {project.challenge}
                </p>
              </section>

              {/* Approach */}
              <section className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70">
                    <FileText className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-wide">
                    Analytical Approach
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed font-light pl-10">
                  {project.approach}
                </p>
              </section>

              {/* Methodology */}
              <section className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70">
                    <BarChart3 className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-wide">
                    Methodology & Financial Modeling
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed font-light pl-10">
                  {project.methodology}
                </p>
              </section>
            </div>

            {/* Right/Sidebar Column - Project Meta & Impact */}
            <div className="space-y-6">
              {/* Quick Details Card */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-5 backdrop-blur-xl">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-white/40 pb-3 border-b border-white/5">
                  Project Specs
                </h4>
                
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-white/40 block mb-0.5">Role</span>
                    <span className="text-white/80 font-medium">{project.role}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block mb-0.5">Timeline</span>
                    <span className="text-white/80 font-medium">{project.timeline}</span>
                  </div>
                </div>

                <div className="text-xs space-y-1.5">
                  <span className="text-white/40 block mb-1">Key Tools</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map(tool => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 bg-white/5 text-white/70 rounded border border-white/5 text-[10px]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs pt-1">
                  <span className="text-white/40 block mb-1">Target Deliverable</span>
                  <span className="text-white/80 font-medium block bg-black/30 px-3 py-2 rounded-lg border border-white/5 truncate">
                    {project.deliverable}
                  </span>
                </div>
              </div>

              {/* Business Impact Card */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4 backdrop-blur-xl">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-white/40">
                  Key Results & Business Impact
                </h4>
                <ul className="space-y-3.5">
                  {project.impact.map((imp, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs">
                      <CheckCircle className="h-4.5 w-4.5 text-white shrink-0 mt-0.5 opacity-80" />
                      <span className="text-white/75 leading-relaxed font-light">
                        {imp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Deliverable CTA */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 hover:scale-[1.01] active:scale-98 transition-all font-semibold shadow-lg shadow-white/5 cursor-pointer text-sm"
              >
                <Download className="h-4.5 w-4.5" />
                Download Project Model
              </a>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
