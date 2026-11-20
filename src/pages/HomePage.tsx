import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight, FileText, ChevronRight, CheckCircle2, Cpu, Activity, BookOpen } from 'lucide-react';
import { profileData } from '../data/profile';
import { publicationsData } from '../data/publications';
import { projectsData } from '../data/projects';
import { Toast } from '../components/Toast';

export const HomePage: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profileData.email);
    setToastMessage(`Copied ${profileData.email} to clipboard!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c]">
      
      {/* ─────────────────────────────────────────────────────────────
          1. TOMASZ GAJDA SPLIT HERO SECTION
         ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden pt-20 lg:pt-0">
        
        {/* Background diagonal layer for desktop */}
        <div 
          className="absolute inset-0 hidden lg:block bg-[#d8d8d8] hero-slant-bg pointer-events-none z-0" 
          aria-hidden="true" 
        />

        {/* LEFT PANEL: Light Grey on Desktop */}
        <div className="w-full lg:w-[48%] relative z-10 flex flex-col justify-center px-8 sm:px-14 lg:pl-20 lg:pr-8 py-16 lg:py-0 bg-[#d8d8d8] lg:bg-transparent text-[#111111]">
          
          <div className="max-w-xl">
            {/* "Hi, I am" */}
            <p className="text-xl sm:text-2xl font-medium tracking-tight text-[#222222] mb-3">
              Hi, I am
            </p>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black font-display leading-[1.1] mb-3">
              {profileData.name}
            </h1>

            {/* Subtitle / Professional Role */}
            <h2 className="text-lg sm:text-xl font-medium text-[#5c5c5c] tracking-tight mb-8">
              {profileData.role}
            </h2>

            {/* Tomasz Gajda Square Embossed Action Buttons */}
            <div className="flex items-center gap-4 mb-10">
              {/* @ Email Icon (Copies email + toast) */}
              <button
                onClick={handleCopyEmail}
                className="tg-icon-btn group cursor-pointer"
                aria-label="Copy Email address"
                title="Copy Email: imtiazibnakamal@gmail.com"
              >
                <span className="font-bold text-lg leading-none group-hover:scale-110 transition-transform">@</span>
              </button>

              {/* GitHub Icon */}
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="tg-icon-btn group"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>

              {/* LinkedIn Icon */}
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tg-icon-btn group"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <span className="font-bold text-sm tracking-tighter leading-none group-hover:scale-110 transition-transform">in</span>
              </a>

              {/* ResearchGate / Scholar Icon */}
              <a
                href={profileData.socials.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="tg-icon-btn group"
                aria-label="ResearchGate & Publications"
                title="Academic Profile"
              >
                <BookOpen size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Short Introduction Note */}
            <p className="text-sm text-[#444444] leading-relaxed max-w-md font-sans mb-8">
              B.Sc. in Software Engineering (Major in Data Science) at Daffodil International University. 
              Engineering clinically deployable deep learning systems, explainable diagnostics, and model compression architectures.
            </p>

            {/* Action CTA Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/research"
                className="px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg active:scale-95"
              >
                <span>Explore Research</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="/imtiazcv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-[#888888] text-black hover:bg-black/5 text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition-all"
              >
                <FileText size={14} />
                <span>Download CV</span>
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL: Deep Pitch Black with Portrait */}
        <div className="w-full lg:w-[52%] relative z-10 flex items-center justify-center lg:justify-end px-6 sm:px-12 lg:pr-24 py-12 lg:py-0 bg-[#0c0c0c]">
          
          <div className="relative max-w-md lg:max-w-lg w-full flex justify-center">
            
            {/* Ambient Backlight glow */}
            <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full scale-75 -z-10" />

            {/* Portrait Frame with smooth fade into dark background */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-[580px]">
              <img
                src="/formal.jpeg"
                alt="Imtiaz Ibna Kamal"
                className="w-full h-auto object-cover object-top filter brightness-[0.98] contrast-[1.02]"
              />
              
              {/* Subtle bottom gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-80" />

              {/* Status Badge Over Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#141414]/90 backdrop-blur-md border border-neutral-700/60 p-3 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase font-bold tracking-wider block">Current Focus</span>
                  <span className="text-white font-medium">Explainable Edge AI in Healthcare</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/50">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for 2026/27</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>


      {/* ─────────────────────────────────────────────────────────────
          2. IMPACT METRICS STRIP (The 30-Second Test from AxelMrak skill)
         ───────────────────────────────────────────────────────────── */}
      <section className="w-full border-y border-neutral-900 bg-[#080808] py-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {profileData.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-all">
              <span className="text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight block">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-neutral-500 block mt-0.5">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          3. FEATURED PUBLICATIONS TEASER
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              <Activity size={14} />
              <span>Peer-Reviewed & Preprints</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white font-display tracking-tight">
              Featured Research Publications
            </h2>
            <p className="text-neutral-400 text-sm mt-1 max-w-xl">
              Focusing on clinical explainability, lightweight knowledge distillation, and real-time medical segmentation.
            </p>
          </div>
          <Link
            to="/research"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors group"
          >
            <span>View All 4 Papers & BibTeX</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publicationsData.slice(0, 2).map((paper) => (
            <div
              key={paper.id}
              className="p-6 rounded-2xl bg-[#121212] border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border uppercase tracking-wider ${paper.badgeColor}`}>
                    {paper.statusBadge}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">{paper.year}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {paper.title}
                </h3>

                <p className="text-neutral-400 text-xs mt-3 leading-relaxed line-clamp-3">
                  {paper.contribution}
                </p>

                {/* Key Metrics row */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {paper.metrics.map((m, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">
                      <strong className="text-white">{m.value}</strong> {m.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <Link
                  to="/research"
                  className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1"
                >
                  <span>Read details & abstract</span>
                  <ArrowRight size={12} />
                </Link>
                {paper.links.github && (
                  <a
                    href={paper.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 font-mono"
                  >
                    <Github size={13} />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          4. PRODUCTION SYSTEMS & SOFTWARE ENGINEERING HIGHLIGHT
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 bg-[#090909] border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                <Cpu size={14} />
                <span>Full-Stack & Edge Engineering</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white font-display tracking-tight">
                Production Systems & Tooling
              </h2>
              <p className="text-neutral-400 text-sm mt-1 max-w-xl">
                Bridging theoretical computer vision and PyTorch pipelines into containerized FastAPI applications.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors group"
            >
              <span>Explore All Projects & Skills</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.slice(0, 2).map((proj) => (
              <div
                key={proj.id}
                className="p-8 rounded-2xl bg-[#141414] border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                      {proj.category}
                    </span>
                    {proj.metrics && (
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60 font-mono">
                        {proj.metrics.value}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-white font-display mt-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-medium text-neutral-400 mt-1 mb-4">
                    {proj.subtitle}
                  </p>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-neutral-400 flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-neutral-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.map((t, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 rounded bg-[#1e1e1e] text-neutral-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {proj.links.demo && (
                      <a
                        href={proj.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors shadow-sm"
                      >
                        Live Demo
                      </a>
                    )}
                    {proj.links.github && (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white font-semibold text-xs hover:bg-neutral-800 transition-colors flex items-center gap-1.5 font-mono"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <Link
                    to="/projects"
                    className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Architecture</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CALL TO ACTION BANNER (Converting visitors into opportunities)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#171717] via-[#121212] to-[#0d0d0d] border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">Let's Connect</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
              Looking for a Software Engineer or Applied ML Researcher?
            </h2>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
              Available for software engineering roles, research collaborations, medical computer vision initiatives, and academic graduate inquiries.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl active:scale-95"
            >
              Get in Touch
            </Link>
            <a
              href="/imtiazcv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View Full CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* Copy Toast Notification */}
      <Toast show={!!toastMessage} message={toastMessage || ''} />

    </div>
  );
};
