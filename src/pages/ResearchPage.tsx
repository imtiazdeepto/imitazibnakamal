import React, { useState } from 'react';
import { BookOpen, Github, ExternalLink, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { publicationsData } from '../data/publications';
import { BibtexModal } from '../components/BibtexModal';

type Filter = 'all' | 'Published' | 'Under Review';

export const ResearchPage: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [selectedBibtex, setSelectedBibtex] = useState<{ title: string; bibtex: string } | null>(null);

  const toggleAbstract = (id: string) =>
    setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));

  const filteredPapers = filter === 'all'
    ? publicationsData
    : publicationsData.filter(p => p.status === filter);

  const counts = {
    all: publicationsData.length,
    Published: publicationsData.filter(p => p.status === 'Published').length,
    'Under Review': publicationsData.filter(p => p.status === 'Under Review').length,
  };

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] pt-24 pb-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Page header */}
        <header className="mb-14">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3 flex items-center gap-2">
            <BookOpen size={13} />
            Academic Publications & Preprints
          </p>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
            Research
          </h1>
          <p className="text-neutral-400 text-sm mt-3 max-w-2xl leading-relaxed">
            Lightweight neural architectures for clinical settings — focusing on
            knowledge distillation, medical image segmentation, and XAI interpretability
            (SHAP, LIME, Grad-CAM++) that run on CPU-only hospital hardware.
          </p>
        </header>

        {/* Filter bar */}
        <div
          className="flex items-center gap-2 pb-8 mb-10 border-b border-neutral-800"
          role="tablist"
          aria-label="Filter papers by status"
        >
          {(['all', 'Published', 'Under Review'] as Filter[]).map(f => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === f
                  ? 'bg-white text-black shadow-sm'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {f === 'all' ? `All (${counts.all})` : f === 'Published' ? `Published (${counts.Published})` : `Under Review (${counts['Under Review']})`}
            </button>
          ))}
        </div>

        {/* Papers list */}
        <div className="space-y-6" role="list">
          {filteredPapers.map((paper) => {
            const isOpen = expandedAbstracts[paper.id];
            const isPublished = paper.status === 'Published';

            return (
              <article
                key={paper.id}
                role="listitem"
                className={`rounded-2xl border transition-colors ${
                  isPublished
                    ? 'bg-[#111] border-neutral-800 hover:border-neutral-700'
                    : 'bg-[#0d0d0d] border-neutral-900 hover:border-neutral-800'
                }`}
              >
                {/* Left accent bar for published papers */}
                <div className={`flex ${isPublished ? 'border-l-2 border-emerald-600 rounded-l-2xl' : ''}`}>
                  <div className="p-6 sm:p-8 w-full">

                    {/* Top meta row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded border tracking-widest uppercase ${paper.badgeColor}`}>
                          {paper.status === 'Published' ? 'IEEE BECITHCON 2026' : 'ICEEICT 2027 — Under Review'}
                        </span>
                      </div>
                      <span className="text-xs text-neutral-600 tabular-nums font-mono shrink-0">{paper.year}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-bold text-white text-lg sm:text-xl leading-snug">
                      {paper.title}
                    </h2>

                    {/* Authors */}
                    <p className="text-xs text-neutral-500 mt-2 font-mono">
                      {paper.authors.map((a, i) => (
                        <React.Fragment key={i}>
                          {a === 'Imtiaz Ibna Kamal' ? (
                            <strong className="text-neutral-200 underline decoration-blue-500 underline-offset-2">{a}</strong>
                          ) : a}
                          {i < paper.authors.length - 1 ? ', ' : ''}
                        </React.Fragment>
                      ))}
                    </p>

                    {/* Contribution */}
                    <p className="text-sm text-neutral-300 mt-4 leading-relaxed">
                      {paper.contribution}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {paper.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs flex items-center gap-1.5"
                        >
                          <span className="font-bold text-white font-mono">{m.value}</span>
                          <span className="text-neutral-500">{m.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable abstract */}
                    <div className="mt-5">
                      <button
                        onClick={() => toggleAbstract(paper.id)}
                        className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
                        aria-expanded={isOpen}
                      >
                        {isOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                        {isOpen ? 'Hide abstract' : 'Read abstract'}
                      </button>

                      {isOpen && (
                        <div className="mt-3 p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 leading-relaxed animate-fadeIn">
                          <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Abstract</p>
                          {paper.abstract}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-2 mt-5 pt-5 border-t border-neutral-800">
                      <button
                        onClick={() => setSelectedBibtex({ title: paper.title, bibtex: paper.bibtex })}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                      >
                        <Quote size={12} className="text-blue-400" />
                        Cite (BibTeX)
                      </button>

                      {paper.links.github && (
                        <a
                          href={paper.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors font-mono"
                        >
                          <Github size={12} />
                          Code
                        </a>
                      )}

                      {paper.links.demo && (
                        <a
                          href={paper.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/40 border border-blue-800/50 text-xs text-blue-300 hover:bg-blue-900/40 transition-colors"
                        >
                          <ExternalLink size={12} />
                          Live demo
                        </a>
                      )}

                      {/* Tags */}
                      <div className="ml-auto flex flex-wrap gap-1">
                        {paper.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 text-neutral-600 border border-neutral-800/60 font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* BibTeX modal */}
      {selectedBibtex && (
        <BibtexModal
          isOpen
          onClose={() => setSelectedBibtex(null)}
          title={selectedBibtex.title}
          bibtex={selectedBibtex.bibtex}
        />
      )}
    </div>
  );
};
