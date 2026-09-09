import React from 'react';
import { ShieldCheck, TrendingUp, PieChart, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  const iconMap = {
    ShieldCheck: ShieldCheck,
    TrendingUp: TrendingUp,
    PieChart: PieChart
  };

  const workflowSteps = [
    { title: "Raw Ingestion", tech: "SQL / APIs / CSVs", desc: "Extracting structured & unstructured business records" },
    { title: "Cleaning & EDA", tech: "Python / Pandas", desc: "Anomaly detection, outlier removal, missing value imputation" },
    { title: "Data Modeling", tech: "Star Schema / DAX", desc: "Constructing relational entities and calculated metrics" },
    { title: "Visualization", tech: "Power BI / Plotly", desc: "Building executive dashboards with drill-down capabilities" },
    { title: "Business Action", tech: "Executive Insights", desc: "Delivering recommendations that boost revenue & cut risks" }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-900 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="text-slate-500">//</span>
              <span>01. ABOUT_ME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Bridging Data Science &amp; Business Strategy
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Translating complex databases and statistical distributions into clear, profitable decisions.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Main Story Panel */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 relative">
            <div className="text-xs font-mono text-emerald-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              CORE ANALYTICAL MANIFESTO
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-4 leading-snug">
              Every data point tells a story; my goal is to extract the truth that drives measurable impact.
            </h3>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                {about.story}
              </p>
              <p className="text-slate-400">
                In my work, data is not treated as abstract numbers in a database. It is the footprint of customer decisions, operational bottlenecks, and untapped revenue streams. By combining rigorous SQL querying with Python statistical exploration and Power BI visualizations, I empower stakeholders to move with conviction.
              </p>
            </div>

            {/* Micro Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero-Loss ETL Logic</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>DAX Performance Tuning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Statistically Verified EDA</span>
              </div>
            </div>
          </div>

          {/* Core Analytical Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {about.pillars.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-xl p-5 relative overflow-hidden"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-100 mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* End-to-End Analytical Pipeline Flow */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Layers className="w-4 h-4" />
              <span>END-TO-END ANALYTICS WORKFLOW</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">FROM SOURCE TO ROI</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between relative group hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="text-[11px] font-mono text-emerald-400/80 mb-1">
                    PHASE 0{idx + 1}
                  </div>
                  <h5 className="text-sm font-semibold text-white mb-1">
                    {step.title}
                  </h5>
                  <div className="text-xs text-emerald-400 font-mono mb-2">
                    {step.tech}
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
