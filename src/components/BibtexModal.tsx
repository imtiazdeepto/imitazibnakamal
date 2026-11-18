import React, { useState } from 'react';
import { X, Check, Copy } from 'lucide-react';

interface BibtexModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  bibtex: string;
}

export const BibtexModal: React.FC<BibtexModalProps> = ({ isOpen, onClose, title, bibtex }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#141414] border border-[#262626] rounded-xl max-w-2xl w-full p-6 shadow-2xl relative">
        <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-400">BibTeX Citation</span>
            <h3 className="text-sm font-medium text-white truncate max-w-md mt-0.5">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-4 relative">
          <pre className="bg-[#0a0a0a] border border-[#222] text-neutral-300 text-xs font-mono p-4 rounded-lg overflow-x-auto whitespace-pre leading-relaxed">
            {bibtex}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-md text-xs font-medium flex items-center gap-1.5 transition-all shadow-md"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy BibTeX</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
