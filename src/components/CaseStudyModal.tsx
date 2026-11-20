import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Github, Layers, Cpu, ShieldAlert, Zap, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project || !project.caseStudy) return null;
  const { caseStudy } = project;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(caseStudy.codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#121212] border border-[#262626] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto">
        
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#121212]/95 backdrop-blur-md border-b border-[#262626] p-6 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-800/60 font-mono">
                Interactive Case Study
              </span>
              <span className="text-xs text-neutral-400">{project.category}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display mt-1">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* 1. The Challenge */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              <ShieldAlert size={15} />
              <span>The Engineering & Clinical Challenge</span>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed bg-[#0a0a0a] p-4 rounded-xl border border-neutral-800/80">
              {caseStudy.challenge}
            </p>
          </div>

          {/* 2. Architecture Decisions */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
              <Layers size={15} />
              <span>Architectural Methodology</span>
            </div>
            <div className="space-y-2.5">
              {caseStudy.architectureDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-xs text-neutral-300 leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-blue-950/80 border border-blue-700/60 text-blue-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Engineering Trade-offs */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
              <Zap size={15} />
              <span>Key Decision & Technical Trade-offs</span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed bg-[#0e0e0e] p-4 rounded-xl border border-purple-900/40">
              {caseStudy.tradeoffs}
            </p>
          </div>

          {/* 4. Technical Code Implementation */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Cpu size={15} />
                <span>Core Implementation: {caseStudy.codeSnippet.title}</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-white rounded text-xs flex items-center gap-1.5 transition-colors font-mono"
              >
                {copiedCode ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
            <div className="relative">
              <pre className="bg-[#080808] border border-neutral-800 text-neutral-300 text-xs font-mono p-4 rounded-xl overflow-x-auto leading-relaxed">
                <code>{caseStudy.codeSnippet.code}</code>
              </pre>
            </div>
          </div>

          {/* 5. Quantified Impact & Results */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
              Empirical Results & Clinical Metrics
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {caseStudy.results.map((res, i) => (
                <div key={i} className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-center sm:text-left">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider block">
                    {res.label}
                  </span>
                  <span className="text-lg font-extrabold text-white font-mono block mt-1">
                    {res.value}
                  </span>
                  <span className="text-[11px] text-neutral-400 block mt-1 leading-tight">
                    {res.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#121212]/95 backdrop-blur-md border-t border-[#262626] p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>Launch Live System</span>
                <ExternalLink size={13} />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-white font-semibold text-xs hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
              >
                <Github size={14} />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-xs font-medium transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
