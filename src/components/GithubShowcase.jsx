import React, { useEffect, useState } from 'react';
import { Github, Star, GitFork, Calendar, ExternalLink, Terminal, RefreshCw, FolderGit2 } from 'lucide-react';
import { fetchGithubRepos } from '../services/githubService';
import { portfolioData } from '../data/portfolioData';

export default function GithubShowcase() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState('loading');

  useEffect(() => {
    async function loadRepos() {
      setLoading(true);
      const result = await fetchGithubRepos(portfolioData.personal.githubUsername);
      setRepos(result.repos);
      setSource(result.source);
      setLoading(false);
    }
    loadRepos();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Recent";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <section id="github" className="py-24 relative bg-[#080c14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="text-slate-500">//</span>
              <span>05. GITHUB_TELEMETRY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Live GitHub Repositories
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400">
              <span className={`w-2 h-2 rounded-full ${source === 'live' ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'}`}></span>
              <span>{source === 'live' ? 'LIVE GITHUB API SYNC' : 'CACHED PROFILE SYNC'}</span>
            </div>
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 hover:bg-emerald-500/20 transition-all"
            >
              <span>@{portfolioData.personal.githubUsername}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Developer Terminal Box */}
        <div className="bg-[#0b1019] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl mb-8">
          
          {/* Terminal Title Bar */}
          <div className="bg-slate-950 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">
                bash -- git remote -v // api.github.com/users/{portfolioData.personal.githubUsername}
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-500 hidden sm:block">
              CONNECTED AS: {portfolioData.personal.githubUsername}
            </div>
          </div>

          {/* Repositories Grid */}
          <div className="p-6 sm:p-8">
            {loading ? (
              <div className="flex items-center justify-center py-16 gap-3 text-emerald-400 font-mono text-sm">
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>Synchronizing GitHub repository telemetry...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
                  >
                    <div>
                      {/* Repo Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2 text-slate-300 group-hover:text-emerald-300 transition-colors">
                          <FolderGit2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <h4 className="text-sm font-semibold font-mono truncate max-w-[180px]">
                            {repo.name}
                          </h4>
                        </div>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-emerald-400 transition-colors p-1"
                          aria-label={`View ${repo.name} on GitHub`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4 min-h-[3.25rem]">
                        {repo.description || "Data analysis codebase, SQL transformations, and dashboard configurations."}
                      </p>
                    </div>

                    {/* Meta Bar */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>{repo.language || "Data / SQL"}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-slate-500">
                          <Star className="w-3 h-3 text-amber-400" />
                          {repo.stargazers_count || 0}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <Calendar className="w-3 h-3" />
                          {formatDate(repo.updated_at)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
