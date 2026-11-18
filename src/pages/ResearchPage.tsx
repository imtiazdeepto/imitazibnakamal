import React, { useState } from 'react';
import { BookOpen, FileText, Github, ExternalLink, Quote, ChevronDown, ChevronUp, CheckCircle, Sparkles, Filter } from 'lucide-react';
import { publicationsData, Publication } from '../data/publications';
import { BibtexModal } from '../components/BibtexModal';

export const ResearchPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'Published' | 'Under Review'>('all');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [selectedBibtex, setSelectedBibtex] = useState<{ title: string; bibtex: string } | null>(null);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredPapers = publicationsData.filter(paper => {
    if (filter === 'all') return true;
    return paper.status === filter;
  });

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
            <BookOpen size={15} />
            <span>Academic Research & Publications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Research & Preprints
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
            Investigating lightweight neural architectures, medical computer vision, multi-teacher knowledge distillation, and clinical explainability (SHAP, LIME, Grad-CAM++) for low-resource healthcare deployment.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 pb-6 mb-8 border-b border-neutral-800">
          <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1.5 mr-2">
            <Filter size={13} />
            <span>Filter:</span>
          </span>
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'all'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            All Papers ({publicationsData.length})
          </button>
          <button
            onClick={() => setFilter('Published')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'Published'
                ? 'bg-emerald-500 text-black font-semibold shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Published IEEE (1)
          </button>
          <button
            onClick={() => setFilter('Under Review')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'Under Review'
                ? 'bg-amber-500 text-black font-semibold shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Under Review ICEEICT (3)
          </button>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {filteredPapers.map((paper) => {
            const isAbstractOpen = expandedAbstracts[paper.id];

            return (
              <div
                key={paper.id}
                className="p-8 rounded-2xl bg-[#131313] border border-neutral-800 hover:border-neutral-700 transition-all shadow-lg"
              >
                {/* Header line: Badges & Year */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-md border tracking-wider uppercase ${paper.badgeColor}`}>
                      {paper.statusBadge}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      {paper.venue}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">{paper.year}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-2 leading-snug">
                  {paper.title}
                </h2>

                {/* Authors */}
                <div className="text-xs text-neutral-400 mt-2 font-mono">
                  {paper.authors.map((author, i) => (
                    <span key={i}>
                      {author === 'Imtiaz Ibna Kamal' ? (
                        <strong className="text-white font-bold underline decoration-blue-400 underline-offset-4">
                          {author}
                        </strong>
                      ) : (
                        author
                      )}
                      {i < paper.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>

                {/* Contribution Summary */}
                <p className="text-sm text-neutral-300 mt-4 leading-relaxed bg-[#0e0e0e] p-4 rounded-xl border border-neutral-800/80">
                  <strong className="text-neutral-200">Core Contribution: </strong>
                  {paper.contribution}
                </p>

                {/* Expandable Abstract Toggle */}
                <div className="mt-4">
                  <button
                    onClick={() => toggleAbstract(paper.id)}
                    className="text-xs font-semibold text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>{isAbstractOpen ? 'Hide Abstract' : 'Read Full Abstract'}</span>
                    {isAbstractOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {isAbstractOpen && (
                    <div className="mt-3 p-4 rounded-xl bg-[#090909] border border-neutral-800 text-xs text-neutral-300 leading-relaxed animate-fadeIn">
                      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                        Abstract
                      </span>
                      {paper.abstract}
                    </div>
                  )}
                </div>

                {/* Key Metrics Chips */}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {paper.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center gap-2 text-xs"
                    >
                      <span className="text-neutral-500 uppercase text-[10px] font-semibold">{m.label}:</span>
                      <span className="text-white font-bold font-mono">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons: BibTeX, GitHub, Demo, Paper */}
                <div className="mt-6 pt-5 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* BibTeX Modal Trigger */}
                    <button
                      onClick={() => setSelectedBibtex({ title: paper.title, bibtex: paper.bibtex })}
                      className="px-3.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <Quote size={13} className="text-blue-400" />
                      <span>Cite / BibTeX</span>
                    </button>

                    {paper.links.github && (
                      <a
                        href={paper.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors font-mono"
                      >
                        <Github size={13} />
                        <span>Code Repository</span>
                      </a>
                    )}

                    {paper.links.demo && (
                      <a
                        href={paper.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-blue-950/40 hover:bg-blue-900/40 border border-blue-800/50 text-blue-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <ExternalLink size={13} />
                        <span>Live Clinical Demo</span>
                      </a>
                    )}
                  </div>

                  {/* Research Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {paper.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800/60 font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* BibTeX Modal */}
        {selectedBibtex && (
          <BibtexModal
            isOpen={!!selectedBibtex}
            onClose={() => setSelectedBibtex(null)}
            title={selectedBibtex.title}
            bibtex={selectedBibtex.bibtex}
          />
        )}

      </div>
    </div>
  );
};
