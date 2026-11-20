import React, { useState } from 'react';
import { Eye, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export const InteractiveComparison: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'raw' | 'inpainted' | 'segmented'>('segmented');

  const stages = [
    {
      id: 'raw' as const,
      label: '1. Raw Endoscopy Frame',
      description: 'Contains hospital timestamp watermark and high specular mucosal reflection glare.',
      badge: 'Unprocessed Input',
      badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-800/60'
    },
    {
      id: 'inpainted' as const,
      label: '2. Telea Inpainted',
      description: 'Automated OCR watermark removal + Telea fast marching reflection restoration.',
      badge: 'Artifact Cleaned',
      badgeColor: 'text-blue-400 bg-blue-950/60 border-blue-800/60'
    },
    {
      id: 'segmented' as const,
      label: '3. ResNet-18 U-Net Mask',
      description: 'Predicted polyp boundary overlay achieving 92.96% Dice & 86.85% IoU on Kvasir-SEG.',
      badge: '92.96% Dice',
      badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60'
    }
  ];

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-neutral-800 shadow-xl my-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
            <Sparkles size={14} />
            <span>Interactive Visual Demo</span>
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Endoscopic Polyp Segmentation & Inpainting Pipeline
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Toggle through the 3 clinical stages to inspect how specular artifacts and OCR watermarks are removed before U-Net segmentation.
          </p>
        </div>

        {/* Stage Selection Buttons */}
        <div className="flex flex-wrap items-center gap-2 bg-[#0a0a0a] p-1.5 rounded-xl border border-neutral-800">
          {stages.map((stg) => (
            <button
              key={stg.id}
              onClick={() => setActiveStage(stg.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeStage === stg.id
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {stg.id === 'raw' ? '1. Raw Frame' : stg.id === 'inpainted' ? '2. Inpainted' : '3. Segmented Mask'}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Canvas Representation */}
      <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-[#090909] border border-neutral-800 flex items-center justify-center">
        
        {/* Synthetic Interactive Visualization representing Colonoscopy Feed */}
        <svg className="w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="colonWall" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#802a2a" />
              <stop offset="60%" stopColor="#4a1515" />
              <stop offset="100%" stopColor="#1a0505" />
            </radialGradient>
            <radialGradient id="glare" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Endoscopic lumen circular boundary */}
          <rect width="600" height="300" fill="#050505" />
          <circle cx="300" cy="150" r="140" fill="url(#colonWall)" />
          
          {/* Tissue folds */}
          <path d="M 170 120 Q 220 180 300 160 T 430 140" stroke="#a33535" strokeWidth="6" fill="none" opacity="0.6" />
          <path d="M 190 200 Q 280 230 400 200" stroke="#5e1c1c" strokeWidth="8" fill="none" opacity="0.7" />

          {/* Simulated Polyp Target Tissue */}
          <ellipse cx="320" cy="130" rx="48" ry="38" fill="#a83e3e" stroke="#c45454" strokeWidth="2" />

          {/* STAGE 1: Artifacts (Glare & Watermark) */}
          {activeStage === 'raw' && (
            <g className="animate-fadeIn">
              {/* Specular Glare artifact over the polyp */}
              <ellipse cx="305" cy="115" rx="20" ry="12" fill="url(#glare)" />
              <ellipse cx="340" cy="140" rx="14" ry="8" fill="url(#glare)" />
              
              {/* Hospital Watermark Text Stamp (Simulated OCR target) */}
              <rect x="175" y="24" width="250" height="26" fill="black" opacity="0.75" rx="4" />
              <text x="185" y="42" fill="#00ff66" fontSize="11" fontFamily="monospace" fontWeight="bold">
                HOSPITAL ENDO-ROOM 04 • 2026-11-20
              </text>
            </g>
          )}

          {/* STAGE 2: Inpainted mucosal texture */}
          {activeStage === 'inpainted' && (
            <g className="animate-fadeIn">
              {/* Restored smooth mucosa texture */}
              <ellipse cx="320" cy="130" rx="48" ry="38" fill="#9e3636" opacity="0.9" />
              {/* Subtly inpainting marker ring */}
              <circle cx="320" cy="130" r="50" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.6" />
            </g>
          )}

          {/* STAGE 3: Segmented Prediction Mask */}
          {activeStage === 'segmented' && (
            <g className="animate-fadeIn">
              {/* Glowing U-Net Polyp Mask */}
              <ellipse
                cx="320"
                cy="130"
                rx="48"
                ry="38"
                fill="#10b981"
                fillOpacity="0.45"
                stroke="#34d399"
                strokeWidth="3"
                filter="url(#glow)"
              />
              <text x="320" y="135" fill="#ffffff" fontSize="12" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                Polyp (92.96% Dice)
              </text>
            </g>
          )}
        </svg>

        {/* Live Stage Status Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {stages.map((stg) => {
            if (stg.id !== activeStage) return null;
            return (
              <span key={stg.id} className={`text-xs font-bold px-3 py-1 rounded-lg border font-mono ${stg.badgeColor}`}>
                {stg.badge}
              </span>
            );
          })}
        </div>

        {/* Instruction overlay pill */}
        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/60 text-[11px] text-neutral-300 font-medium flex items-center gap-1.5">
          <Eye size={13} className="text-emerald-400" />
          <span>Click top tabs to toggle stages</span>
        </div>
      </div>

      {/* Description footer */}
      <div className="mt-4 p-3.5 rounded-xl bg-[#0d0d0d] border border-neutral-800 text-xs text-neutral-300 flex items-center justify-between">
        <div>
          <strong className="text-white">Active Stage: </strong>
          {stages.find(s => s.id === activeStage)?.description}
        </div>
        <div className="hidden sm:flex items-center gap-1 text-emerald-400 font-semibold text-[11px] shrink-0 font-mono">
          <CheckCircle2 size={13} />
          <span>Fast Marching Telea + ResNet-18</span>
        </div>
      </div>
    </div>
  );
};
