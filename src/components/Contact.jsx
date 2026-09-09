import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, MapPin, MessageSquare, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Data Analysis Project Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate high-tech transmission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Data Analysis Project Inquiry', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#080c14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="text-slate-500">//</span>
              <span>07. SECURE_CHANNEL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let's Connect &amp; Collaborate
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Reach out for full-time opportunities, consulting projects, or custom analytics dashboards.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Closing Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              {/* Closing Callout Box */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-emerald-500/30 mb-8 relative overflow-hidden">
                <div className="text-xs font-mono text-emerald-400 mb-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>TRANSMISSION SUMMARY</span>
                </div>
                <blockquote className="text-lg sm:text-xl font-medium text-slate-100 leading-snug">
                  "Have a project, opportunity, or data challenge? Let's connect and turn data into meaningful insights."
                </blockquote>
              </div>

              {/* Direct Links */}
              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="glass-panel glass-panel-hover rounded-xl p-4 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:border-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">DIRECT EMAIL</div>
                    <div className="text-sm font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      {personal.email}
                    </div>
                  </div>
                </a>

                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel glass-panel-hover rounded-xl p-4 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 flex-shrink-0 group-hover:border-emerald-400 group-hover:text-emerald-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">GITHUB PROFILE</div>
                    <div className="text-sm font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      github.com/{personal.githubUsername}
                    </div>
                  </div>
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel glass-panel-hover rounded-xl p-4 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 flex-shrink-0 group-hover:border-emerald-400 group-hover:text-emerald-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">LINKEDIN NETWORK</div>
                    <div className="text-sm font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      linkedin.com/in/rakhi-sahu
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Location & Availability status */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {personal.location}
              </span>
              <span className="text-emerald-400">STATUS: OPEN</span>
            </div>
          </div>

          {/* Right: Modern Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 relative">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs font-mono text-slate-400 mb-6">
              Enter your project parameters below to initiate discussion.
            </p>

            {submitted ? (
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-6 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-mono">
                  Message Dispatched Successfully!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. I have received your message and will analyze your requirements and get back to you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-emerald-400 hover:bg-slate-800"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    SUBJECT / ENGAGEMENT TYPE
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                  >
                    <option value="Data Analysis Project Inquiry">Data Analysis Project Inquiry</option>
                    <option value="Power BI / BI Dashboard Consulting">Power BI / BI Dashboard Consulting</option>
                    <option value="Full-Time / Contract Data Analyst Role">Full-Time / Contract Data Analyst Role</option>
                    <option value="SQL / Python Data Pipeline Work">SQL / Python Data Pipeline Work</option>
                    <option value="General Analytics Question">General Analytics Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    MESSAGE / PROJECT BRIEF *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your dataset, business goal, or role requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>DISPATCHING MESSAGE...</span>
                  ) : (
                    <>
                      <span>TRANSMIT INQUIRY</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
