"use client";

import React, { useState, useMemo } from "react";
import {
  FileText,
  TrendingUp,
  PieChart,
  AlertTriangle,
  CheckCircle,
  Sliders,
  Filter,
  Globe,
  Smartphone,
  Monitor,
  Table,
  Shield,
  Layers,
  BookOpen
} from "lucide-react";

// ==========================================
// 1. MARVEL CASE STUDY VIEWER (Word Document)
// ==========================================
export function MarvelViewer() {
  const [activeSection, setActiveSection] = useState("summary");

  const sections = [
    { id: "summary", label: "Executive Summary", icon: <Shield className="w-4 h-4" /> },
    { id: "intro", label: "Introduction & History", icon: <BookOpen className="w-4 h-4" /> },
    { id: "objectives", label: "Project Objectives", icon: <CheckCircle className="w-4 h-4" /> },
    { id: "problems", label: "Challenges & Headwinds", icon: <AlertTriangle className="w-4 h-4" /> },
    { id: "comics", label: "Stream 1: Comic Book Sales", icon: <FileText className="w-4 h-4" /> },
    { id: "movies", label: "Stream 2: Theatrical Box Office", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "ott", label: "Stream 3: Disney+ OTT Expansion", icon: <Layers className="w-4 h-4" /> },
    { id: "merch", label: "Stream 4: Global Merchandising", icon: <PieChart className="w-4 h-4" /> }
  ];

  return (
    <div className="flex flex-col md:flex-row h-[600px] border border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl">
      {/* Left Navigation Sidebar */}
      <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 bg-zinc-950/50 p-4 overflow-y-auto shrink-0">
        <div className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-4 px-2">
          Document Sections
        </div>
        <nav className="space-y-1">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-xs font-medium transition-all ${
                activeSection === sec.id
                  ? "bg-red-500/10 text-red-400 border border-red-500/20"
                  : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              {sec.icon}
              <span className="truncate">{sec.label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-8 p-3.5 bg-white/[0.02] border border-white/5 rounded-xl text-[10px] text-white/40 leading-relaxed">
          <span className="font-semibold text-white/60 block mb-1">View-Only Mode</span>
          This document is running in secure read-only mode. Content cannot be downloaded or exported.
        </div>
      </div>

      {/* Right Reading Panel */}
      <div className="flex-grow p-6 md:p-8 overflow-y-auto bg-zinc-900/10 text-white/80 leading-relaxed text-sm select-none">
        {activeSection === "summary" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white font-finance border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-500 rounded" />
              Executive Summary
            </h2>
            <p className="font-light">
              This project traces Marvel’s journey from being a niche comic book publisher to becoming a billion-dollar global entertainment brand, analysing its financial growth and revenue evolution. In their initial years, the primary source of income was from comic book sales and limited merchandise sales. Still, the financial crisis within the company led it to rethink its business model.
            </p>
            <p className="font-light">
              To create new revenue streams, Marvel started licensing their characters, but the real turning point came when its characters made their entry in the Marvel Cinematic Universe (MCU). Alongside films, Marvel widened its revenue streams through toys, merchandise, and video games. Also, Collaboration with theme parks and global distributors boosted its scale and visibility.
            </p>
            <p className="font-light">
              In 2009, Marvel was acquired by Disney, which gave financial strength, enabling high-budget, interconnected films to reshape the blockbuster culture in Hollywood. With the most consistent box-office hit, Marvel expanded its revenue streams across films, streaming, comics, merchandising, licensing and collaborations. The rise of Disney into Disney+ strengthened the overseas market of Marvel movies, which contributed significant revenue to the company. Due to strong brand penetration fuelled by global demand, Marvel has become a multimedia empire, which has also helped in building a global community.
            </p>
            <div className="mt-6 p-4 rounded-xl border border-red-500/10 bg-red-500/[0.02]">
              <span className="text-red-400 font-semibold text-xs uppercase tracking-wider block mb-1">Key Insight</span>
              <p className="text-xs text-white/70 font-light">
                The shift from a licensing model (low margin, low risk) to self-financed production (MCU) and subsequent Disney acquisition enabled Marvel to capture 100% of theatrical dividends, turning IP assets into an integrated consumer cash engine.
              </p>
            </div>
          </div>
        )}

        {activeSection === "intro" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white font-finance border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-500 rounded" />
              Introduction & Historical Journey
            </h2>
            <p className="font-light">
              Marvel was started in 1939 as Timely Comics by Martin Goodman, which later evolved into Marvel Comics. The 1940s were the Golden Age of Marvel, which introduced Captain America by Joe Simon & Jack Kirby. During World War II, comics sales peaked with Adolf Hitler being punched by Captain America, serving as morale boosters. However, superheroes lost popularity after World War II ended.
            </p>
            <p className="font-light">
              In 1960, Martin Goodman asked editor Stan Lee to create a team of Superheroes to compete with DC’s Justice League, leading to the Fantastic Four in 1961, initiating the Marvel Universe and the Silver Age.
            </p>
            <p className="font-light">
              Marvel enjoyed major success, but sales later crashed in the 1990s due to the collector bubble burst, failed distribution, and financial mismanagement, culminating in filing for Bankruptcy in 1996. Marvel survived by selling film licensing rights for key characters (e.g. Spider-Man to Sony, X-Men to Fox).
            </p>
            <p className="font-light">
              In 2008, Marvel self-financed Iron Man, kicking off the Marvel Cinematic Universe (MCU) and revolutionizing interconnected stories. This culminated in the landmark $4.0B acquisition by Disney in 2009.
            </p>
          </div>
        )}

        {activeSection === "objectives" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white font-finance border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-500 rounded" />
              Project Objectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] space-y-2">
                <span className="text-white font-semibold text-sm block">1. Financial Strengths</span>
                <p className="text-xs text-white/60 font-light">Determine Marvel&apos;s financial health, cash flow stability, and balance sheet resilience post-Disney integration.</p>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] space-y-2">
                <span className="text-white font-semibold text-sm block">2. Return on Investment (ROI)</span>
                <p className="text-xs text-white/60 font-light">Evaluate acquisition ROI, individual film profitability curves, and synergy valuation metrics.</p>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] space-y-2">
                <span className="text-white font-semibold text-sm block">3. Trend Patterns (1956-2025)</span>
                <p className="text-xs text-white/60 font-light">Understand historical cycles from comic book boom, collector bubble crash, bankruptcy survival, to digital growth.</p>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] space-y-2">
                <span className="text-white font-semibold text-sm block">4. Production Financing</span>
                <p className="text-xs text-white/60 font-light">Analyze corporate debt structures, pre-sale licensing agreements, and joint distribution finance schemes.</p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "problems" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white font-finance border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-500 rounded" />
              Strategic Challenges & Headwinds
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-red-500/10 text-red-400 mt-0.5">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white font-semibold text-sm block">Post-Endgame ROI Variance</span>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    Recent phase projects (specifically after Avengers: Endgame) have shown high cost inflation with volatile box office receipts, indicating diminishing marginal returns.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-red-500/10 text-red-400 mt-0.5">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white font-semibold text-sm block">Budget Inflation & Execution Risks</span>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    Production budgets exceeding $200M+ per film put massive pressure on global marketing campaigns, making profitability highly vulnerable to review multipliers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 rounded bg-red-500/10 text-red-400 mt-0.5">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white font-semibold text-sm block">Audience Attention Fragmentation</span>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    Over-saturation of content (9 titles released across movies & Disney+ series in 2021 alone) has led to fatigue, necessitating a shift back to quality-centric planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "comics" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white font-finance border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-500 rounded" />
              Stream 1: Comic Book Sales & Market Share
            </h2>
            <p className="font-light text-xs text-white/70">
              The foundational publishing business serves as the R&D and core IP engine. MCU film releases generate a massive &quot;Halo Effect&quot; on pre-orders and back-issue sales.
            </p>
            <div className="overflow-x-auto border border-white/5 rounded-xl">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-white/5 text-white/80 font-medium border-b border-white/10">
                    <th className="p-3">Year</th>
                    <th className="p-3">Estimated Revenue</th>
                    <th className="p-3">Context / Key Catalyst</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-light">
                  <tr>
                    <td className="p-3 text-white font-medium">2015</td>
                    <td className="p-3 text-red-400 font-medium">$335M</td>
                    <td className="p-3 text-white/60">Age of Ultron halo effect on tie-in comics</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2016</td>
                    <td className="p-3 text-red-400 font-medium">$400M</td>
                    <td className="p-3 text-white/60">Civil War drives Captain America: Steve Rogers sales</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2018</td>
                    <td className="p-3 text-red-400 font-medium">$414M</td>
                    <td className="p-3 text-white/60">Black Panther run surged 300% post-run</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2019</td>
                    <td className="p-3 text-red-400 font-medium">$443M</td>
                    <td className="p-3 text-white/60">Peak Marvel share; Endgame tie-in comics</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2021</td>
                    <td className="p-3 text-red-400 font-medium">$766M</td>
                    <td className="p-3 text-white/60">Industry record year - 62% YoY growth (digital surge)</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2023</td>
                    <td className="p-3 text-red-400 font-medium">$673M</td>
                    <td className="p-3 text-white/60">Down 7% from 2022, but +70% from 2019 baseline</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2024</td>
                    <td className="p-3 text-red-400 font-medium">$718M</td>
                    <td className="p-3 text-white/60">Up 4% YoY; market share climbs to 38.9%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeSection === "movies" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white font-finance border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-500 rounded" />
              Stream 2: Theatrical Box Office Revenue
            </h2>
            <p className="font-light text-xs text-white/70">
              The primary global brand driver. Since Disney&apos;s acquisition, Marvel Studios has generated over $31 Billion in worldwide box office receipts, scaling film distribution margins.
            </p>
            <div className="overflow-x-auto border border-white/5 rounded-xl">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-white/5 text-white/80 font-medium border-b border-white/10">
                    <th className="p-3">Year</th>
                    <th className="p-3">MCU Movies Released</th>
                    <th className="p-3">Worldwide Gross</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-light">
                  <tr>
                    <td className="p-3 text-white font-medium">2015</td>
                    <td className="p-3 text-white/60">Age of Ultron, Ant-Man</td>
                    <td className="p-3 text-red-400 font-medium">~$1.92 Billion</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2016</td>
                    <td className="p-3 text-white/60">Civil War, Deadpool, Dr. Strange</td>
                    <td className="p-3 text-red-400 font-medium">~$2.61 Billion</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white/60 font-medium">2017</td>
                    <td className="p-3 text-white/60">Spider-Man: Homecoming, Thor: Ragnarok, Guardians 2</td>
                    <td className="p-3 text-red-400 font-medium">~$2.60 Billion</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2018</td>
                    <td className="p-3 text-white/60">Avengers: Infinity War, Black Panther, Ant-Man 2</td>
                    <td className="p-3 text-red-400 font-medium">~$4.02 Billion</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2019</td>
                    <td className="p-3 text-white/60">Avengers: Endgame, Captain Marvel, Spider-Man: FFH</td>
                    <td className="p-3 text-red-400 font-medium">~$5.06 Billion</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2021</td>
                    <td className="p-3 text-white/60">Spider-Man: NWH, Shang-Chi, Eternals, Black Widow</td>
                    <td className="p-3 text-red-400 font-medium">~$3.13 Billion</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2022</td>
                    <td className="p-3 text-white/60">Doctor Strange 2, Thor 4, Black Panther 2</td>
                    <td className="p-3 text-red-400 font-medium">~$2.57 Billion</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2024</td>
                    <td className="p-3 text-white/60">Deadpool & Wolverine, Captain America 4</td>
                    <td className="p-3 text-red-400 font-medium">~$1.53 Billion</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeSection === "ott" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white font-finance border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-500 rounded" />
              Stream 3: Disney+ OTT Streaming Expansion
            </h2>
            <p className="font-light text-xs text-white/70">
              Launched in late 2019, Disney+ uses Marvel content as a major subscriber acquisition and retention anchor. While content costs are high, streaming reached sustained profitability in late 2024.
            </p>
            <div className="overflow-x-auto border border-white/5 rounded-xl">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-white/5 text-white/80 font-medium border-b border-white/10">
                    <th className="p-3">Year</th>
                    <th className="p-3">Disney+ Core Paid Subscribers</th>
                    <th className="p-3">Estimated Annual Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-light">
                  <tr>
                    <td className="p-3 text-white font-medium">2019</td>
                    <td className="p-3 text-white/60">10M (in first 24 hours of launch)</td>
                    <td className="p-3 text-red-400 font-medium">Pre-revenue / Launch</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2020</td>
                    <td className="p-3 text-white/60">~73 Million</td>
                    <td className="p-3 text-red-400 font-medium">~$2.8 Billion</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2021</td>
                    <td className="p-3 text-white/60">~118 Million</td>
                    <td className="p-3 text-red-400 font-medium">~$5.3 Billion</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2022</td>
                    <td className="p-3 text-white/60">~164 Million (Peak aggregate)</td>
                    <td className="p-3 text-red-400 font-medium">~$7.4 Billion</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2023</td>
                    <td className="p-3 text-white/60">~150 Million (Clean consolidation)</td>
                    <td className="p-3 text-red-400 font-medium">~$8.4 Billion</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2024</td>
                    <td className="p-3 text-white/60">~122.7 Million (Core paid)</td>
                    <td className="p-3 text-red-400 font-medium">~$10.4 Billion</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeSection === "merch" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white font-finance border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-500 rounded" />
              Stream 4: Consumer Products & Licensing
            </h2>
            <p className="font-light text-xs text-white/70">
              Licensing out Marvel characters to global retailers (Hasbro, LEGO), video games (Sony Interactive Spider-Man - 33M+ copies sold), and thematic park attractions.
            </p>
            <div className="overflow-x-auto border border-white/5 rounded-xl">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-white/5 text-white/80 font-medium border-b border-white/10">
                    <th className="p-3">Year</th>
                    <th className="p-3">Disney Consumer Retail Sales</th>
                    <th className="p-3">Estimated Marvel Share</th>
                    <th className="p-3">Key Catalysts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-light">
                  <tr>
                    <td className="p-3 text-white font-medium">2015</td>
                    <td className="p-3 text-white/60">~$45-48 Billion</td>
                    <td className="p-3 text-red-400 font-medium">~$9.9-10.6 Billion</td>
                    <td className="p-3 text-white/50">Age of Ultron launch cycle</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2016</td>
                    <td className="p-3 text-white/60">$56.6 Billion</td>
                    <td className="p-3 text-red-400 font-medium">~$12.5 Billion</td>
                    <td className="p-3 text-white/50">Disney ranked #1 global licensor</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2018</td>
                    <td className="p-3 text-white/60">~$55 Billion</td>
                    <td className="p-3 text-red-400 font-medium">~$12.1 Billion</td>
                    <td className="p-3 text-white/50">Black Panther & Infinity War toys</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2021</td>
                    <td className="p-3 text-white/60">$56.2 Billion</td>
                    <td className="p-3 text-red-400 font-medium">~$12.4 Billion</td>
                    <td className="p-3 text-white/50">Strong post-COVID product demand</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2023</td>
                    <td className="p-3 text-white/60">~$56 Billion</td>
                    <td className="p-3 text-red-400 font-medium">~$12.3 Billion</td>
                    <td className="p-3 text-white/50">Marvel&apos;s Spider-Man 2 (PS5) release</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white font-medium">2024</td>
                    <td className="p-3 text-white/60">~$57 Billion</td>
                    <td className="p-3 text-red-400 font-medium">~$12.5 Billion</td>
                    <td className="p-3 text-white/50">Deadpool & Wolverine collectibles</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 2. FINANCIAL DASHBOARD VIEWER (Tableau)
