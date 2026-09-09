import React from 'react';
import { ArrowRight, Github, Mail, BarChart2, Database, Sparkles, Terminal, FileSpreadsheet, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, telemetry } = portfolioData;

  const coreSkills = [
    { name: "SQL", icon: Database },
    { name: "Python", icon: Code2 },
    { name: "Power BI", icon: BarChart2 },
    { name: "Excel", icon: FileSpreadsheet },
    { name: "Statistics", icon: Sparkles },
    { name: "Data Cleaning", icon: Terminal }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="tracking-wide">PORTFOLIO PROTOCOL // V2.5</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">STATUS: ACTIVE</span>
          </div>

          {/* Main Title & Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{personal.name}</span>
          </h1>

          <p className="text-lg sm:text-xl font-mono text-emerald-400/90 tracking-wider mb-4 uppercase">
            Data Analyst &amp; Business Intelligence Specialist
          </p>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-100 tracking-tight leading-snug mb-6 max-w-3xl">
            "{personal.headline}"
          </blockquote>

          {/* Professional Narrative */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            Passionate about transforming messy raw datasets into robust analytical pipelines and executive-ready dashboards. Leveraging{' '}
            <span className="text-emerald-300 font-medium">SQL</span>,{' '}
            <span className="text-emerald-300 font-medium">Python</span>, and{' '}
            <span className="text-emerald-300 font-medium">Power BI</span> to bridge the gap between complex numbers and strategic business growth.
          </p>

          {/* Core Focus Badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 max-w-2xl">
            {coreSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-400" />
                  {skill.name}
                </span>
              );
            })}
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 text-sm font-medium transition-all"
            >
              <Github className="w-4 h-4 text-slate-400" />
              <span>GitHub Profile</span>
            </a>

            <a
              href="#analytics-playground"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 text-sm font-mono transition-all"
            >
              <BarChart2 className="w-4 h-4" />
              <span>Live BI Demo</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Telemetry KPI Cards Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80">
          {telemetry.map((metric, i) => (
            <div
              key={i}
              className="glass-panel glass-panel-hover rounded-xl p-4 sm:p-5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/10 transition-colors" />
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mb-2">
                {metric.label}
              </div>
              <div className="inline-flex items-center text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
