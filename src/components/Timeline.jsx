import React from 'react';
import { GraduationCap, Award, Briefcase, ChevronRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Timeline() {
  const { journey } = portfolioData;

  const categoryIcons = {
    Experience: Briefcase,
    "Certifications & Training": Award,
    Education: GraduationCap
  };

  return (
    <section id="journey" className="py-24 relative bg-[#070a0f] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="text-slate-500">//</span>
              <span>06. CAREER_TRAJECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Experience &amp; Learning Journey
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Continuous development through academic rigor, professional projects, and data certifications.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {journey.map((item, idx) => {
            const Icon = categoryIcons[item.category] || Sparkles;
            return (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                
                {/* Node Beacon */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:scale-110 transition-all shadow-md">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Period Label (Desktop side marker) */}
                <div className="hidden md:block absolute -left-36 top-2 text-xs font-mono text-slate-500 text-right w-24">
                  {item.period}
                </div>

                {/* Card Container */}
                <div className="glass-panel glass-panel-hover rounded-2xl p-6 relative">
                  <div className="md:hidden text-xs font-mono text-emerald-400 mb-1">
                    {item.period}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      {item.category}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-emerald-400/90 mb-3">
                    {item.organization}
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
