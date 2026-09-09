import React, { useState } from 'react';
import { Code2, Database, BarChart3, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryIcons = {
    programming: Code2,
    databases: Database,
    visualization: BarChart3,
    methodologies: Wrench
  };

  const filteredCategories = activeCategory === "all"
    ? skills.categories
    : skills.categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#070a0f] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="text-slate-500">//</span>
              <span>02. TECHNICAL_STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Tools, Databases &amp; Methodologies
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Production-tested toolkit honed through statistical analysis, scalable database queries, and executive BI architecture.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
              activeCategory === "all"
                ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            ALL CAPABILITIES
          </button>
          {skills.categories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name.toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Sparkles;
            return (
              <div key={category.id} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <div className="w-7 h-7 rounded bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 font-mono">
                    {category.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-[10px] font-mono text-emerald-400/90 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                            {skill.tag}
                          </span>
                          <span className="text-xs font-mono text-slate-500">
                            {skill.level}%
                          </span>
                        </div>

                        <h4 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors mb-2">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                          {skill.note}
                        </p>
                      </div>

                      {/* Proficiency Progress Meter */}
                      <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500 group-hover:from-emerald-400 group-hover:to-cyan-300"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
