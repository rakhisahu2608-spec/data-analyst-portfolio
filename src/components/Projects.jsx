import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, CheckCircle2, Layers, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Power BI', 'Python & SQL', 'Data Analysis'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative bg-[#070a0f] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="text-slate-500">//</span>
              <span>04. FEATURED_PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Data Systems, Dashboards &amp; Case Studies
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Production analytical models and business intelligence solutions with measurable business impact.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group ${
                project.featured ? 'border-emerald-500/30' : 'border-slate-800'
              }`}
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-950/70 border border-emerald-800/40 text-emerald-400">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                      <Sparkles className="w-3 h-3" />
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Business Insights / Outcomes */}
                <div className="mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="text-xs font-mono text-emerald-400 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>KEY INSIGHTS &amp; BUSINESS IMPACT</span>
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-400 font-mono mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repo</span>
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>View Interactive Telemetry</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
