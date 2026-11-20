import React, { useState } from 'react';
import { Cpu, Terminal, ExternalLink, Github, CheckCircle2, Layers, ArrowUpRight } from 'lucide-react';
import { projectsData, Project } from '../data/projects';
import { skillCategories, competitiveProgramming } from '../data/skills';
import { CaseStudyModal } from '../components/CaseStudyModal';

type CategoryFilter = 'all' | 'Medical AI & Vision' | 'Edge & Algorithms' | 'Full-Stack & Systems';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Medical AI', value: 'Medical AI & Vision' },
    { label: 'Edge / Algorithms', value: 'Edge & Algorithms' },
    { label: 'Full-Stack', value: 'Full-Stack & Systems' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] pt-24 pb-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="mb-12">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3 flex items-center gap-2">
            <Cpu size={13} />
            Engineering & Systems
          </p>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
            Projects & Skills
          </h1>
          <p className="text-neutral-400 text-sm mt-3 max-w-2xl leading-relaxed">
            End-to-end ML pipelines, containerized FastAPI services, and clinical-grade
            inference systems — from PyTorch training to production deployment.
          </p>
        </header>

        {/* Filter bar */}
        <div
          className="flex flex-wrap items-center gap-2 pb-6 mb-10 border-b border-neutral-800"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map(cat => (
            <button
              key={cat.value}
              role="tab"
              aria-selected={activeCategory === cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat.value
                  ? 'bg-white text-black shadow-sm'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="p-7 rounded-2xl bg-[#131313] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="text-[11px] text-neutral-500 font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                {project.metrics && (
                  <span className="text-xs font-bold text-emerald-400 font-mono shrink-0">
                    {project.metrics.value}
                  </span>
                )}
              </div>

              <h2 className="font-display font-bold text-white text-lg leading-snug mb-1">
                {project.title}
              </h2>
              <p className="text-xs text-neutral-500 mb-4">{project.subtitle}</p>

              <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="p-4 rounded-xl bg-[#0c0c0c] border border-neutral-800/60 mb-5 space-y-2">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                    <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                    {h}
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.map((t, i) => (
                  <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 mt-auto">
                <div className="flex items-center gap-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 active:scale-95 transition-all"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-mono"
                    >
                      <Github size={13} />
                      Source
                    </a>
                  )}
                </div>

                {project.caseStudy && (
                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Case study
                    <ArrowUpRight size={12} />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* ── SKILLS ───────────────────────────────────────────────── */}
        <section id="skills" className="mb-24 scroll-mt-20" aria-labelledby="skills-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-xl bg-blue-950/50 border border-blue-800/50 flex items-center justify-center text-blue-400">
              <Layers size={16} />
            </div>
            <h2 id="skills-heading" className="font-display font-bold text-white text-2xl">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#141414] border border-neutral-800">
                <h3 className="font-bold text-white text-sm mb-1">{cat.title}</h3>
                <p className="text-xs text-neutral-500 mb-4 leading-snug">{cat.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, j) => (
                    <span
                      key={j}
                      className={`text-xs px-2 py-0.5 rounded border transition-colors ${
                        s.highlight
                          ? 'bg-neutral-800 text-white border-neutral-700'
                          : 'bg-transparent text-neutral-500 border-neutral-800'
                      }`}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMPETITIVE PROGRAMMING ──────────────────────────────── */}
        <section aria-labelledby="cp-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400">
              <Terminal size={16} />
            </div>
            <h2 id="cp-heading" className="font-display font-bold text-white text-2xl">Competitive Programming</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {competitiveProgramming.profiles.map((p, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#141414] border border-neutral-800 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block">{p.platform}</span>
                  <span className="font-extrabold text-white font-mono text-2xl block mt-1">{p.rating}</span>
                  <span className="text-xs text-neutral-500 font-mono">{p.handle}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-xs text-blue-400">{p.badge}</span>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-[#141414] border border-neutral-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {competitiveProgramming.contests.map((c, i) => (
                <div key={i} className="text-xs">
                  <span className="text-amber-400 font-bold font-mono block">{c.rank}</span>
                  <span className="text-neutral-300 font-medium block mt-1">{c.name}</span>
                  <span className="text-neutral-600 font-mono block mt-0.5">{c.term}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </div>
  );
};
