import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight, FileText, ArrowUpRight, BookOpen } from 'lucide-react';
import { profileData } from '../data/profile';
import { publicationsData } from '../data/publications';
import { projectsData } from '../data/projects';
import { Toast } from '../components/Toast';

// Individual stat item — no icons, just clean numbers
function StatItem({ value, label, sublabel }: { value: string; label: string; sublabel: string }) {
  return (
    <div className="border-l border-neutral-800 pl-5 first:border-l-0 first:pl-0">
      <div className="text-2xl font-extrabold text-white font-display tabular-nums">{value}</div>
      <div className="text-xs font-semibold text-neutral-200 mt-0.5">{label}</div>
      <div className="text-xs text-neutral-500 mt-0.5">{sublabel}</div>
    </div>
  );
}

export const HomePage: React.FC = () => {
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setToastMsg('Email address copied');
    setTimeout(() => setToastMsg(null), 2500);
  };

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c]">

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden"
        aria-labelledby="hero-name"
      >
        {/* Diagonal background layer — desktop only */}
        <div
          className="absolute inset-0 hidden lg:block bg-[#d6d6d6] hero-slant-bg pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* LEFT — text content */}
        <div className="
          w-full lg:w-[50%] relative z-10
          flex flex-col justify-center
          px-8 sm:px-14 lg:pl-20 lg:pr-10
          pt-28 pb-16 lg:py-0
          bg-[#d6d6d6] lg:bg-transparent
          text-[#111]
        ">
          <div className="max-w-lg">
            <p className="text-base text-[#555] font-medium mb-2">Hi, I am</p>

            <h1
              id="hero-name"
              className="font-display font-extrabold tracking-tight leading-none text-black"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}
            >
              {profileData.name}
            </h1>

            <p className="mt-3 text-[#4a4a4a] font-medium text-base sm:text-lg">
              Software Engineer &amp; Medical AI Researcher
            </p>

            {/* Social tiles */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={handleCopyEmail}
                className="tg-icon-btn"
                aria-label="Copy email address"
                title={profileData.email}
              >
                <span className="font-bold text-base leading-none select-none">@</span>
              </button>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="tg-icon-btn"
                aria-label="GitHub"
              >
                <Github size={18} strokeWidth={1.8} />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tg-icon-btn"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-sm leading-none">in</span>
              </a>
              <a
                href={profileData.socials.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="tg-icon-btn"
                aria-label="ResearchGate / Google Scholar"
              >
                <BookOpen size={16} strokeWidth={1.8} />
              </a>
            </div>

            {/* Bio — one honest sentence, no buzzwords */}
            <p className="mt-7 text-sm text-[#555] leading-relaxed max-w-sm">
              B.Sc. Software Engineering (Data Science) at Daffodil International University.
              Building lightweight diagnostic AI that runs on clinic-grade hardware.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black text-white font-semibold text-sm hover:bg-neutral-800 active:scale-95 transition-all shadow-md"
              >
                View Research
                <ArrowRight size={15} />
              </Link>
              <a
                href="/imtiazcv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#999] text-[#333] font-semibold text-sm hover:border-black hover:text-black transition-colors"
              >
                <FileText size={14} />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — portrait */}
        <div className="
          w-full lg:w-[50%] relative z-10
          flex items-end lg:items-center justify-center lg:justify-end
          px-6 sm:px-12 lg:pr-20
          pb-0 pt-10 lg:py-0
          bg-[#0c0c0c]
        ">
          <div className="relative w-full max-w-sm lg:max-w-md">
            {/* Soft ambient glow */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0c0c0c] to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />
            <img
              src="/formal.jpeg"
              alt="Imtiaz Ibna Kamal — Software Engineer and Medical AI Researcher"
              className="w-full h-auto object-cover object-top rounded-t-2xl lg:rounded-2xl"
              loading="eager"
            />

            {/* Status pill */}
            <div className="absolute bottom-6 left-4 right-4 z-20 bg-[#141414]/90 backdrop-blur-md border border-neutral-700/60 px-4 py-2.5 rounded-xl flex items-center justify-between">
              <div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold">Focus area</div>
                <div className="text-xs font-semibold text-white mt-0.5">Explainable AI for Healthcare</div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to roles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────── */}
      <div className="section-divider" />
      <section className="bg-[#080808] py-10 px-6 lg:px-12" aria-label="Key numbers">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-y-8 gap-x-0 justify-between sm:justify-start sm:gap-x-14">
          {profileData.stats.map((s, i) => (
            <StatItem key={i} value={s.value} label={s.label} sublabel={s.sublabel} />
          ))}
        </div>
      </section>
      <div className="section-divider" />

      {/* ── FEATURED PAPERS ──────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl">
            Selected Publications
          </h2>
          <Link
            to="/research"
            className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
          >
            All 4 papers
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {publicationsData.slice(0, 2).map((paper) => (
            <article
              key={paper.id}
              className="p-6 rounded-2xl bg-[#131313] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between gap-5"
            >
              <div>
                {/* Status badge + year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border tracking-wider uppercase ${paper.badgeColor}`}>
                    {paper.status === 'Published' ? 'IEEE Published' : 'Under Review'}
                  </span>
                  <span className="text-xs text-neutral-600 tabular-nums">{paper.year}</span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {paper.title}
                </h3>

                <p className="text-xs text-neutral-400 mt-2 leading-relaxed line-clamp-2">
                  {paper.contribution}
                </p>

                {/* Metrics — compact inline */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {paper.metrics.slice(0, 3).map((m, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300"
                    >
                      {m.value}
                      <span className="text-neutral-500 ml-1">{m.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                <Link
                  to="/research"
                  className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  Abstract + BibTeX
                  <ArrowRight size={12} />
                </Link>
                {paper.links.github && (
                  <a
                    href={paper.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-500 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Github size={12} />
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── FEATURED PROJECTS ────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl">
              Engineering Systems
            </h2>
            <Link
              to="/projects"
              className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
            >
              All projects
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projectsData.filter(p => p.featured).slice(0, 2).map((proj) => (
              <article
                key={proj.id}
                className="p-7 rounded-2xl bg-[#131313] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col gap-5"
              >
                {/* Category + metric */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500 font-medium uppercase tracking-wider">
                    {proj.category}
                  </span>
                  {proj.metrics && (
                    <span className="text-xs font-bold text-emerald-400 font-mono">
                      {proj.metrics.value}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">{proj.title}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{proj.subtitle}</p>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">{proj.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.slice(0, 6).map((t, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800 font-mono">
                      {t}
                    </span>
                  ))}
                  {proj.technologies.length > 6 && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-neutral-900 text-neutral-500 border border-neutral-800">
                      +{proj.technologies.length - 6}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-neutral-800 mt-auto">
                  {proj.links.demo && (
                    <a
                      href={proj.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 active:scale-95 transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                  {proj.links.github && (
                    <a
                      href={proj.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-mono"
                    >
                      <Github size={13} />
                      Source
                    </a>
                  )}
                  <Link
                    to="/projects"
                    className="ml-auto text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-1"
                  >
                    Case study
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl max-w-xl mx-auto leading-tight">
          Open to SWE roles, ML positions, and research collaborations.
        </h2>
        <p className="text-neutral-400 text-sm mt-4 max-w-md mx-auto">
          Graduating July 2027. Actively seeking graduate research opportunities and software engineering positions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-100 active:scale-95 transition-all shadow-lg"
          >
            Get in touch
          </Link>
          <a
            href="/imtiazcv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 font-semibold text-sm transition-colors"
          >
            <FileText size={15} />
            View CV
          </a>
        </div>
      </section>

      <Toast show={!!toastMsg} message={toastMsg || ''} />
    </div>
  );
};
