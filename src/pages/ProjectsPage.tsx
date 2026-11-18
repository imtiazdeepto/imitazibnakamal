import React, { useState } from 'react';
import { Cpu, Terminal, ExternalLink, Github, CheckCircle2, Layers, Code2, Database, Server, Wrench } from 'lucide-react';
import { projectsData } from '../data/projects';
import { skillCategories, competitiveProgramming } from '../data/skills';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Medical AI & Vision', 'Edge & Algorithms', 'Full-Stack & Systems'];

  const filteredProjects = projectsData.filter(proj => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
            <Cpu size={15} />
            <span>Engineering Systems & Technical Competencies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Systems, Projects & Skills
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            Full-stack machine learning workflows: from data engineering and PyTorch model distillation to containerized FastAPI microservices and responsive user interfaces.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-10 border-b border-neutral-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all capitalize ${
                activeCategory === cat
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat === 'all' ? 'All Engineering Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-2xl bg-[#141414] border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60 font-mono">
                      {project.metrics.value}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-extrabold text-white font-display mt-2">
                  {project.title}
                </h2>
                <p className="text-xs font-medium text-neutral-400 mt-1 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6 bg-[#0e0e0e] p-4 rounded-xl border border-neutral-800/60">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-2">
                    Key Architectural Highlights:
                  </span>
                  {project.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-neutral-300 flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((t, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-1 rounded bg-[#1e1e1e] text-neutral-300 border border-neutral-800 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center gap-3">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <ExternalLink size={13} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white font-semibold text-xs hover:bg-neutral-800 transition-colors flex items-center gap-1.5 font-mono"
                  >
                    <Github size={13} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>


        {/* ─────────────────────────────────────────────────────────────
            SKILLS MATRIX SECTION
           ───────────────────────────────────────────────────────────── */}
        <section id="skills" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-blue-400">
              <Layers size={18} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-white font-display">Technical Skills Matrix</h2>
              <p className="text-xs text-neutral-400">Frameworks, libraries, deployment stacks, and languages</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141414] border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mb-4">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2.5 py-1 rounded-md border transition-colors ${
                          s.highlight
                            ? 'bg-neutral-900 text-white border-neutral-700 font-medium'
                            : 'bg-[#0f0f0f] text-neutral-400 border-neutral-800'
                        }`}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ─────────────────────────────────────────────────────────────
            COMPETITIVE PROGRAMMING SECTION
           ───────────────────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-amber-950/60 border border-amber-800/60 flex items-center justify-center text-amber-400">
              <Terminal size={18} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-white font-display">Algorithmic Problem Solving</h2>
              <p className="text-xs text-neutral-400">Competitive programming and university contest rankings</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {competitiveProgramming.profiles.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141414] border border-neutral-800 flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                    {p.platform}
                  </span>
                  <span className="text-2xl font-extrabold text-white font-mono block mt-1">
                    {p.rating}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    Handle: <strong className="text-neutral-300">{p.handle}</strong>
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-blue-400 font-medium">
                  {p.badge}
                </span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#111111] border border-neutral-800">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contest Performance & Standings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              {competitiveProgramming.contests.map((c, i) => (
                <div key={i} className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80">
                  <span className="text-amber-400 font-bold font-mono text-sm block">{c.rank}</span>
                  <span className="text-white font-medium block mt-1">{c.name}</span>
                  <span className="text-[11px] text-neutral-500 block mt-1 font-mono">{c.term}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
