import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import AnalyticsPlayground from './components/AnalyticsPlayground';
import Projects from './components/Projects';
import GithubShowcase from './components/GithubShowcase';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <AnalyticsPlayground />
        <Projects />
        <GithubShowcase />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