// ==========================================
interface DataRecord {
  recordId: number;
  date: string;
  city: string;
  region: string;
  category: string;
  platform: string;
  userType: string;
  subscription: string;
  engagement: number; // 1-10
  satisfaction: number; // 1-5
  frequency: string;
  responseTime: number; // min
  tickets: number;
  revenue: number; // calculated proxy spend
}

export function DashboardViewer() {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Generate solid dashboard static dataset of 20 elements representing "Digital Platform Data"
  const records: DataRecord[] = useMemo(() => [
    { recordId: 101, date: "2024-01-12", city: "New York", region: "East", category: "SaaS Subscription", platform: "Web", userType: "Enterprise", subscription: "Annual", engagement: 9.2, satisfaction: 4.8, frequency: "Daily", responseTime: 12, tickets: 4, revenue: 12500 },
    { recordId: 102, date: "2024-01-18", city: "Los Angeles", region: "West", category: "SaaS Subscription", platform: "Mobile", userType: "Premium", subscription: "Monthly", engagement: 8.5, satisfaction: 4.2, frequency: "Daily", responseTime: 22, tickets: 8, revenue: 3200 },
    { recordId: 103, date: "2024-02-05", city: "Chicago", region: "Central", category: "API Access", platform: "Web", userType: "Enterprise", subscription: "Annual", engagement: 9.0, satisfaction: 4.7, frequency: "Daily", responseTime: 14, tickets: 2, revenue: 18000 },
    { recordId: 104, date: "2024-02-14", city: "Houston", region: "South", category: "Enterprise Support", platform: "Desktop", userType: "Enterprise", subscription: "Annual", engagement: 7.8, satisfaction: 3.9, frequency: "Weekly", responseTime: 32, tickets: 15, revenue: 9500 },
    { recordId: 105, date: "2024-02-28", city: "Boston", region: "East", category: "Consulting Services", platform: "Web", userType: "Premium", subscription: "One-time", engagement: 6.5, satisfaction: 4.5, frequency: "Monthly", responseTime: 8, tickets: 1, revenue: 15000 },
    { recordId: 106, date: "2024-03-04", city: "Seattle", region: "West", category: "SaaS Subscription", platform: "Web", userType: "Premium", subscription: "Annual", engagement: 8.8, satisfaction: 4.6, frequency: "Daily", responseTime: 15, tickets: 3, revenue: 4500 },
    { recordId: 107, date: "2024-03-12", city: "Atlanta", region: "South", category: "API Access", platform: "Mobile", userType: "Enterprise", subscription: "Annual", engagement: 8.1, satisfaction: 4.1, frequency: "Weekly", responseTime: 19, tickets: 7, revenue: 11000 },
    { recordId: 108, date: "2024-03-19", city: "Denver", region: "West", category: "Enterprise Support", platform: "Desktop", userType: "Premium", subscription: "Monthly", engagement: 7.2, satisfaction: 3.6, frequency: "Weekly", responseTime: 40, tickets: 22, revenue: 2800 },
    { recordId: 109, date: "2024-04-02", city: "Miami", region: "South", category: "SaaS Subscription", platform: "Mobile", userType: "Free", subscription: "None", engagement: 5.4, satisfaction: 3.2, frequency: "Monthly", responseTime: 48, tickets: 11, revenue: 0 },
    { recordId: 110, date: "2024-04-10", city: "Chicago", region: "Central", category: "SaaS Subscription", platform: "Web", userType: "Enterprise", subscription: "Annual", engagement: 9.4, satisfaction: 4.9, frequency: "Daily", responseTime: 10, tickets: 2, revenue: 14000 },
    { recordId: 111, date: "2024-04-18", city: "New York", region: "East", category: "API Access", platform: "Web", userType: "Premium", subscription: "Monthly", engagement: 8.7, satisfaction: 4.4, frequency: "Daily", responseTime: 16, tickets: 5, revenue: 6200 },
    { recordId: 112, date: "2024-05-01", city: "San Francisco", region: "West", category: "Consulting Services", platform: "Web", userType: "Enterprise", subscription: "One-time", engagement: 9.5, satisfaction: 4.9, frequency: "Daily", responseTime: 6, tickets: 0, revenue: 25000 },
    { recordId: 113, date: "2024-05-15", city: "Dallas", region: "South", category: "SaaS Subscription", platform: "Desktop", userType: "Premium", subscription: "Annual", engagement: 8.0, satisfaction: 4.3, frequency: "Weekly", responseTime: 20, tickets: 4, revenue: 4200 },
    { recordId: 114, date: "2024-05-22", city: "Philadelphia", region: "East", category: "Enterprise Support", platform: "Desktop", userType: "Enterprise", subscription: "Annual", engagement: 7.5, satisfaction: 3.8, frequency: "Weekly", responseTime: 35, tickets: 18, revenue: 8000 },
    { recordId: 115, date: "2024-06-05", city: "Phoenix", region: "West", category: "API Access", platform: "Mobile", userType: "Premium", subscription: "Monthly", engagement: 8.3, satisfaction: 4.0, frequency: "Daily", responseTime: 25, tickets: 9, revenue: 5800 },
    { recordId: 116, date: "2024-06-12", city: "Minneapolis", region: "Central", category: "SaaS Subscription", platform: "Mobile", userType: "Free", subscription: "None", engagement: 4.9, satisfaction: 3.0, frequency: "Monthly", responseTime: 55, tickets: 14, revenue: 0 },
    { recordId: 117, date: "2024-06-20", city: "Detroit", region: "Central", category: "API Access", platform: "Web", userType: "Premium", subscription: "Monthly", engagement: 8.6, satisfaction: 4.3, frequency: "Daily", responseTime: 18, tickets: 6, revenue: 7500 },
    { recordId: 118, date: "2024-07-01", city: "New York", region: "East", category: "SaaS Subscription", platform: "Mobile", userType: "Premium", subscription: "Monthly", engagement: 8.9, satisfaction: 4.5, frequency: "Daily", responseTime: 13, tickets: 3, revenue: 3800 },
    { recordId: 119, date: "2024-07-11", city: "Los Angeles", region: "West", category: "Enterprise Support", platform: "Web", userType: "Enterprise", subscription: "Annual", engagement: 8.4, satisfaction: 4.1, frequency: "Weekly", responseTime: 28, tickets: 12, revenue: 10500 },
    { recordId: 120, date: "2024-07-25", city: "Austin", region: "South", category: "Consulting Services", platform: "Web", userType: "Premium", subscription: "One-time", engagement: 7.9, satisfaction: 4.4, frequency: "Weekly", responseTime: 11, tickets: 2, revenue: 12000 }
  ], []);

  // Filter Logic
  const filteredRecords = useMemo(() => {
    return records.filter((r) => {
      const matchRegion = selectedRegion === "All" || r.region === selectedRegion;
      const matchPlatform = selectedPlatform === "All" || r.platform === selectedPlatform;
      const matchCategory = selectedCategory === "All" || r.category === selectedCategory;
      return matchRegion && matchPlatform && matchCategory;
    });
  }, [records, selectedRegion, selectedPlatform, selectedCategory]);

  // Aggregate Metrics Calculations
  const metrics = useMemo(() => {
    if (filteredRecords.length === 0) {
      return { totalRevenue: 0, avgEngagement: 0, avgCSAT: 0, avgResponse: 0, totalTickets: 0 };
    }
    const totalRev = filteredRecords.reduce((sum, r) => sum + r.revenue, 0);
    const sumEng = filteredRecords.reduce((sum, r) => sum + r.engagement, 0);
    const sumCSAT = filteredRecords.reduce((sum, r) => sum + r.satisfaction, 0);
    const sumResp = filteredRecords.reduce((sum, r) => sum + r.responseTime, 0);
    const totalTicks = filteredRecords.reduce((sum, r) => sum + r.tickets, 0);

    return {
      totalRevenue: totalRev,
      avgEngagement: parseFloat((sumEng / filteredRecords.length).toFixed(1)),
      avgCSAT: parseFloat((sumCSAT / filteredRecords.length).toFixed(2)),
      avgResponse: Math.round(sumResp / filteredRecords.length),
      totalTickets: totalTicks
    };
  }, [filteredRecords]);

  // Platforms chart distribution data
  const platformData = useMemo(() => {
    const counts: Record<string, number> = { Web: 0, Mobile: 0, Desktop: 0 };
    filteredRecords.forEach((r) => {
      if (counts[r.platform] !== undefined) {
        counts[r.platform] += 1;
      }
    });
    const total = Object.values(counts).reduce((s, c) => s + c, 0) || 1;
    return Object.entries(counts).map(([name, count]) => ({
      name,
      count,
      pct: Math.round((count / total) * 100)
    }));
  }, [filteredRecords]);

  // Categories revenue data
  const categoryData = useMemo(() => {
    const revs: Record<string, number> = {};
    filteredRecords.forEach((r) => {
      revs[r.category] = (revs[r.category] || 0) + r.revenue;
    });
    const total = Object.values(revs).reduce((s, r) => s + r, 0) || 1;
    return Object.entries(revs).map(([name, val]) => ({
      name,
      val,
      pct: Math.round((val / total) * 100)
    })).sort((a, b) => b.val - a.val);
  }, [filteredRecords]);

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl p-5 md:p-6 space-y-6 text-white select-none">
      {/* Dashboard Top Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2 font-finance">
            <span className="w-1.5 h-6 bg-blue-500 rounded" />
            Digital Platform Analytics Dashboard
          </h2>
          <p className="text-xs text-white/50">Tableau-Equivalent Interactive Drill Down Viewer (Read-Only)</p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg">
            <Filter className="w-3.5 h-3.5 text-blue-400" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-transparent border-none outline-none text-white/80 cursor-pointer font-medium"
            >
              <option className="bg-zinc-950" value="All">All Regions</option>
              <option className="bg-zinc-950" value="East">East</option>
              <option className="bg-zinc-950" value="West">West</option>
              <option className="bg-zinc-950" value="Central">Central</option>
              <option className="bg-zinc-950" value="South">South</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg">
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="bg-transparent border-none outline-none text-white/80 cursor-pointer font-medium"
            >
              <option className="bg-zinc-950" value="All">All Platforms</option>
              <option className="bg-zinc-950" value="Web">Web</option>
              <option className="bg-zinc-950" value="Mobile">Mobile</option>
              <option className="bg-zinc-950" value="Desktop">Desktop</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg">
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent border-none outline-none text-white/80 cursor-pointer font-medium"
            >
              <option className="bg-zinc-950" value="All">All Categories</option>
              <option className="bg-zinc-950" value="SaaS Subscription">SaaS Subscription</option>
              <option className="bg-zinc-950" value="API Access">API Access</option>
              <option className="bg-zinc-950" value="Enterprise Support">Enterprise Support</option>
              <option className="bg-zinc-950" value="Consulting Services">Consulting Services</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-white/40 block">Filtered Revenue</span>
          <span className="text-xl md:text-2xl font-bold text-blue-400 font-finance">
            ${metrics.totalRevenue.toLocaleString()}
          </span>
          <span className="text-[10px] text-white/30 block">{filteredRecords.length} Active Records</span>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-white/40 block">User Engagement</span>
          <span className="text-xl md:text-2xl font-bold text-white font-finance">
            {metrics.avgEngagement} <span className="text-xs text-white/40">/10</span>
          </span>
          <span className="text-[10px] text-white/30 block">Target Threshold: 8.0</span>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-white/40 block">Avg CSAT Score</span>
          <span className="text-xl md:text-2xl font-bold text-emerald-400 font-finance">
            {metrics.avgCSAT} <span className="text-xs text-white/40">/5.0</span>
          </span>
          <span className="text-[10px] text-white/30 block">Customer satisfaction</span>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-white/40 block">Avg Response Time</span>
          <span className="text-xl md:text-2xl font-bold text-white font-finance">
            {metrics.avgResponse} <span className="text-xs text-white/40">mins</span>
          </span>
          <span className="text-[10px] text-white/30 block">{metrics.totalTickets} Support Tickets</span>
        </div>
      </div>

      {/* Visual Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Breakdown Chart */}
        <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl space-y-3">
          <span className="text-xs font-semibold text-white/70 block">User Platform Distribution</span>
          <div className="space-y-3.5 pt-2">
            {platformData.map((plat) => (
              <div key={plat.name} className="space-y-1">
                <div className="flex justify-between items-center text-xs text-white/60">
                  <span className="flex items-center gap-1.5">
                    {plat.name === "Web" && <Globe className="w-3.5 h-3.5 text-blue-400" />}
                    {plat.name === "Mobile" && <Smartphone className="w-3.5 h-3.5 text-emerald-400" />}
                    {plat.name === "Desktop" && <Monitor className="w-3.5 h-3.5 text-purple-400" />}
                    {plat.name}
                  </span>
                  <span>{plat.count} accounts ({plat.pct}%)</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      plat.name === "Web" ? "bg-blue-500" : plat.name === "Mobile" ? "bg-emerald-500" : "bg-purple-500"
                    }`}
                    style={{ width: `${plat.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Category Spend Contribution */}
        <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl space-y-3">
          <span className="text-xs font-semibold text-white/70 block">Service Category Revenue Share</span>
          {categoryData.length === 0 ? (
            <div className="h-[120px] flex items-center justify-center text-xs text-white/30">No data available</div>
          ) : (
            <div className="space-y-3.5 pt-2">
              {categoryData.map((cat) => (
                <div key={cat.name} className="space-y-1">
                  <div className="flex justify-between items-center text-xs text-white/60">
                    <span className="truncate pr-4">{cat.name}</span>
                    <span className="shrink-0 font-medium text-white/80">${cat.val.toLocaleString()} ({cat.pct}%)</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-400/80 rounded-full transition-all duration-500"
                      style={{ width: `${cat.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Grid Data Preview Table */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-white/70 block">Active Ledger Entries ({filteredRecords.length})</span>
        <div className="overflow-x-auto border border-white/5 rounded-xl max-h-[220px]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-white/5 text-white/80 font-medium border-b border-white/10 sticky top-0 backdrop-blur z-10">
                <th className="p-3">ID</th>
                <th className="p-3">Date</th>
                <th className="p-3">City</th>
                <th className="p-3">Category</th>
                <th className="p-3">Platform</th>
                <th className="p-3 text-center">Engagement</th>
                <th className="p-3 text-center">CSAT</th>
                <th className="p-3 text-right">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-light">
              {filteredRecords.map((r) => (
                <tr key={r.recordId} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 text-white/40">{r.recordId}</td>
                  <td className="p-3 text-white/60 truncate">{r.date}</td>
                  <td className="p-3 text-white/80">{r.city} ({r.region})</td>
                  <td className="p-3 text-white/80 truncate max-w-[140px]">{r.category}</td>
                  <td className="p-3 text-white/60">{r.platform}</td>
                  <td className="p-3 text-center text-white/80 font-medium">{r.engagement}</td>
                  <td className="p-3 text-center text-emerald-400 font-medium">{r.satisfaction}</td>
                  <td className="p-3 text-right text-blue-400 font-medium">${r.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. VALUATION ANALYSIS EXCEL VIEWER
// ==========================================
export function ExcelViewer() {
  const [activeSheet, setActiveSheet] = useState("Dashboard");

  const sheets = [
    { name: "Dashboard", icon: <Table className="w-3.5 h-3.5 text-green-400" /> },
    { name: "Asset Allocation", icon: <Table className="w-3.5 h-3.5 text-green-400" /> },
    { name: "Fund Selection", icon: <Table className="w-3.5 h-3.5 text-green-400" /> },
    { name: "Income & Growth", icon: <Table className="w-3.5 h-3.5 text-green-400" /> },
    { name: "Tax Location", icon: <Table className="w-3.5 h-3.5 text-green-400" /> },
    { name: "Rebalancing", icon: <Table className="w-3.5 h-3.5 text-green-400" /> },
    { name: "Risk & Benchmark", icon: <Table className="w-3.5 h-3.5 text-green-400" /> }
  ];

  // Raw data from Excel sheets (sanitized and pre-computed for clean financial view)
  const sheetContents: Record<string, string[][]> = {
    Dashboard: [
      ["", "MORGAN STANLEY WEALTH MANAGEMENT", "", "", ""],
      ["", "INVESTMENT POLICY STATEMENT — PORTFOLIO DASHBOARD", "", "", ""],
      ["", "  CLIENT PROFILE", "", "", ""],
      ["", "Age Group", "", "", "Under 35 — 30+ Year Horizon"],
      ["", "Investable Assets (Midpoint)", "", "", "$375,000"],
      ["", "Risk Profile", "", "", "Balanced — Growth-Tilted"],
      ["", "Income Requirement", "", "", "Modest (~$5,000/yr target)"],
      ["", "Composite Risk Capacity Score", "", "", "8.0 / 10  (HIGH)"],
      ["", "Account Types", "", "", "401(k), Roth IRA, Taxable Brokerage, HSA"],
      ["", "Investment Restrictions", "", "", "Funds Only — No Individual Stocks"],
      ["", "Benchmark", "", "", "60% MSCI ACWI / 40% Bloomberg Agg (blended)"],
      ["", "IPS Prepared", "", "", "2025"],
      ["", "  RETURN OBJECTIVES", "", "", ""],
      ["", "Annual Real Return Target", "", "", "5.5% – 7.0%"],
      ["", "Nominal Annual Return Target", "", "", "7.5% – 9.5%"],
      ["", "Annual Income Generation", "", "", "$2,500 – $5,000"],
      ["", "Max Acceptable 1-Year Drawdown", "", "", "-28% to -35%"],
      ["", "Rebalancing Frequency", "", "", "Annual + Threshold (±7% drift)"],
      ["", "Blended Expense Ratio", "", "", "~0.09%"],
      ["", "  30-YEAR WEALTH PROJECTION  (7.5% nominal, no additional contributions)", "", "", ""],
      ["", "Milestone", "Years", "Age (est.)", "Portfolio Value", "Cumulative Gain"],
      ["", "Today", "0", "35", "$375,000", "$0"],
      ["", "Year 5", "5", "40", "$538,000", "$163,000"],
      ["", "Year 10", "10", "45", "$771,000", "$396,000"],
      ["", "Year 15", "15", "50", "$1,105,000", "$730,000"],
      ["", "Year 20", "20", "55", "$1,585,000", "$1,210,000"],
      ["", "Year 25", "25", "60", "$2,273,000", "$1,898,000"],
      ["", "Year 30", "30", "65", "$3,257,000", "$2,882,000"],
      ["", "⚠ Illustrative projections only. Past performance does not guarantee future results.", "", "", ""]
    ],
    "Asset Allocation": [
      ["", "STRATEGIC ASSET ALLOCATION", "", "", "", "", ""],
      ["", "  MASTER ALLOCATION TABLE  |  Portfolio Midpoint: $375,000", "", "", "", "", ""],
      ["", "Asset Class", "Target %", "Min %", "Max %", "$ Amount (375K)", "Notes"],
      ["", "EQUITIES — TOTAL", "68.0%", "60.0%", "75.0%", "$255,000", "Core growth engine"],
      ["", "  US Large Cap (Core) — VTI", "22.0%", "18.0%", "28.0%", "$82,500", "Broadest US market exposure"],
      ["", "  US Small/Mid Cap — IJR", "6.0%", "4.0%", "9.0%", "$22,500", "Small-cap premium factor"],
      ["", "  International Developed — VXUS", "18.0%", "13.0%", "23.0%", "$67,500", "47-country diversification"],
      ["", "  Emerging Markets — VWO", "10.0%", "6.0%", "14.0%", "$37,500", "High-growth EM exposure"],
      ["", "  Dividend / Income — VIG", "4.0%", "2.0%", "7.0%", "$15,000", "Quality dividend growers"],
      ["", "  Satellite Tech Tilt — QQQ", "1.0%", "0.0%", "2.0%", "$3,750", "Minimal innovation tilt"],
      ["", "  VXUS Income Component", "7.0%", "4.0%", "10.0%", "$26,250", "International dividend layer"],
      ["", "FIXED INCOME — TOTAL", "16.0%", "10.0%", "22.0%", "$60,000", "Volatility buffer + income"],
      ["", "  US Aggregate Bonds — BND", "8.0%", "5.0%", "12.0%", "$30,000", "Core bond market index"],
      ["", "  TIPS — SCHP", "4.0%", "2.0%", "6.0%", "$15,000", "Inflation protection"],
      ["", "  High Yield Corp — HYG", "4.0%", "2.0%", "6.0%", "$15,000", "Enhanced yield (capped)"],
      ["", "REAL ESTATE (REITs) — VNQ", "8.0%", "4.0%", "12.0%", "$30,000", "Real asset diversification"],
      ["", "ALTERNATIVES — TOTAL", "8.0%", "4.0%", "12.0%", "$30,000", "Inflation hedge + diversifier"],
      ["", "  Commodities — PDBC", "4.0%", "2.0%", "6.0%", "$15,000", "Inflation hedge, low correlation"],
      ["", "  Infrastructure — IFRA", "4.0%", "2.0%", "6.0%", "$15,000", "Policy-backed real assets"],
      ["", "TOTAL PORTFOLIO", "100.0%", "", "", "$375,000", "100% deployment target"]
    ],
    "Fund Selection": [
      ["", "FUND & ETF SELECTION — CORE vs. SATELLITE", "", "", "", "", ""],
      ["", "  CORE HOLDINGS (75% of Portfolio) — Stable Foundation", "", "", "", "", ""],
      ["", "Ticker", "Fund Name", "Alloc.", "Exp. Ratio", "Dollar (375K)", "Investment Rationale"],
      ["", "VTI", "Vanguard Total Stock Market ETF", "22.0%", "0.03%", "$82,500", "Broadest US equity exposure — 4,000+ stocks, market-cap weighted. Near-zero cost. 30-year core anchor."],
      ["", "VXUS", "Vanguard Total International ETF", "18.0%", "0.07%", "$67,500", "Single-fund international exposure across 47 countries, developed + emerging. Eliminates home-country bias."],
      ["", "BND", "Vanguard Total Bond Market ETF", "8.0%", "0.03%", "$30,000", "Investment-grade US bond market. Core income and volatility buffer. Reduces max drawdown in crashes."],
      ["", "SCHP", "Schwab US TIPS ETF", "4.0%", "0.03%", "$15,000", "Treasury Inflation-Protected Securities. Real return guarantee; critical over 30-year horizon with uncertain inflation."],
      ["", "VNQ", "Vanguard Real Estate ETF (REITs)", "8.0%", "0.12%", "$30,000", "REIT index fund. Real estate exposure without direct ownership. ~3.5% dividend yield; low bond correlation."],
      ["", "VIG", "Vanguard Dividend Appreciation ETF", "4.0%", "0.06%", "$15,000", "Dividend growers with 10+ consecutive years of increases. Quality screen vs. raw yield chasers."],
      ["", "  SATELLITE HOLDINGS (25% of Portfolio) — Higher-Growth Opportunity", "", "", "", "", ""],
      ["", "Ticker", "Fund Name", "Alloc.", "Exp. Ratio", "Dollar (375K)", "Investment Rationale"],
      ["", "VWO", "Vanguard Emerging Markets ETF", "6.0%", "0.08%", "$22,500", "Dedicated EM beyond VXUS. GDP growth 2-3x faster than developed markets. Demographic tailwind through 2050+."],
      ["", "IJR", "iShares Core S&P Small-Cap ETF", "6.0%", "0.06%", "$22,500", "US small-cap factor exposure. Historical premium of +1.5-2% above large-cap over full market cycles."],
      ["", "HYG", "iShares iBoxx High Yield Corp ETF", "4.0%", "0.48%", "$15,000", "High-yield bond income. Adds 3-4% yield above Treasuries. Limited to 4% to cap credit risk."],
      ["", "PDBC", "Invesco Optimum Yield Commodities ETF", "4.0%", "0.59%", "$15,000", "Commodities basket (energy, metals, agriculture). Inflation hedge with low equity correlation. K-1 free."],
      ["", "IFRA", "iShares US Infrastructure ETF", "4.0%", "0.30%", "$15,000", "US infrastructure buildout theme. Bridges equity and real assets. Bipartisan policy support."],
      ["", "QQQ", "Invesco NASDAQ-100 ETF", "1.0%", "0.20%", "$3,750", "Minimal tech/innovation tilt. Keep below 2% to avoid concentration. Optional tactical position."],
      ["", "★ Blended Portfolio Weighted Average Expense Ratio: ~0.09% annually  (vs. industry avg 0.44% for managed portfolios)", "", "", "", "", ""]
    ],
    "Income & Growth": [
      ["", "INCOME LAYER & GROWTH LAYER ARCHITECTURE", "", "", "", ""],
      ["", "  INCOME LAYER — Passive Cash Flow Generation", "", "", "", ""],
      ["", "Ticker", "Fund", "Alloc.", "Est. Yield", "Annual Income ($375K)"],
      ["", "VIG", "Dividend Appreciation ETF", "4.0%", "1.80%", "$270"],
      ["", "VNQ", "Real Estate Index ETF", "8.0%", "3.50%", "$1,050"],
      ["", "BND", "Total Bond Market ETF", "8.0%", "3.20%", "$960"],
      ["", "SCHP", "US TIPS ETF", "4.0%", "2.40%", "$360"],
      ["", "HYG", "High Yield Corp ETF", "4.0%", "5.80%", "$870"],
      ["", "VXUS", "Total International ETF", "18.0%", "2.90%", "$1,958"],
      ["", "TOTAL INCOME LAYER", "Aggregate", "46.0%", "2.91% blended", "$5,468"],
      ["", "  GROWTH LAYER — Long-Term Capital Appreciation", "", "", "", ""],
      ["", "Ticker", "Fund", "Alloc.", "Growth Thesis", "Key Risk"],
      ["", "VTI", "Total Stock Market ETF", "22%", "Full US market participation. $1 invested in 1993 → ~$21 by 2025.", "Market beta; declines with US recessions"],
      ["", "VWO", "Emerging Markets ETF", "6%", "GDP growth 2-3x faster than developed. Demographic tailwind 2050+.", "Political/currency risk, EM volatility"],
      ["", "IJR", "S&P Small-Cap ETF", "6%", "Historical small-cap premium: +1.5-2% above large-cap over full cycles.", "Higher volatility vs. large cap"],
      ["", "IFRA", "US Infrastructure ETF", "4%", "Multi-decade infrastructure rebuilding cycle; bipartisan policy support.", "Interest rate sensitivity"],
      ["", "QQQ", "NASDAQ-100 ETF", "1%", "Technology sector leadership; innovation compounding.", "Concentration risk if oversized"]
    ],
    "Tax Location": [
      ["", "TAX-LOCATION OPTIMIZATION STRATEGY", "", "", "", ""],
      ["", "  ACCOUNT-LEVEL FUND ASSIGNMENTS", "", "", "", ""],
      ["", "Account", "Primary Holdings", "Rationale", "Tax Treatment", "Priority"],
      ["", "401(k)", "BND, HYG, SCHP, IJR", "Bond interest fully sheltered from ordinary income. High-turnover small-cap also shielded from annual cap gains distributions.", "Tax-deferred — ordinary income at withdrawal", "1st — Max out first"],
      ["", "Roth IRA", "VWO, IJR, QQQ, IFRA", "Highest-expected-return assets grow 100% tax-free permanently. No RMDs. Greatest dollar benefit from Roth treatment.", "Tax-free growth + tax-free withdrawal", "1st — Max out first"],
      ["", "HSA", "VTI or VXUS (invested)", "Triple tax advantage: deduct contributions, tax-free growth, tax-free withdrawal for qualifying medical expenses.", "Triple tax-advantaged", "1st — Invest surplus"],
      ["", "Taxable Brokerage", "VTI, VXUS, VNQ, VIG, PDBC", "Index ETFs have near-zero capital gain distributions. VXUS qualifies for foreign tax credit. Hold tax-efficient funds only.", "Long-term cap gains (15-20%) + dividends", "2nd — After tax-adv."],
      ["", "  TAX-LOSS HARVESTING (TLH) SWAP TABLE", "", "", "", ""],
      ["", "Sell (Loss Position)", "Buy (Substitute)", "Notes", "", ""],
      ["", "VTI", "ITOT or SCHB", "Hold substitute 31+ days to avoid wash-sale; swap back if desired", "", ""],
      ["", "VXUS", "IXUS or SPDW+VWO", "International substitute pair; similar global exposure", "", ""],
      ["", "VNQ", "IYR or USRT", "REIT ETF substitutes; near-identical sector and profile", "", ""],
      ["", "BND", "AGG or SCHZ", "Aggregate bond alternatives; essentially identical duration + credit", "", ""]
    ],
    Rebalancing: [
      ["", "REBALANCING RULES & ANNUAL CALENDAR", "", "", ""],
      ["", "  REBALANCING TRIGGER RULES", "", "", ""],
      ["", "Trigger Type", "Threshold", "Action Required", "Priority"],
      ["", "Calendar Review", "Annually (January)", "Review all weights; rebalance if any fall outside tactical range", "Routine"],
      ["", "Major Asset Class Drift", "±7% from target", "Mandatory rebalance within 30 days of breach", "🔴 Mandatory"],
      ["", "Sub-Asset Class Drift", "±5% from target", "Rebalance at next quarterly review", "🟡 Quarterly"],
      ["", "New Contributions", "Every deposit", "Direct all new cash to underweight positions first — no selling needed", "🟢 Always"],
      ["", "Life Event Trigger", "Major life change", "Full IPS review: marriage, child, job change, inheritance, disability", "🔴 Mandatory"],
      ["", "  ANNUAL REBALANCING CALENDAR", "", "", ""],
      ["", "Month", "Action", "Detailed Instructions", "Accounts"],
      ["", "January", "Full Annual Review", "Review all allocations vs targets. Execute rebalancing trades in tax-advantaged accounts first to minimize taxes. Log decisions.", "All accounts"],
      ["", "April", "Q2 Quarterly Check", "Check drift only. No trades unless ≥7% breach detected. Confirm Roth IRA contribution has been made.", "Roth IRA; All"],
      ["", "July", "Q3 Quarterly Check", "Review drift. Assess mid-year performance vs. blended benchmark. Note any sector concentration that has crept above 25%.", "All accounts"],
      ["", "October", "Tax-Loss Harvest Window", "Identify positions with losses ≥10% in taxable account. Execute TLH swaps before Nov 30. Reinvest proceeds.", "Taxable only"],
      ["", "December", "Year-End Planning", "Confirm 401(k) contribution maximized. Fund Roth IRA if not done. Review beneficiaries. Plan any charitable giving.", "All accounts"],
      ["", "  REBALANCING EXECUTION ORDER  (always follow this sequence)", "", "", ""],
      ["", "1. Redirect new contributions and dividends to underweight asset classes first — no selling needed.", "", "", ""],
      ["", "2. Rebalance WITHIN 401(k) and Roth IRA — free trades, zero tax consequences.", "", "", ""],
      ["", "3. If taxable rebalancing is required: harvest losses first (TLH), then pare winners only if absolutely needed.", "", "", ""],
      ["", "4. Never sell a position in taxable with short-term gain (held <1 year). Wait for long-term capital gains treatment.", "", "", ""],
      ["", "5. Document all trades with rationale in a personal investment journal.", "", "", ""]
    ],
    "Risk & Benchmark": [
      ["", "RISK PROFILE & BENCHMARK TRACKING", "", "", ""],
      ["", "  RISK CAPACITY ASSESSMENT", "", "", ""],
      ["", "Risk Factor", "Score", "Rating", "Commentary"],
      ["", "Time Horizon (30+ years)", "10/10", "Excellent", "Maximum possible score — 30 years allows full market cycle recovery"],
      ["", "Human Capital (career ahead)", "9/10", "Excellent", "Majority of lifetime earnings still ahead — can recover from portfolio losses"],
      ["", "Asset Base ($250K-$500K)", "6/10", "Good", "Meaningful base, but early losses have outsized psychological impact"],
      ["", "Income Stability (employment)", "7/10", "Good", "Assumed stable employment with capacity for ongoing contributions"],
      ["", "Liquidity Need (modest income req)", "8/10", "Strong", "Modest income requirement allows most assets to remain in growth mode"],
      ["", "COMPOSITE RISK CAPACITY", "8.0/10", "HIGH", "Supports aggressive-to-balanced allocation — 72% risk assets appropriate"],
      ["", "  SCENARIO STRESS TESTS", "", "", ""],
      ["", "Scenario", "Est. Portfolio Impact", "Protection Mechanism", "Severity"],
      ["", "Global Equity Crash (-40%)", "-23% to -28%", "16% bonds + 8% REITs + alternatives buffer loss", "High"],
      ["", "US Recession / Bear Market (-35%)", "-18% to -22%", "International diversification (28%) partially decouples", "High"],
      ["", "Stagflation (high CPI, low growth)", "-5% to -8%", "TIPS (4%) + Commodities (4%) + REITs (8%) provide hedge", "Medium"],
      ["", "Emerging Market Crisis (-50% EM)", "-5% to -8%", "EM capped at 16%; developed markets remain functional", "Medium"],
      ["", "Rising Interest Rates (+2%)", "-6% to -10%", "Short-to-intermediate duration; TIPS adjust with CPI", "Medium"],
      ["", "  BENCHMARK COMPOSITION & PERFORMANCE METRICS", "", "", ""],
      ["", "Benchmark Index", "Weight", "Tracks", "KPI Target"],
      ["", "MSCI ACWI Index", "40%", "Global equities — US + International", "Annual return within ±2% of benchmark"],
      ["", "Russell 3000 Index", "20%", "Total US equity market", "3-yr rolling Sharpe Ratio > 0.50"],
      ["", "Bloomberg US Aggregate Bond Index", "16%", "US investment-grade bonds", "Blended expense ratio < 0.15%"],
      ["", "FTSE NAREIT All REITs Index", "8%", "US real estate investment trusts", "Annual income > $2,500"],
      ["", "Bloomberg Commodity Index", "8%", "Dynamic diversified commodities", "Max drawdown within ±5% of benchmark"],
      ["", "MSCI Emerging Markets Index", "8%", "Emerging market equities", "No single sector > 25%"],
      ["", "COMPOSITE BENCHMARK", "100%", "Blended, rebalanced annually", "Primary performance yardstick"]
    ]
  };

  const currentData = sheetContents[activeSheet] || [];

  // Helper to check if a row is a section header (all cells except second are empty)
  const isHeaderRow = (row: string[]) => {
    return row[1] && row[1].startsWith("  ") && row.slice(2).every(cell => !cell);
  };

  // Helper to check if a row is the primary title row
  const isTitleRow = (row: string[], index: number) => {
    return index < 2 && row[1] && row.slice(2).every(cell => !cell);
  };

  return (
    <div className="flex flex-col h-[600px] border border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl text-white select-none">
      {/* Excel Sheet Selector Tabs */}
      <div className="flex flex-wrap gap-1 bg-zinc-950/80 p-2 border-b border-white/10 overflow-x-auto select-none">
        {sheets.map((sheet) => (
          <button
            key={sheet.name}
            onClick={() => setActiveSheet(sheet.name)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeSheet === sheet.name
                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            {sheet.icon}
            {sheet.name}
          </button>
        ))}
      </div>

      {/* Spreadsheet Grid Panel */}
      <div className="flex-grow overflow-auto bg-zinc-900/10 font-mono text-[11px] leading-normal select-none">
        <table className="min-w-full border-collapse border-spacing-0">
          <thead>
            <tr className="bg-zinc-900 border-b border-white/10 text-white/40">
              {/* Column index indicator (A, B, C...) */}
              <th className="sticky left-0 bg-zinc-900 p-1.5 text-center font-medium w-8 border-r border-white/10 select-none">
                #
              </th>
              {Array.from({ length: 6 }).map((_, idx) => (
                <th
                  key={idx}
                  className="p-1.5 text-center font-medium border-r border-white/10 min-w-[120px] max-w-[280px]"
                >
                  {String.fromCharCode(65 + idx)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, rowIdx) => {
              const isTitle = isTitleRow(row, rowIdx);
              const isSectionHeader = isHeaderRow(row);

              return (
                <tr
                  key={rowIdx}
                  className={`border-b border-white/5 hover:bg-white/[0.01] ${
                    isTitle
                      ? "bg-green-500/5 font-bold"
                      : isSectionHeader
                      ? "bg-white/[0.02] font-semibold text-green-400"
                      : ""
                  }`}
                >
                  {/* Row index indicator */}
                  <td className="sticky left-0 bg-zinc-950 text-white/30 text-center p-1.5 border-r border-white/10 select-none">
                    {rowIdx + 1}
                  </td>

                  {/* Excel cells mapping */}
                  {Array.from({ length: 6 }).map((_, colIdx) => {
                    const cellVal = row[colIdx] || "";
                    const displayVal = cellVal;
                    let cellClass = "p-1.5 border-r border-white/5 truncate max-w-[280px]";

                    // Alignments & Styles
                    if (isTitle && colIdx === 1) {
                      cellClass += " text-left text-white font-finance text-xs";
                    } else if (isSectionHeader && colIdx === 1) {
                      cellClass += " text-left text-green-400 font-semibold";
                    } else if (colIdx === 1) {
                      cellClass += " text-left text-white/80 font-sans";
                    } else {
                      // Numbers and percentages aligned to right
                      if (
                        /^-?\$?\d+/.test(cellVal) ||
                        /^-?\d+(\.\d+)?%/.test(cellVal) ||
                        cellVal.includes("$") ||
                        cellVal.includes("%")
                      ) {
                        cellClass += " text-right font-mono text-white/90";
                      } else {
                        cellClass += " text-left text-white/60 font-sans";
                      }
                    }

                    // Special spans over cells for wide header titles
                    if (isTitle && colIdx === 1) {
                      return (
                        <td key={colIdx} colSpan={5} className="p-3 text-left border-r border-white/5 text-green-400 font-bold uppercase tracking-wider text-xs">
                          {displayVal}
                        </td>
                      );
                    }
                    if (isTitle && colIdx > 1) return null; // skip columns that are colspanned

                    if (isSectionHeader && colIdx === 1) {
                      return (
                        <td key={colIdx} colSpan={5} className="p-2 pl-4 text-left border-r border-white/5 text-white/80 font-bold tracking-wide">
                          {displayVal}
                        </td>
                      );
                    }
                    if (isSectionHeader && colIdx > 1) return null; // skip columns that are colspanned

                    return (
                      <td key={colIdx} className={cellClass} title={displayVal}>
                        {displayVal}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* Excel Bottom Status bar */}
      <div className="bg-zinc-950 border-t border-white/10 px-4 py-2 flex justify-between items-center text-[10px] text-white/40">
        <div className="flex items-center gap-3">
          <span className="text-green-500 font-semibold">READY</span>
          <span>|</span>
          <span>Blended WA Cost: ~0.09%</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Sheet 1 of 7</span>
        </div>
      </div>
    </div>
  );
}
