"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, LineChart, PieChart } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Marvel Financial Evolution",
      description: "Comprehensive analysis of Disney's Marvel acquisition, ROI tracking, and post-merger integration impact on group profitability.",
      icon: <LineChart className="w-6 h-6 text-blue-400" />,
      tags: ["M&A Strategy", "ROI Analysis", "Financial Modeling"],
      link: "Marvel Project.docx"
    },
    {
      title: "Financial Dashboard",
      description: "Interactive real-time financial tracking dashboard utilizing key performance indicators to manage operational expenditure.",
      icon: <PieChart className="w-6 h-6 text-purple-400" />,
      tags: ["Tableau", "KPI Tracking", "Data Visualization"],
      link: "/projects/DVTP%20CA2.twb"
    },
    {
      title: "Valuation Analysis",
      description: "Detailed DCF and Comparable Company Analysis for leading tech firms determining intrinsic enterprise value.",
      icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
      tags: ["DCF", "Comps", "Equity Research"],
      link: "/projects/IPS_Portfolio_MorganStanley.xlsx"
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-20 bg-transparent">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Strategic Projects</h2>
        <div className="w-20 h-1 bg-white/20 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all hover:bg-white/[0.04] hover:border-white/20"
          >
            {/* Soft Glow Behind Card */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 mix-blend-overlay transition duration-500 group-hover:opacity-100" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                {project.icon}
              </div>
              
              <h3 className="mb-3 text-2xl font-semibold text-white group-hover:text-blue-200 transition-colors">
                {project.title}
              </h3>
              
              <p className="mb-8 flex-grow text-white/60 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 text-white/70 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto flex items-center text-sm font-medium text-white/80 transition-colors group-hover:text-white cursor-pointer w-max group/btn">
                <span>View Case Study</span>
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
